import gql from 'graphql-tag';
import { commentFields } from '../../fragments/comments';

const onchainLinkTreasuryProposal = gql`
    fragment onchainLinkTreasuryProposal on onchain_links {
        id,
        proposer_address,
        onchain_treasury_proposal_id,
        onchain_referendum_id,
        onchain_treasury_spend_proposal(where: {}) {
            id
            beneficiary
            value
            bond
            treasuryStatus(last: 1) {
                id
                status
            }
        }
    }
`;

const treasuryProposalPost = gql`
    fragment treasuryProposalPost on posts {
        author {
            id
            name
            username
        }
        content
        created_at
        id
        updated_at
        comments(order_by: {created_at: asc}) {
            ...commentFields
        }
        onchain_link{
            ...onchainLinkTreasuryProposal
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
    ${commentFields}
    ${onchainLinkTreasuryProposal}
`;

export const QUERY_TREASURY_PROPOSAL_POST_AND_COMMENTS = gql`
    query TreasuryProposalPostAndComments ($id:Int!) {
        posts(where: {onchain_link: {onchain_treasury_proposal_id: {_eq: $id}}}) {
            ...treasuryProposalPost
        }
    }
    ${treasuryProposalPost}
`;

