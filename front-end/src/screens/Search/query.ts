// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';

const searchPostFields = gql`
    fragment searchPostFields on posts {
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

export const QUERY_SEARCH_POSTS = gql`
	query SearchPosts($term:String!) {
		posts(
			order_by: {id: desc},
			limit: 20,
			where: {
				_or: [
					{title: {_ilike: $term}},
					{content: {_ilike: $term}}
				]
			}
		) {
			...searchPostFields
		}
	}
	${searchPostFields}
`;
