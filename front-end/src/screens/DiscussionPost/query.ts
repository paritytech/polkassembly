// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { commentFields } from '../../fragments/comments';
import { postReactionFields } from '../../fragments/postReactions';

const discussionPost = gql`
    fragment discussionPost on posts {
        author {
            id
            name
            username
        }
        content
        created_at
        id
        updated_at
        comments(order_by: {created_at: asc}) {
            ...commentFields
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
        post_reactions {
            ...postReactionFields
        }
    }
    ${commentFields}
    ${postReactionFields}
`;

export const QUERY_DISCUSSION_POST_AND_COMMENTS = gql`
    query DiscussionPostAndComments ($id:Int!) {
        posts(where: {id: {_eq: $id}}) {
            ...discussionPost
        }
    }
    ${discussionPost}
`;
