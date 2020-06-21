// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const addPostAndProposalMutation = gql`
    mutation addPostAndProposalMutation (
        $onchainProposalId:Int!,
        $authorId: Int!,
        $proposerAddress: String!,
        $content: String!,
        $topicId: Int!,
        $typeId: Int!
        ){
        __typename
        insert_onchain_links(objects: {
            onchain_proposal_id: $onchainProposalId,
            proposer_address: $proposerAddress,
            post: {data: {
                author_id: $authorId,
                content: $content,
                topic_id: $topicId,
                type_id: $typeId
            }
        }}) {
            returning {
                id
            }
        }
    }
`;

export const addPostAndTreasurySpendProposalMutation = gql`
    mutation addPostAndTreasurySpendProposalMutation (
        $onchainTreasuryProposalId:Int!,
        $authorId: Int!,
        $proposerAddress: String!,
        $content: String!,
        $topicId: Int!,
        $typeId: Int!
        ){
        __typename
        insert_onchain_links(objects: {
            onchain_treasury_proposal_id: $onchainTreasuryProposalId,
            proposer_address: $proposerAddress,
            post: {data: {
                author_id: $authorId,
                content: $content,
                topic_id: $topicId,
                type_id: $typeId
            }
        }}) {
            returning {
                id
            }
        }
    }
`;

export const addPostAndTipMutation = gql`
    mutation addPostAndTipMutation (
        $onchainTipId:Int!,
        $authorId: Int!,
        $proposerAddress: String!,
        $content: String!,
        $topicId: Int!,
        $typeId: Int!
        ){
        __typename
        insert_onchain_links(objects: {
            onchain_tip_id: $onchainTipId,
            proposer_address: $proposerAddress,
            post: {data: {
                author_id: $authorId,
                content: $content,
                topic_id: $topicId,
                type_id: $typeId
            }
        }}) {
            returning {
                id
            }
        }
    }
`;

export const addPostAndMotionMutation = gql`
    mutation addPostAndMotionMutation (
        $onchainMotionProposalId:Int!,
        $authorId: Int!,
        $proposerAddress: String!,
        $content: String!,
        $topicId: Int!,
        $typeId: Int!
        ){
        __typename
        insert_onchain_links(objects: {
            onchain_motion_id: $onchainMotionProposalId,
            proposer_address: $proposerAddress,
            post: {data: {
                author_id: $authorId,
                content: $content,
                topic_id: $topicId,
                type_id: $typeId
            }
        }}) {
            returning {
                id
            }
        }
    }
`;

export const getProposalWithNoAssociatedReferendumQuery = gql`
    query getProposalWithNoAssociatedReferendumQuery($onchainProposalId: Int!) {
        onchain_links(where: {_and: {
                onchain_proposal_id: {_eq: $onchainProposalId},
                onchain_referendum_id: {_is_null: true}
            }}) {
            id
        }
    }
`;

export const getMotionWithNoAssociatedReferendumQuery = gql`
    query getMotionWithNoAssociatedReferendumQuery($onchainMotionId: Int!) {
        onchain_links(where: {_and: {
                onchain_motion_id: {_eq: $onchainMotionId},
                onchain_referendum_id: {_is_null: true}
            }}) {
            id
        }
    }
`;

export const addReferendumIdToProposalMutation = gql`
    mutation addReferendumIdToProposalMutation($proposalId: Int!, $referendumId: Int!) {
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

export const addMotionIdToTreasuryProposalMutation = gql`
    mutation addMotionIdToTreasuryProposalMutation($treasuryProposalId: Int!, $motionId: Int!) {
        update_onchain_links(
            where: {
                onchain_treasury_proposal_id: {_eq: $treasuryProposalId}
            },
            _set: {
                onchain_motion_id: $motionId
            }
        ) {
            affected_rows
        }
    }
`;

export const addReferendumIdToMotionMutation = gql`
        mutation addReferendumIdToMotionMutation($motionId: Int!, $referendumId: Int!) {
            update_onchain_links(
                where: {
                    onchain_motion_id: {_eq: $motionId}
                },
                _set: {
                    onchain_referendum_id: $referendumId
                }
            ) {
            affected_rows
        }
    }
`;

export const loginMutation = gql`
    mutation loginMutation($password: String!, $username: String!) {
        login(password: $password, username: $username) {
            token
        }
    }
`;

export const getDiscussionProposalById = gql`
    query getDiscussionProposalById($onchainProposalId: Int!) {
        onchain_links(where: {onchain_proposal_id: {_eq: $onchainProposalId}}) {
            id
        }
    }
`;

export const getDiscussionMotionProposalById = gql`
    query getDiscussionMotionProposalById($onchainMotionProposalId: Int!) {
        onchain_links(where: {onchain_motion_id: {_eq: $onchainMotionProposalId}}) {
            id
        }
    }
`;

export const getDiscussionTreasurySpendProposalById = gql`
    query getDiscussionTreasurySpendProposalById($onchainTreasuryProposalId: Int!) {
        onchain_links(where: {onchain_treasury_proposal_id: {_eq: $onchainTreasuryProposalId}}) {
            id
        }
    }
`;

export const getDiscussionTipById = gql`
    query getDiscussionTipById($onchainTipId: Int!) {
        onchain_links(where: {onchain_tip_id: {_eq: $onchainTipId}}) {
            id
        }
    }
`;

