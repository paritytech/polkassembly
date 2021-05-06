// Copyright 2018-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise } from '@polkadot/api';
import { Bytes, Option } from '@polkadot/types';
import {
  BlockNumber,
  Hash,
  OpenTip,
} from '@polkadot/types/interfaces';
import { hexToString, logger } from '@polkadot/util';

import { prisma } from '../generated/prisma-client';
import { filterEvents } from '../util/filterEvents';
import { tipStatus } from '../util/statuses';
import {
  Cached,
  NomidotTip,
  Task,
  TipRawEvent,
} from './types';

const l = logger('Task: Tip');

/*
 *  ======= Table (Tip) ======
 */
const createTip: Task<NomidotTip[]> = {
  name: 'createTip',
  read: async (
    blockHash: Hash,
    cached: Cached,
    api: ApiPromise
  ): Promise<NomidotTip[]> => {
    const { events } = cached;

    const tipEvents = filterEvents(
      events,
      'tips',
      'NewTip'
    );

    const results: NomidotTip[] = [];

    await Promise.all(
		tipEvents.map(async ({ event: { data, typeDef } }) => {

        const tipRawEvent: TipRawEvent = data.reduce(
          (prev, curr, index) => {
            const type = typeDef[index].type;

            return {
              ...prev,
              [type]: curr.toJSON(),
            };
          },
          {}
        );

        if (!tipRawEvent.Hash) {
          l.error(
            `Expected Tip hash missing in the event: ${tipRawEvent.Hash}`
          );
          return null;
        }

        const tipInfoRaw: Option<OpenTip>  = await api.query.tips.tips.at(
          blockHash,
          tipRawEvent.Hash
        );

        if (tipInfoRaw.isNone) {
          l.error(`No tip data found for Hash: ${tipRawEvent.Hash}`);
          return null;
        }

        const tip = tipInfoRaw.unwrap();

        const reason: Option<Bytes> = await api.query.tips.reasons.at(
          blockHash,
          tip.reason
        );

        const reasonText = reason.isSome ? hexToString(reason.unwrap().toHex()) : '';

        let finder = tip.finder.toString();
        // Hack to check if finder is of old ITuple type [AccountId, Balance]
        if (finder.includes(',')) {
          try {
            finder = JSON.parse(finder)[0];
          } catch (error) {
            l.error('Error while parsing finder', error);
          }
        }

        const result: NomidotTip = {
          hash: tipRawEvent.Hash,
          reason: reasonText,
          who: tip.who,
          status: tipStatus.OPENED,
          finder,
        };

        if (tip.closes.isSome) {
          result.closes = tip.closes.unwrap().toNumber();
        }

        // finder is council member/tipper when tip submitted by council member
        if (tip.tips.length) {
          const [AccountId] = tip.tips[0];
          if (!result.finder) {
            result.finder = AccountId.toString();
          }
        }

        l.log(`Nomidot Tip: ${JSON.stringify(result)}`);

        results.push(result);
      })
    );

    return results;
  },
  write: async (blockNumber: BlockNumber, value: NomidotTip[]) => {
    await Promise.all(
      value.map(async prop => {
        const {
          hash,
          reason,
          who,
          closes,
          finder,
          status,
        } = prop;

        await prisma.createTip({
          hash: hash,
          reason,
          who: who.toString(),
          finder,
          closes: closes,
          tipStatus: {
            create: {
              blockNumber: {
                connect: {
                  number: blockNumber.toNumber(),
                },
              },
              status,
              uniqueStatus: `${hash}_${status}`,
            },
          },
        });
      })
    );
  },
};

export default createTip;
