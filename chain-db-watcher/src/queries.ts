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

