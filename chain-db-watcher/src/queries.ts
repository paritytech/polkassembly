// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const proposalSubscription = gql`
	subscription proposalSubscription($startBlock: Int!) {
		proposal (
			where: {
				node: {
					proposalStatus_some: {
						AND: [
							{ status: "Proposed" }
							{ blockNumber: { number_gte: $startBlock } }
						]
					}
				}
			}
		) {
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
	subscription referendumSubscription($startBlock: Int!) {
		referendum (
			where: {
				node: {
					referendumStatus_some: {
						AND: [
							{ status: "Started" }
							{ blockNumber: { number_gte: $startBlock } }
						]
					}
				}
			}
		) {
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
				preimageHash
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
//     "preimageHash": "0xd81b9aefdaf562df8e7b503523eeca599ed89ef91e4828da82fb2030ca15d01e"
//   }
// }

export const motionSubscription = gql`
	subscription motionSubscription($startBlock: Int!) {
        motion (
            where: {
				node: {
					motionStatus_some: {
						AND: [
							{ status: "Proposed" },
							{ blockNumber: { number_gte: $startBlock } }
						]
					}
				}
            }
        ){
            mutation
            node {
                author
                id
                motionProposalId
                motionStatus(orderBy: id_DESC) {
                    blockNumber {
                        number
                    }
                    status
                }
                preimage {
                    hash
                }
                section
                motionProposalArguments{
                    name
                    value
                }
            }
        }
    }
`;

// "motion": {
//     "mutation": "CREATED",
//     "node": {
//         "motionProposalId": 0,
//         "preimage": {
//             "hash": "0x24f65d1cc0dcbf025a12c7fb969f7251b576155c9bff24b6e638c21ab3b3897b"
//         },
//         "id": 6,
//         "motionStatus": [
//             {
//                 "blockNumber": {
//                     "hash": "0xf54c4d8f46b9a9e770e1f595ea5ac545fdfe5b9cc485ff425dc72464bf2815f0"
//                 },
//                 "status": "Proposed"
//             }
//         ],
//     }
// }

export const treasurySpendProposalSubscription = gql`
	subscription treasurySpendProposalSubscription($startBlock: Int!) {
        treasurySpendProposal (
            where: {
				node: {
					treasuryStatus_some: {
						AND: [
							{ status: "Proposed" },
							{ blockNumber: { number_gte: $startBlock } }
						]
					}
				}
            }
        ){
            mutation
            node {
                id
                proposer
				treasuryProposalId
                treasuryStatus(orderBy: id_DESC) {
                    blockNumber {
                        number
                    }
                    status
                }
            }
        }
    }
`;

// {
// "data": {
//   "treasurySpendProposal": {
//     "mutation": "CREATED",
//     "node": {
//       "id": 3,
//       "proposer": "5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw",
//       "treasuryProposalId": 0,
//       "treasuryStatus": [
//       {
//         "blockNumber": {
//           "hash": "0x8a0367f7891bbc2a17d0566224ca929de3b0b0dbc4bb852316293f777d1d53db"
//         },
//         "status": "Proposed"
//         }
//       ]
//     }
//   }
// }
//   }
