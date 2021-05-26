// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';

import { commentFields } from '../../fragments/comments';

const onchainLinkProposal = gql`
    fragment onchainLinkProposal on onchain_links {
        id,
        proposer_address,
        onchain_proposal_id,
        onchain_referendum_id,
        onchain_proposal(where: {}) {
            id
            depositAmount
            proposalStatus(last: 1) {
                id
                status
            }
            preimage {
                hash
                id
                metaDescription
                method
                preimageArguments {
                    id
                    name
                    value
                }
            }
        }
    }
`;

const proposalPost = gql`
    fragment proposalPost on posts {
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
            ...onchainLinkProposal
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
    ${onchainLinkProposal}
`;

export const QUERY_PROPOSAL_POST_AND_COMMENTS = gql`
    query ProposalPostAndComments ($id:Int!) {
        posts(where: {onchain_link: {onchain_proposal_id: {_eq: $id}}}) {
            ...proposalPost
        }
    }
    ${proposalPost}
`;

