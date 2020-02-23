import gql from 'graphql-tag';
import { commentFields } from '../../fragments/comments';

const onchainLinkMotion = gql`
    fragment onchainLinkMotion on onchain_links {
        id,
        proposer_address,
        onchain_referendum_id,
        onchain_motion_id,
        onchain_motion(where: {}) {
            id
            motionStatus(last: 1) {
                id
                status
            }
            memberCount
            method
            motionProposalHash
            motionProposalArguments{
                name
                value
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

const motionPost = gql`
    fragment motionPost on posts {
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
            ...onchainLinkMotion
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
    ${onchainLinkMotion}
`;

export const QUERY_MOTION_POST_AND_COMMENTS = gql`
    query MotionPostAndComments ($id:Int!) {
        posts(where: {onchain_link: {onchain_motion_id: {_eq: $id}}}) {
            ...motionPost
        }
    }
    ${motionPost}
`;

