// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const postReactionFields = gql`
    fragment postReactionFields on post_reactions {
        id
        reacting_user {
            id
        }
        reaction
        created_at
        updated_at
    }
`;

export const QUERY_POST_REACTIONS = gql`
    query PostReactions ($postId: Int!) {
        post_reactions(where: {post_id: {_eq: $postId}}) {
            ...postReactionFields
        }
    }
    ${postReactionFields}
`;

export const commentReactionFields = gql`
    fragment commentReactionFields on comment_reactions {
        id
        reacting_user {
            id
        }
        reaction
        created_at
        updated_at
    }
`;

export const QUERY_COMMENT_REACTIONS = gql`
    query CommentReactions ($commentId: uuid!) {
        comment_reactions(where: {comment_id: {_eq: $commentId}}) {
            ...commentReactionFields
        }
    }
    ${commentReactionFields}
`;

export const ADD_POST_REACTION = gql`
    mutation AddPostReaction ($postId: Int!, $userId: Int!, $reaction: bpchar!) {
        __typename
        insert_post_reactions(objects: {post_id: $postId, user_id: $userId, reaction: $reaction}) {
            affected_rows
        }
    }
`;

export const ADD_COMMENT_REACTION = gql`
    mutation AddCommentReaction ($commentId: uuid!, $userId: Int!, $reaction: bpchar!) {
        __typename
        insert_comment_reactions(objects: {comment_id: $commentId, user_id: $userId, reaction: $reaction}) {
            affected_rows
        }
    }
`;

export const DELETE_POST_REACTION = gql`
    mutation DeletePostReaction ($postId: Int!, $userId: Int!, $reaction: bpchar!) {
        delete_post_reactions(where: {_and: [{post_id: {_eq: $postId}}, {user_id: {_eq: $userId}}, {reaction: {_eq: $reaction}}]}) {
            affected_rows
        }
    }
`;

export const DELETE_COMMENT_REACTION = gql`
    mutation DeleteCommentReaction ($commentId: uuid!, $userId: Int!, $reaction: bpchar!) {
        delete_comment_reactions(where: {_and: [{comment_id: {_eq: $commentId}}, {user_id: {_eq: $userId}}, {reaction: {_eq: $reaction}}]}) {
            affected_rows
        }
    }
`;
