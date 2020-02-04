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

export const getProposalQuery = `
    query getProposal($onchainProposalId: Int!) {
        onchain_links(where: {onchain_proposal_id: {_eq: $onchainProposalId}}) {
            id
        }
    }
`;

export const loginMutation = `
    mutation LOGIN($password: String!, $username: String!) {
        login(password: $password, username: $username) {
            token
        }
    }
`;

