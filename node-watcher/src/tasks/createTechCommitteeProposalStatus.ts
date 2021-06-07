// Copyright 2018-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise } from '@polkadot/api';
import { BlockNumber, Hash } from '@polkadot/types/interfaces';
import { logger } from '@polkadot/util';

import { prisma } from '../generated/prisma-client';
import { techCommitteeStatus } from '../util/statuses';
import {
  Cached,
  NomidotTechCommitteeProposalRawEvent,
  NomidotTechCommitteeProposalStatusUpdate,
  Task,
} from './types';

const l = logger('Task: Tech Committee Proposal Status Update');

/*
 *  ======= Table (Tech Committee Proposal Status Update) ======
 */
const createTechCommitteeProposalStatus: Task<NomidotTechCommitteeProposalStatusUpdate[]> = {
  name: 'createTechCommitteeProposalStatus',
  read: async (
    _blockHash: Hash,
    cached: Cached,
    _api: ApiPromise
  ): Promise<NomidotTechCommitteeProposalStatusUpdate[]> => {
    const { events } = cached;
    // Proposed is handled by createTechCommitteeProposal task
    // Voted should be handled by a vote tracking tasks
    const techCommitteeProposalEvents = events.filter(
      ({ event: { method, section } }) =>
        section === 'technicalCommittee' &&
        method !== techCommitteeStatus.VOTED &&
        method !== techCommitteeStatus.MEMBER_EXECUTED &&
		method !== techCommitteeStatus.PROPOSED
    );

    const results: NomidotTechCommitteeProposalStatusUpdate[] = [];

    if (!techCommitteeProposalEvents) {
      return results;
    }

    await Promise.all(
		techCommitteeProposalEvents.map(async ({ event: { data, method, typeDef } }) => {
        const techCommitteeProposalRawEvent: NomidotTechCommitteeProposalRawEvent = data.reduce(
          (result, curr, index) => {
            const type = typeDef[index].type;

            return {
              ...result,
              [type]: curr.toJSON(),
            };
          },
          {}
        );

        if (!techCommitteeProposalRawEvent.Hash) {
          l.error(
            `Expected Proposal Hash not found on the event: ${techCommitteeProposalRawEvent.Hash}`
          );
          return null;
        }

        // Get the latest Tech Committee Proposal with this proposal hash
        // that is still active (hence not approved, disapproved..)
        const relatedTechCommitteeProposals = await prisma.techCommitteeProposals({
          where: {
            AND: [
              {
                proposalHash: techCommitteeProposalRawEvent.Hash.toString(),
              },
              {
                // eslint-disable-next-line @typescript-eslint/camelcase
                status_every: {
                  // eslint-disable-next-line @typescript-eslint/camelcase
                  status_not_in: [
					techCommitteeStatus.APPROVED,
					techCommitteeStatus.CLOSED,
					techCommitteeStatus.DISAPPROVED,
					techCommitteeStatus.EXECUTED,
					techCommitteeStatus.MEMBER_EXECUTED,
					techCommitteeStatus.VOTED,
                  ],
                },
              },
            ],
          },
        });

        const relatedTechCommitteeProposal = relatedTechCommitteeProposals[0];

        if (!relatedTechCommitteeProposal) {
          l.error(
            `No existing TechCommitteeProposal found for TechCommitteeProposal hash: ${techCommitteeProposalRawEvent.Hash}`
          );
          return null;
        }

        const result: NomidotTechCommitteeProposalStatusUpdate = {
          proposalId: relatedTechCommitteeProposal.proposalId,
          status: method,
        };

        l.log(`Nomidot TechCommitteeProposal Status Update: ${JSON.stringify(result)}`);
        results.push(result);
      })
    );

    return results;
  },
  write: async (
    blockNumber: BlockNumber,
    value: NomidotTechCommitteeProposalStatusUpdate[]
  ) => {
    if (!value || !value.length) {
      return;
    }

    await Promise.all(
      value.map(async prop => {
        const { proposalId, status } = prop;

        await prisma.createTechCommitteeProposalStatus({
          blockNumber: {
            connect: {
              number: blockNumber.toNumber(),
            },
          },
          proposal: {
            connect: {
              proposalId,
            },
          },
          status,
          uniqueStatus: `${proposalId}_${status}`,
        });
      })
    );
  },
};

export default createTechCommitteeProposalStatus;
