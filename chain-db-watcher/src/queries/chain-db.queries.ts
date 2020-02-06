import gql from 'graphql-tag';

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

