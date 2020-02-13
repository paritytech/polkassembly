import gql from 'graphql-tag';

export const getExecutedMotionsWithPreimageHash = gql`
    query getExecutedMotionsWithPreimageHash($preimageHash: String!) {
        motions(
            where: {
                AND: [
                    { status_every: { status: "Tabled" } }
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
                proposalStatus_every: {
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

export const motionSubscription = gql`
	subscription motionSubscription {
        motion {
            mutation
            node {
                author
                id
                motionProposalId
                motionProposalHash
                status(orderBy: id_DESC) {
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

// "motion": {
//     "mutation": "CREATED",
//     "node": {
//         "motionProposalId": 0,
//         "preimage": {
//             "hash": "0x24f65d1cc0dcbf025a12c7fb969f7251b576155c9bff24b6e638c21ab3b3897b"
//         },
//         "id": 6,
//         "status": [
//             {
//                 "blockNumber": {
//                     "hash": "0xf54c4d8f46b9a9e770e1f595ea5ac545fdfe5b9cc485ff425dc72464bf2815f0"
//                 },
//                 "status": "Proposed"
//             }
//         ],
//         "motionProposalHash": "0x4d4dd65ab6f3495525bda9574c58796c3fbda87848074dee6fcc858dad755a2a"
//     }
// }
