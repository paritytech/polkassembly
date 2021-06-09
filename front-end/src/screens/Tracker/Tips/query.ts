// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';

export const QUERY_TRACKER_TIP_PROPOSALS = gql`
    query TrackerTipPosts($postType: Int!, $onchainTipIds: [String!]! ) {
        posts(where: {
            type: {
                id: {
                    _eq: $postType
                }
            },
            onchain_link: {
                onchain_tip_id: {
                    _in: $onchainTipIds
                }
            }
        }, order_by: {
            onchain_link: {
                id: desc
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
                onchain_tip_id
                onchain_tip(where: {}) {
                    id
                    reason
                    tipStatus(last: 1) {
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
