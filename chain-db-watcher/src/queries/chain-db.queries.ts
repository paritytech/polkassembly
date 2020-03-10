// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
