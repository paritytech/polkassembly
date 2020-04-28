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
						number
					}
					status
				}
				preimageHash
			}
		}
	}
`;

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
