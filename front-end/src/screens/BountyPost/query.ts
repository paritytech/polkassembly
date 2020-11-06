// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';

import { commentFields } from '../../fragments/comments';

const onchainLinkBounty = gql`
    fragment onchainLinkBounty on onchain_links {
        id,
        proposer_address,
        onchain_bounty_id,
        onchain_bounty(where: {}) {
            id
            proposer
            value
            fee
            curatorDeposit
            bond
            bountyId
            curator
            beneficiary
            bountyStatus(last: 1) {
                id
                status
                blockNumber {
                    startDateTime
                    number
                }
            }
        }
    }
`;

const bountyPost = gql`
    fragment bountyPost on posts {
        author {
            ...authorFields
        }
        content
        created_at
        id
        updated_at
        comments(order_by: {created_at: asc}) {
            ...commentFields
        }
        onchain_link{
            ...onchainLinkBounty
        }
        title
        topic {
            id
            name
        }
        type {
            id
            name
        }
    }
    ${authorFields}
    ${commentFields}
    ${onchainLinkBounty}
`;

export const QUERY_BOUNTY_POST_AND_COMMENTS = gql`
    query BountyPostAndComments ($id: Int!) {
        posts(where: {onchain_link: {onchain_bounty_id: {_eq: $id}}}) {
            ...bountyPost
        }
    }
    ${bountyPost}
`;

