import gql from 'graphql-tag';

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

// {
//     "data": {
//       "onchain_links": [{
//              "id": 1,
//              "onchain_proposal_id": 1
//          }]
//     }
//   }

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

// {
//     "data": {
//       "onchain_links": [{
//              "id": 1,
//              "onchain_referendum_id": 1
//          }]
//     }
//   }
