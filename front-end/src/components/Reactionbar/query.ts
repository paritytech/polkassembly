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
