// Copyright 2018-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise } from '@polkadot/api';
import { BlockNumber, Hash } from '@polkadot/types/interfaces';
import { logger } from '@polkadot/util';

import { prisma } from '../generated/prisma-client';
import newProposalStatus from '../util/newProposalStatus';
import { referendumStatus, proposalStatus } from '../util/statuses';
import {
  Cached,
  NomidotReferendumRawEvent,
  NomidotReferendumStatusUpdate,
  Task,
} from './types';

const l = logger('Task: Referendum Status Update');

/*
 *  ======= Table (Referendum Status Update) ======
 */
const createReferendumStatus: Task<NomidotReferendumStatusUpdate[]> = {
  name: 'createReferendumStatusUpdate',
  read: async (
    _blockHash: Hash,
    cached: Cached,
    _api: ApiPromise
  ): Promise<NomidotReferendumStatusUpdate[]> => {
    const { events } = cached;

    // The "Started" event is taken care of by the createReferendum
    // task, so we need to filter it out.
    const referendumEvents = events.filter(
      ({ event: { method, section } }) =>
        section === 'democracy' &&
        Object.values(referendumStatus)
          .filter(status => status !== referendumStatus.STARTED)
          .includes(method)
    );

    const results: NomidotReferendumStatusUpdate[] = [];

    if (!referendumEvents) {
      return results;
    }

    await Promise.all(
      referendumEvents.map(async ({ event: { data, typeDef, method } }) => {
        const referendumRawEvent: NomidotReferendumRawEvent = data.reduce(
          (prev, curr, index) => {
            const type = typeDef[index].type;
            return {
              ...prev,
              [type]: curr.toJSON(),
            };
          },
          {}
        );

        if (
          !referendumRawEvent.ReferendumIndex &&
          referendumRawEvent.ReferendumIndex !== 0
        ) {
          l.error(
            `Expected ReferendumIndex not found on the event: ${referendumRawEvent.ReferendumIndex}`
          );
          return null;
        }

        const relatedReferendum = await prisma.referendum({
          referendumId: referendumRawEvent.ReferendumIndex,
        });

        if (!relatedReferendum) {
          l.error(
            `No existing referendum found for referendum id: ${referendumRawEvent.ReferendumIndex}`
          );
          return [];
        }

        const result: NomidotReferendumStatusUpdate = {
          referendumId: referendumRawEvent.ReferendumIndex,
          status: method,
        };
        l.log(`Nomidot Referendum Status Update: ${JSON.stringify(result)}`);
        results.push(result);
      })
    );

    return results;
  },
  write: async (
    blockNumber: BlockNumber,
    value: NomidotReferendumStatusUpdate[]
  ) => {
    if (value && value.length) {
      await Promise.all(
        value.map(async ref => {
          const { referendumId, status } = ref;

          await prisma.createReferendumStatus({
            blockNumber: {
              connect: {
                number: blockNumber.toNumber(),
              },
            },
            referendum: {
              connect: {
                referendumId,
              },
            },
            status,
            uniqueStatus: `${referendumId}_${status}`,
          });

          // if the referendum got executed
          // and if this is calling a democracy.clearPublicProps
          // Then clear any previous proposal with status "Proposed"
          if (status === referendumStatus.EXECUTED){
            const method = await prisma.referendum({referendumId: referendumId})?.preimage()?.method()
            if (method === 'clearPublicProposals'){
              // get all the proposal that are not tabled and not cleared
              // and that where proposed before the current block number
              const proposedProposals = await prisma.proposals({
                where: {
                  AND: [
                    { proposalStatus_none: { status: proposalStatus.TABLED }},
                    { proposalStatus_none: { status: proposalStatus.CLEARED }},
                    {
                      proposalStatus_some: {
                        AND: [
                          { status: proposalStatus.PROPOSED },
                          { blockNumber: { number_lte: blockNumber.toNumber() }}
                        ]
                      }
                    }
                  ]
                }
              });

              // mark these proposals as cleared
              proposedProposals.map(async (proposal) => {
                const { proposalId } = proposal;
                const status = proposalStatus.CLEARED;
                await newProposalStatus({blockNumber, proposalId, status});
              })
            }
          }
        })
      );
    }
  },
};

export default createReferendumStatus;
