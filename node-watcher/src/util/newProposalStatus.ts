import { BlockNumber } from '@polkadot/types/interfaces';

import { prisma } from "../generated/prisma-client";

interface Props{
    blockNumber: BlockNumber
    proposalId: number
    status: string
}
export default async ({ blockNumber, proposalId, status }: Props) => { 
    await prisma.createProposalStatus({
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
}