// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';

const postFields = gql`
    fragment postFields on posts {
        id
        title
        author {
            ...authorFields
        }
        created_at
        updated_at
        comments_aggregate {
            aggregate {
                count
            }
        }
        type {
            name
            id
        }
        last_update {
            last_update
        }
    }
    ${authorFields}
`;

export const QUERY_LATEST_DISCUSSIONS = gql`
    query LatestDiscussionPosts($limit: Int! = 20) {
        posts(order_by: {last_update: {last_update: desc}}, limit: $limit, where: {type: {id: {_eq: 1}}}) {
            ...postFields
        }
    }
    ${postFields}
`;

export const QUERY_DISCUSSIONS_ID_DESC = gql`
    query DiscussionPostsIdDesc($limit: Int! = 20) {
        posts(order_by: {id: desc}, limit: $limit, where: {type: {id: {_eq: 1}}}) {
            ...postFields
        }
    }
    ${postFields}
`;

export const QUERY_DISCUSSIONS_ID_ASC = gql`
    query DiscussionPostsIdAsc($limit: Int! = 20) {
        posts(order_by: {id: asc}, limit: $limit, where: {type: {id: {_eq: 1}}}) {
            ...postFields
        }
    }
    ${postFields}
`;
