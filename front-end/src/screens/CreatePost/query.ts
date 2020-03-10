// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const CREATE_POST = gql`
    mutation createPost($userId: Int! $content: String! $topicId: Int! $title: String!) {
        __typename
        insert_posts(objects: {
            author_id: $userId,
            content: $content,
            title: $title,
            topic_id: $topicId
        }) {
            affected_rows
            returning {
                id
            }
        }
    }
`;

const topic_fragment = gql`
    fragment topic on post_topics {
        id
        name
    }
`;

export const GET_POST_TOPICS = gql`
    query Post_topics {
        post_topics {
            ...topic
        }
    }
    ${topic_fragment}
`;

