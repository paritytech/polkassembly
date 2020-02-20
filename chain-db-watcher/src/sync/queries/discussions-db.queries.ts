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

