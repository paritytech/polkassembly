// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const votesFields = gql`
    fragment votesFields on votes {
        id
        voter {
            id
            username
            kusama_default_address
            polkadot_default_address
        }
        vote
        created_at
        updated_at
    }
`;

export const QUERY_POST_VOTES = gql`
    query Votes ($postId: Int!) {
        votes(where: {post_id: {_eq: $postId}}) {
            ...votesFields
        }
    }
    ${votesFields}
`;

export const ADD_VOTE = gql`
    mutation AddVote ($postId: Int!, $userId: Int!, $vote: String!) {
        __typename
        insert_votes_one(objects: {post_id: $postId, user_id: $userId, vote: $vote}) {
            affected_rows
        }
    }
`;

export const DELETE_VOTE = gql`
    mutation DeletePostReaction ($postId: Int!, $userId: Int!) {
        delete_vote(where: {_and: [{post_id: {_eq: $postId}}, {user_id: {_eq: $userId}}}]}) {
            affected_rows
        }
    }
`;
