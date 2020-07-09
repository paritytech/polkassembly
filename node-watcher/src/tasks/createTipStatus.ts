// Copyright 2018-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise } from '@polkadot/api';
import { BlockNumber, Hash, OpenTip } from '@polkadot/types/interfaces';
import { Option } from '@polkadot/types';
import { logger } from '@polkadot/util';

import { prisma } from '../generated/prisma-client';
import { tipStatus } from '../util/statuses';
import {
  Cached,
  TipRawEvent,
  NomidotTipStatusUpdate,
  Task,
} from './types';

const l = logger('Task: Tip Status Update');

/*
 *  ======= Table (Tip Status Update) ======
 */
const createTipStatus: Task<NomidotTipStatusUpdate[]> = {
  name: 'createTipStatusUpdate',
  read: async (
    blockHash: Hash,
    cached: Cached,
    api: ApiPromise
  ): Promise<NomidotTipStatusUpdate[]> => {
  const { events } = cached;

    const filteredEvents = events.filter(
    ({ event: { method, section } }) =>
      section === 'treasury' &&
      ['TipClosed', 'TipClosing', 'TipRetracted'].includes(method)
    );

    const results: NomidotTipStatusUpdate[] = [];

    if (!filteredEvents) {
      return results;
    }

    await Promise.all(
      filteredEvents.map(async ({ event: { data, typeDef, method } }) => {
        const tipRawEvent: TipRawEvent = data.reduce(
          (result, curr, index) => {
            const type = typeDef[index].type;

            return {
            ...result,
            [type]: curr.toJSON(),
            };
          },
          {}
        );

        if (!tipRawEvent.Hash) {
          l.error(
            `Expected Tip hash missing in the event: ${tipRawEvent.Hash}`
          );
          return;
        }

        const tips = await prisma.tips({
          where: { hash: tipRawEvent.Hash },
        });

        if (!tips || !tips.length) {
          l.error(
            `No existing tip found for hash: ${tipRawEvent.Hash}`
          );
          return;
        }

        let status = '';

        switch(method) {
          case 'TipClosed':
            status = tipStatus.CLOSED;
            break;
          case 'TipClosing':
            status = tipStatus.CLOSING;
            break;
          case 'TipRetracted':
            status = tipStatus.RETRACTED;
            break;
          default:
            return;
        }

        let closes: number | undefined;

        if (method === tipStatus.CLOSING) {
          const tipInfoRaw: Option<OpenTip>  = await api.query.treasury.tips(
            tipRawEvent.Hash
          );

          if (tipInfoRaw.isNone) {
            l.error(`No tip data found for Hash: ${tipRawEvent.Hash}`);

          } else {
            const tip = tipInfoRaw.unwrap();

            if (tip.closes.isSome) {
              closes = tip.closes.unwrap().toNumber()
            }
          }
        }

        const result: NomidotTipStatusUpdate = {
          tipId: tips[0].id,
          status,
          closes
        };
        l.log(`Nomidot Tip Status Update: ${JSON.stringify(result)}`);
        results.push(result);
      })
    );

    return results;
  },
  write: async (
    blockNumber: BlockNumber,
    value: NomidotTipStatusUpdate[]
  ) => {
    if (value && value.length) {
      await Promise.all(
        value.map(async ref => {
          const { tipId, status, closes } = ref;

          if (closes) {
            await prisma.updateTip({
              data: {
                closes,
              },
              where: {
                id: tipId,
              },
            });
          }

          await prisma.createTipStatus({
            blockNumber: {
              connect: {
                number: blockNumber.toNumber(),
              },
            },
            tip: {
              connect: {
                id: tipId,
              },
            },
            status,
            uniqueStatus: `${tipId}_${status}`,
          });
        })
      );
    }
  },
};

export default createTipStatus;
