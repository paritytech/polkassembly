// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';

import { commentFields } from '../../fragments/comments';

const onchainLinkTechCommitteeProposalPreimage = gql`
    fragment onchainLinkTechCommitteeProposalPreimage on Preimage {
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
`;

const onchainLinkTechCommitteeProposal = gql`
    fragment onchainLinkTechCommitteeProposal on onchain_links {
        id,
        proposer_address,
        onchain_tech_committee_proposal_id,
        onchain_tech_committee_proposal(where: {}) {
            id
            status(orderBy: id_DESC) {
                id
                status
                blockNumber {
                  number
                }
            }
            metaDescription
            memberCount
            method
            proposalHash
            proposalArguments{
                name
                value
            }
            preimage {
                ...onchainLinkTechCommitteeProposalPreimage
            }
        }
    }
    ${onchainLinkTechCommitteeProposalPreimage}
`;

const techCommitteeProposalPost = gql`
    fragment techCommitteeProposalPost on posts {
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
            ...onchainLinkTechCommitteeProposal
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
    ${onchainLinkTechCommitteeProposal}
`;

export const QUERY_ONCHAIN_TECH_COMMITTEE_PROPOSAL_POST_AND_COMMENTS = gql`
    query TechCommitteeProposalPostAndComments ($id:Int!) {
        posts(where: {onchain_link: {onchain_tech_committee_proposal_id: {_eq: $id}}}) {
            ...techCommitteeProposalPost
        }
    }
    ${techCommitteeProposalPost}
`;

