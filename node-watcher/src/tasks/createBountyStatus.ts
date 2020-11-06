// Copyright 2018-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise } from '@polkadot/api';
import { BlockNumber, Hash } from '@polkadot/types/interfaces';
import { logger } from '@polkadot/util';

import { prisma } from '../generated/prisma-client';
import { bountyStatus } from '../util/statuses';
import {
  Cached,
  NomidotBountyRawEvent,
  NomidotBountyStatusUpdate,
  Task,
} from './types';

const l = logger('Task: Bounty Status Update');

/*
 *  ======= Table (Bounty Status Update) ======
 */
const createBountyStatus: Task<NomidotBountyStatusUpdate[]> = {
  name: 'createBountyStatusUpdate',
  read: async (
    blockHash: Hash,
    cached: Cached,
    api: ApiPromise
  ): Promise<NomidotBountyStatusUpdate[]> => {
  const { events } = cached;

    const filteredEvents = events.filter(
    ({ event: { method, section } }) =>
      section === 'treasury' &&	[
        bountyStatus.BECAME_ACTIVE,
        bountyStatus.AWARDED,
        bountyStatus.CLAIMED,
        bountyStatus.CANCELED,
        bountyStatus.REJECTED,
        bountyStatus.EXTENDED
		].includes(method));

    const results: NomidotBountyStatusUpdate[] = [];

    if (!filteredEvents.length) {
      return results;
    }

    await Promise.all(
      filteredEvents.map(async ({ event: { data, typeDef, method } }) => {
        const bountyRawEvent: NomidotBountyRawEvent = data.reduce(
          (result, curr, index) => {
            const type = typeDef[index].type;

            return {
            ...result,
            [type]: curr.toJSON(),
            };
          },
          {}
        );

        if (!bountyRawEvent.BountyIndex) {
          l.error(
            `Expected Bounty index missing in the event: ${bountyRawEvent.BountyIndex}`
          );
          return;
        }

        const bounties = await prisma.bounties({
          where: { bountyId: bountyRawEvent.BountyIndex },
        });

        if (!bounties || !bounties.length) {
          l.error(
            `No existing bounty found for index: ${bountyRawEvent.BountyIndex}`
          );
          return;
        }

        const result: NomidotBountyStatusUpdate = {
          bountyId: bountyRawEvent.BountyIndex,
          status: method,
        };
        l.log(`Nomidot Bounty Status Update: ${JSON.stringify(result)}`);
        results.push(result);
      })
    );

    return results;
  },
  write: async (
    blockNumber: BlockNumber,
    value: NomidotBountyStatusUpdate[]
  ) => {
    if (value && value.length) {
      await Promise.all(
        value.map(async ref => {
          const { bountyId, status } = ref;

          await prisma.createBountyStatus({
            blockNumber: {
              connect: {
                number: blockNumber.toNumber(),
              },
            },
            bounty: {
              connect: {
                id: bountyId,
              },
            },
            status,
            uniqueStatus: `${bountyId}_${status}`,
          });
        })
      );
    }
  },
};

export default createBountyStatus;
