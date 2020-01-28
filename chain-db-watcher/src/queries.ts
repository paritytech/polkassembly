import gql from 'graphql-tag';

export const proposalSubscription = gql`
	subscription proposalSubscription {
		proposal {
			mutation
			node {
				id
				author
				proposalId
			}
		}
	}
`;

// e.g returns
// data: {
//  proposal: {
//      mutation: 'CREATED',
//      node: {
//         author: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
//         method: 'remark',
//         metaDescription: '[ Make some on-chain remark.]',
//         proposalId: 0,
//         section: 'system',
//         depositAmount: '123000000000000',
//         proposalArguments: [
//             {
//             name: '_remark',
//             value: '0x00'
//             }
//         ]
//      }
//   }
// };

export const referendumSubscription = gql`
	subscription ProposalsSubscription {
		referendum {
			mutation
			node {
				id
				referendumId
				referendumStatus(orderBy: id_DESC) {
					blockNumber {
						hash
					}
					status
				}
				preimage {
					hash
				}
			}
		}
	}
`;
// "referendum": {
//   "mutation": "CREATED",
//   "node": {
//     "id": 16,
//     "referendumId": 0,
//     "referendumStatus": [
//       {
//         "blockNumber": {
//           "number": 60
//         },
//         "status": "Started"
//       }
//     ],
//     "preimage": null
//   }
// }

export const addPostAndProposalMutation = `
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

export const getProposalQuery = `
    query getProposal($onchainProposalId: Int!) {
        onchain_links(where: {onchain_proposal_id: {_eq: $onchainProposalId}}) {
            id
        }
    }
`;

export const getProposalWithNullReferendumQuery = `
    query getReferendum($onchainProposalId: Int!) {
        onchain_links(where: {_or: {onchain_proposal_id: {_eq: $onchainProposalId}, onchain_referendum_id: {_is_null: true}}}) {
            id
            onchain_proposal_id
        }
    }
`;

// returns
// {
//     "data": {
//       "onchain_links": [
//         {
//           "id": 17,
//           "onchain_proposal_id": 1,
//           "onchain_referendum_id": 1
//         }
//       ]
//     }
//   }

export const loginMutation = `
    mutation LOGIN($password: String!, $username: String!) {
        login(password: $password, username: $username) {
            token
        }
    }
`;

export const getTabledProposalsAtBlockQuery = `
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

export const addReferendumIdMutation = `
        mutation addReferendumId ($proposalId: Int!, $referendumId: Int!) {
            update_onchain_links(
                where: {
                    onchain_proposal_id: {_eq: $proposalId}
                },
                _set: {
                    onchain_referendum_id: $referendumId
                }
            ) {
            affected_rows
        }
    }
`;
