// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';

// for motions postType shoud be 2, postTopic should be 2
export const QUERY_TRACKER_MOTIONS = gql`
    query TrackerMotionPosts($postType: Int!, $onchainMotionIds: [Int!]! ) {
        posts(where: {
            type: {
                id: {
                    _eq: $postType
                }
            },
            onchain_link: {
                onchain_motion_id: {
                    _in: $onchainMotionIds
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
                onchain_motion_id
                onchain_motion(where: {}) {
                    id
                    motionStatus(last: 1) {
                        id
                        status
                    }
                    preimage {
                        id
                        method
                    }
                }
                proposer_address
            }
        }
    }
    ${authorFields}
`;
