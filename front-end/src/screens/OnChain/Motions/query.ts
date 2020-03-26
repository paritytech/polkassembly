// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

// for motions postType shoud be 2, postTopic should be 2
export const QUERY_LATEST_MOTIONS = gql`
  query LatestMotionPosts($postType: Int!, $limit: Int! = 5 ) {
    posts(limit: $limit, where: {
        type: {
            id: {
                _eq: $postType
            }
        },
        onchain_link: {
            onchain_motion_id: {
                _is_null: false
            },
            onchain_referendum_id: {
                _is_null: true
            }
        }
    }, order_by: {
        onchain_link: {
            onchain_motion_id: desc
        }
    }) {
        id
        title
        author {
            id
            username
            name
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
            onchain_motion_id
            onchain_motion(where: {}) {
                id
                motionStatus(last: 1) {
                    id
                    status
                }
            }
            proposer_address
        }
    }
}`;