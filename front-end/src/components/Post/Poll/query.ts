// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const postVotesFields = gql`
    fragment postVotesFields on post_votes {
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
    query PostVotes ($postId: Int!) {
        post_votes(where: {post_id: {_eq: $postId}}) {
            ...postVotesFields
        }
    }
    ${postVotesFields}
`;

export const ADD_POST_VOTE = gql`
    mutation AddPostVote ($postId: Int!, $userId: Int!, $vote: bpchar!) {
        __typename
        insert_post_votes_one(object: {post_id: $postId, user_id: $userId, vote: $vote}) {
            id
        }
    }
`;

export const DELETE_VOTE = gql`
    mutation DeleteVote ($postId: Int!, $userId: Int!) {
        delete_post_votes(
            where: {
                _and: [
                    {post_id: {_eq: $postId}},
                    {user_id: {_eq: $userId}}
                ]
            }
        ) {
            affected_rows
        }
    }
`;
