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
                        }
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
//   {
//     "data": {
//       "proposals": [
//         {
//           "proposalId": 0,
//           "preimage": {
//             "hash": "0xd81b9aefdaf562df8e7b503523eeca599ed89ef91e4828da82fb2030ca15d01e"
//           }
//         }
//       ]
//     }
//   }
