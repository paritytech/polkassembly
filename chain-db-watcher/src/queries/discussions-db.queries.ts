import gql from 'graphql-tag';

export const addPostAndProposalMutation = gql`
    mutation addPostAndProposalMutation (
        $onchainProposalId:Int!,
        $author_id: Int!,
        $proposer_address: String!,
        $content: String!,
        $title: String!,
        $topic_id: Int!,
        $type_id: Int!
        ){
        __typename
        insert_onchain_links(objects: {
            onchain_proposal_id: $onchainProposalId,
            proposer_address: $proposer_address,
            post: {data: {
                author_id: $author_id,
                content: $content,
                title: $title,
                topic_id: $topic_id,
                type_id: $type_id
            }
        }}) {
            returning {
                id
            }
        }
    }
`;

// returns
// {
//  "data": {
//    "insert_onchain_links": {
//      "returning": [
//        {
//          "id": 1
//        }
//      ]
//    },
//    "__typename": "mutation_root"
//  }
//   }

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
