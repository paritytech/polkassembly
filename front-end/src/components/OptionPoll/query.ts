// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const CREATE_OPTION_POLL = gql`
    mutation createOptionPoll($postId: Int!, $question: String!, $options: String! $endAt: Int!) {
        __typename
        insert_option_poll(objects: {post_id: $postId, question: $question, options: $options, end_at: $endAt}) {
            affected_rows
        }
    }
`;

export const optionPollFields = gql`
    fragment optionPollFields on option_poll {
		id
		post_id
		question
		options
        end_at
        created_at
        updated_at
    }
`;

export const OPTION_POLL_QUERY = gql`
    query OptionPoll ($postId: Int!) {
        option_poll(where: {post_id: {_eq: $postId}}) {
            ...optionPollFields
        }
    }
    ${optionPollFields}
`;

export const optionPollVotesFields = gql`
    fragment optionPollVotesFields on option_poll_votes {
        id
        option_poll_voter {
            id
            username
        }
        option
        created_at
        updated_at
    }
`;

export const QUERY_OPTION_POLL_VOTES = gql`
    query OptionPollVotes ($optionPollId: Int!) {
        option_poll_votes(where: {option_poll_id: {_eq: $optionPollId}}) {
            ...optionPollVotesFields
        }
    }
    ${optionPollVotesFields}
`;

export const ADD_OPTION_POLL_VOTE = gql`
    mutation AddOptionPollVote ($optionPollId: Int!, $userId: Int!, $option: String!) {
        __typename
        insert_option_poll_votes_one(object: {option_poll_id: $optionPollId, user_id: $userId, option: $option}) {
            id
        }
    }
`;

export const DELETE_OPTION_VOTE = gql`
    mutation DeleteOptionPollVote ($optionPollId: Int!, $userId: Int!) {
        delete_option_poll_votes(
            where: {
                _and: [
                    {option_poll_id: {_eq: $optionPollId}},
                    {user_id: {_eq: $userId}}
                ]
            }
        ) {
            affected_rows
        }
    }
`;

