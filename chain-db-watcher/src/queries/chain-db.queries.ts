import gql from 'graphql-tag';

export const getExecutedMotionsWithPreimageHash = gql`
    query getExecutedMotionsWithPreimageHash($preimageHash: String!) {
        motions(
            where: {
                AND: [
                    { motionStatus_some: { status: "Executed" } }
                    { preimageHash: $preimageHash }
                ]
            }
            orderBy: id_DESC
        ) {
            motionProposalId
        }
    }
  `;

export const getTabledProposalsAtBlockQuery = gql`
    query getTabledProposalAtBlock($blockHash: String!) {
        proposals(
            where: {
                proposalStatus_some: {
                    AND: [
                        {
                            blockNumber: {
                                hash: $blockHash
                            }
                        },
                        { status: "Tabled" }
                    ]
                }
            }
        ) {
            proposalId
                preimage {
                    hash
                }
        }
    }
  `;
