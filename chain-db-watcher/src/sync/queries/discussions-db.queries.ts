// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const getDiscussionMotions = gql`
    query getDiscussionMotions {
        onchain_links(where: {onchain_motion_id: {_is_null: false}}){
            ...discussionMotion
        }
    }
    fragment discussionMotion on onchain_links {
        id
        onchain_motion_id
        proposer_address
    }
`;

export const getDiscussionProposals = gql`
    query getDiscussionProposals {
        onchain_links(where: {onchain_proposal_id: {_is_null: false}}){
            ...discussionProposal
        }
    }
    fragment discussionProposal on onchain_links {
        id
        onchain_proposal_id
        proposer_address
    }
`;

export const getDiscussionReferenda = gql`
query getDiscussionReferenda {
    onchain_links(where: {onchain_referendum_id: {_is_null: false}}){
        ...discussionReferendum
    }
  }
  fragment discussionReferendum on onchain_links {
        id
        onchain_referendum_id
  }
`;

export const getDiscussionTreasuryProposals = gql`
    query getDiscussionTreasuryProposals {
        onchain_links(where: {onchain_treasury_proposal_id: {_is_null: false}}){
            ...discussionTreasuryProposal
        }
    }
    fragment discussionTreasuryProposal on onchain_links {
        id
        onchain_treasury_proposal_id
        proposer_address
    }
`;

export const getDiscussionBounties = gql`
    query getDiscussionBounties {
        onchain_links(where: {onchain_bounty_id: {_is_null: false}}){
            ...discussionBounty
        }
    }
    fragment discussionBounty on onchain_links {
        id
        onchain_bounty_id
        proposer_address
    }
`;

export const getDiscussionTips = gql`
    query getDiscussionTips {
        onchain_links(where: {onchain_tip_id: {_is_null: false}}){
            ...discussionTip
        }
    }
    fragment discussionTip on onchain_links {
        id
        onchain_tip_id
        proposer_address
    }
`;

export const getDiscussionTechCommitteeProposals = gql`
    query getDiscussionTechCommitteeProposals {
        onchain_links(where: {onchain_tech_committee_proposal_id: {_is_null: false}}){
            ...discussionTechCommitteeProposal
        }
    }
    fragment discussionTechCommitteeProposal on onchain_links {
        id
        onchain_tech_committee_proposal_id
        proposer_address
    }
`;

