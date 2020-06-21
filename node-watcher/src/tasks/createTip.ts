// Copyright 2018-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise } from '@polkadot/api';
import { Option } from '@polkadot/types';
import {
  BlockNumber,
  Hash,
  OpenTip,
} from '@polkadot/types/interfaces';
import { logger } from '@polkadot/util';

import { prisma } from '../generated/prisma-client';
import { filterEvents } from '../util/filterEvents';
import { tipStatus } from '../util/statuses';
import {
  Cached,
  NomidotTip,
  NomidotTreasuryRawEvent,
  Task,
  TipRawEvent,
} from './types';

const l = logger('Task: Tip');

/*
 *  ======= Table (Tip) ======
 */
const createTreasury: Task<NomidotTip[]> = {
  name: 'createTip',
  read: async (
    blockHash: Hash,
    cached: Cached,
    api: ApiPromise
  ): Promise<NomidotTip[]> => {
    const { events } = cached;

    const tipEvents = filterEvents(
      events,
      'treasury',
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

        const tipInfoRaw: Option<OpenTip>  = await api.query.treasury.tips.at(
          blockHash,
          tipRawEvent.Hash
        );

        if (tipInfoRaw.isNone) {
          l.error(`No tip data found for Hash: ${tipRawEvent.Hash}`);
          return null;
        }

        const tip = tipInfoRaw.unwrap();

        const result: NomidotTip = {
          hash: tipRawEvent.Hash,
          reason: tip.reason,
          who: tip.who,
          status: tipStatus.OPENED,
        };

        if (tip.closes.isSome) {
          result.closes = tip.closes.unwrap().toNumber();
        }

        if (tip.finder.isSome) {
          const [AccountId, Balance] = tip.finder.unwrap();
          result.finder = AccountId;
          result.finderFee = Balance;
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
          finder,
          finderFee,
          closes,
          status,
        } = prop;

        await prisma.createTip({
          hash: hash,
          reason: reason.toString(),
          who: who.toString(),
          finder: finder?.toString(),
          finderFee: finderFee?.toString(),
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

export default createTreasury;
