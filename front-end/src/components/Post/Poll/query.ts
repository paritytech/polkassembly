// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const pollFields = gql`
    fragment pollFields on poll {
        id
        block_end
        created_at
        updated_at
    }
`;

export const POLL_QUERY = gql`
    query Poll ($postId: Int!) {
        poll(where: {post_id: {_eq: $postId}}) {
            ...pollFields
        }
    }
    ${pollFields}
`;

export const pollVotesFields = gql`
    fragment pollVotesFields on poll_votes {
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

export const QUERY_POLL_VOTES = gql`
    query PollVotes ($pollId: Int!) {
        poll_votes(where: {poll_id: {_eq: $pollId}}) {
            ...pollVotesFields
        }
    }
    ${pollVotesFields}
`;

export const ADD_POLL_VOTE = gql`
    mutation AddPollVote ($pollId: Int!, $userId: Int!, $vote: bpchar!) {
        __typename
        insert_poll_votes_one(object: {poll_id: $pollId, user_id: $userId, vote: $vote}) {
            id
        }
    }
`;

export const DELETE_VOTE = gql`
    mutation DeleteVote ($pollId: Int!, $userId: Int!) {
        delete_poll_votes(
            where: {
                _and: [
                    {poll_id: {_eq: $pollId}},
                    {user_id: {_eq: $userId}}
                ]
            }
        ) {
            affected_rows
        }
    }
`;

export const COUNCIL_AT_BLOCK_NUMBER = gql`
    query councilAtBlockNumber ($blockNumber: Int!) {
        councils(where: {blockNumber: {number_lte: $blockNumber}}, orderBy: id_DESC, first: 1) {
            members {
                address
            }
        }
    }

`;

export const EDIT_POLL = gql`
    mutation EditPoll ($id: Int!,  $blockEnd: Int!) {
        update_poll(where: {id: {_eq: $id}}, _set: {block_end: $blockEnd}) {
            affected_rows
        }
  }
`;
