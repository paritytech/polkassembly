// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';

import { commentFields } from '../../fragments/comments';

const onchainLinkMotionPreimage = gql`
    fragment onchainLinkMotionPreimage on Preimage {
        hash
        id
        metaDescription
        method
        preimageArguments {
            id
            name
            value
        }
    }
`;

const onchainLinkMotionTreasury = gql`
    fragment onchainLinkMotionTreasury on TreasurySpendProposal {
        beneficiary
        bond
        value
    }
`;

const onchainLinkMotion = gql`
    fragment onchainLinkMotion on onchain_links {
        id,
        proposer_address,
        onchain_referendum_id,
        onchain_motion_id,
        onchain_motion(where: {}) {
            id
            motionStatus(last: 1) {
                id
                status
            }
            memberCount
            method
            motionProposalHash
            motionProposalArguments{
                name
                value
            }
            preimage {
                ...onchainLinkMotionPreimage
            }
            treasurySpendProposal{
                ...onchainLinkMotionTreasury
            }
        }
    }
    ${onchainLinkMotionPreimage}
    ${onchainLinkMotionTreasury}
`;

const motionPost = gql`
    fragment motionPost on posts {
        author {
            ...authorFields
        }
        content
        created_at
        id
        updated_at
        comments(order_by: {created_at: asc}) {
            ...commentFields
        }
        onchain_link{
            ...onchainLinkMotion
        }
        title
        topic {
            id
            name
        }
        type {
            id
            name
        }
    }
    ${authorFields}
    ${commentFields}
    ${onchainLinkMotion}
`;

export const QUERY_MOTION_POST_AND_COMMENTS = gql`
    query MotionPostAndComments ($id:Int!) {
        posts(where: {onchain_link: {onchain_motion_id: {_eq: $id}}}) {
            ...motionPost
        }
    }
    ${motionPost}
`;

