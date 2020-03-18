// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const ADD_POST_REACTION = gql`
    mutation AddPostReaction ($postId: Int!, $userId: Int!, $reactionId: Int!) {
        __typename
        insert_post_reactions(objects: {post_id: $postId, user_id: $userId, reaction_id: $reactionId}) {
            affected_rows
        }
    }
`;

export const ADD_COMMENT_REACTION = gql`
    mutation AddCommentReaction ($commentId: uuid!, $userId: Int!, $reactionId: Int!) {
        __typename
        insert_comment_reactions(objects: {comment_id: $commentId, user_id: $userId, reaction_id: $reactionId}) {
            affected_rows
        }
    }
`;

export const DELETE_POST_REACTION = gql`
    mutation DeletePostReaction ($postId: Int!, $userId: Int!, $reactionId: Int!) {
        delete_post_reactions(where: {_and: [{post_id: {_eq: $postId}}, {user_id: {_eq: $userId}}, {reaction_id: {_eq: $reactionId}}]}) {
            affected_rows
        }
    }
`;

export const DELETE_COMMENT_REACTION = gql`
    mutation DeleteCommentReaction ($commentId: uuid!, $userId: Int!, $reactionId: Int!) {
        delete_comment_reactions(where: {_and: [{comment_id: {_eq: $commentId}}, {user_id: {_eq: $userId}}, {reaction_id: {_eq: $reactionId}}]}) {
            affected_rows
        }
    }
`;
