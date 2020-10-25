// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';

// for bounties postType should be 2, postTopic should be 4
export const QUERY_LATEST_BOUNTIES = gql`
    query LatestBountyPosts($postType: Int!, $limit: Int! = 5 ) {
        posts(limit: $limit, where: {
            type: {
                id: {
                    _eq: $postType
                }
            },
            onchain_link: {
                onchain_bounty_id: {
                    _is_null: false
                }
            }
        }, order_by: {
            onchain_link: {
                onchain_bounty_id: desc
            }
        }) {
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
            topic {
                id
                name
            }
            onchain_link {
                id
                onchain_bounty_id
                onchain_bounty(where: {}) {
                    id
                    bountyStatus(last: 1) {
                        id
                        status
                    }
                }
                proposer_address
            }
        }
    }
    ${authorFields}
`;
