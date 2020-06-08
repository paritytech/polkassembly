// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

import { authorFields } from '../../fragments/author';
import { commentFields } from '../../fragments/comments';

const onchainLinkDiscussion = gql`
    fragment onchainLinkDiscussion on onchain_links {
        id,
        onchain_referendum_id,
        onchain_motion_id,
        onchain_proposal_id,
        onchain_treasury_proposal_id,
    }
`;

const discussionPost = gql`
    fragment discussionPost on posts {
        author {
            ...authorFields
        }
        content
        created_at
        has_poll
        poll_block_number_end
        id
        updated_at
        comments(order_by: {created_at: asc}) {
            ...commentFields
        }
        onchain_link{
            ...onchainLinkDiscussion
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
    ${onchainLinkDiscussion}
`;

export const QUERY_DISCUSSION_POST_AND_COMMENTS = gql`
    query DiscussionPostAndComments ($id:Int!) {
        posts(where: {id: {_eq: $id}}) {
            ...discussionPost
        }
    }
    ${discussionPost}
`;
