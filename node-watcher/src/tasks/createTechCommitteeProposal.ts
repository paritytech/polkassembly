// Copyright 2018-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise } from '@polkadot/api';
import {
  BlockNumber,
  Hash,
  Proposal,
} from '@polkadot/types/interfaces';
import { GenericCall, Option } from '@polkadot/types';
import { logger } from '@polkadot/util';

import { prisma } from '../generated/prisma-client';
import { filterEvents } from '../util/filterEvents';
import { preimageStatus, techCommitteeStatus } from '../util/statuses';
import {
  Cached,
  NomidotProposal,
  NomidotArgument,
  NomidotTechCommitteeProposal,
  NomidotTechCommitteeProposalRawEvent,
  Task,
} from './types';

const l = logger('Task: TechCommitteeProposals');

/*
 *  ======= Table (Proposal) ======
 */
const createTechCommitteeProposal: Task<NomidotTechCommitteeProposal[]> = {
  name: 'createTechCommitteeProposal',
  read: async (
    blockHash: Hash,
    cached: Cached,
    api: ApiPromise
  ): Promise<NomidotTechCommitteeProposal[]> => {
    const { events } = cached;
    const proposalEvents = filterEvents(
      events,
      'technicalCommittee',
      techCommitteeStatus.PROPOSED
    );

    const results: NomidotTechCommitteeProposal[] = [];

    await Promise.all(
      proposalEvents.map(async ({ event: { data, typeDef } }) => {
        const proposalRawEvent: NomidotTechCommitteeProposalRawEvent = data.reduce(
          (prev, curr, index) => {
            const type = typeDef[index].type;

            return {
              ...prev,
              [type]: curr.toJSON(),
            };
          },
          {}
        );

        if (!proposalRawEvent.ProposalIndex && proposalRawEvent.ProposalIndex !== 0) {
          l.error(
            `Expected Tech Commt. ProposalIndex missing on the event: ${proposalRawEvent.ProposalIndex}`
          );
          return null;
        }

        if (!proposalRawEvent.Hash) {
          l.error(
            `Expected Tech Commt. Hash missing on the event: ${proposalRawEvent.ProposalIndex}`
          );
          return null;
        }

        if (!proposalRawEvent.AccountId) {
          l.error(
            `Expected Tech Commt. AccountId missing on the event: ${proposalRawEvent.ProposalIndex}`
          );
          return null;
        }

        const proposalRaw: Option<Proposal> = await api.query.technicalCommittee.proposalOf.at(
          blockHash,
          proposalRawEvent.Hash
        );

        const proposal = proposalRaw.unwrapOr(null);

        if (!proposal) {
          l.log(`No tech commt proposal found for the hash ${proposalRawEvent.Hash}`);
          return;
        }

        const { meta, method, section } = api.registry.findMetaCall(
          proposal.callIndex
        );

        const params = GenericCall.filterOrigin(proposal.meta).map(({ name }) =>
          name.toString()
        );
        const values = proposal.args;
        let preimageHash: string | undefined = undefined;

        const proposalArguments: NomidotArgument[] = [];

        proposal.args &&
          params &&
          params.forEach((name, index) => {
            proposalArguments.push({
              name,
              value: values[index].toString(),
            });

            if (name === 'proposal_hash') {
              preimageHash = values[index].toString();
            }
          });

        const result: NomidotTechCommitteeProposal = {
          author: proposalRawEvent.AccountId,
          memberCount: proposalRawEvent.MemberCount,
          metaDescription: meta.documentation.toString(),
          method,
          proposalHash: proposalRawEvent.Hash,
          proposalId: proposalRawEvent.ProposalIndex,
          proposalArguments,
          preimageHash,
          section,
          status: techCommitteeStatus.PROPOSED,
        };

        l.log(`Nomidot TechCommitteeProposal: ${JSON.stringify(result)}`);
        results.push(result);

      })
    );

    return results;
  },
  write: async (blockNumber: BlockNumber, value: NomidotTechCommitteeProposal[]) => {
    await Promise.all(
      value.map(async prop => {
        const {
          author,
          memberCount,
          metaDescription,
          method,
          proposalArguments: mPA,
          proposalHash,
          proposalId,
          preimageHash,
          section,
          status,
        } = prop;

        const preimages = preimageHash
          ? await prisma.preimages({
              where: { hash: preimageHash.toString() },
            })
          : null;

        // preimage aren't uniquely identified with their hash
        // however, there can only be one preimage with the status "Noted"
        // at a time
        const notedPreimage = preimages?.length
          ? preimages.filter(async preimage => {
              await prisma.preimageStatuses({
                where: {
                  AND: [{ id: preimage.id }, { status: preimageStatus.NOTED }],
                },
              });
            })[0]
          : null;

        await prisma.createTechCommitteeProposal({
          author: author.toString(),
          memberCount: memberCount,
          metaDescription,
          method,
          proposalArguments: {
            create: mPA,
          },
          proposalHash: proposalHash?.toString(),
          proposalId,
          preimage: notedPreimage
            ? {
                connect: {
                  id: notedPreimage.id,
                },
              }
            : null,
          preimageHash,
          section,
          status: {
            create: {
              blockNumber: {
                connect: {
                  number: blockNumber.toNumber(),
                },
              },
              status,
              uniqueStatus: `${proposalId}_${status}`,
            },
          },
        });
      })
    );
  },
};

export default createTechCommitteeProposal;
