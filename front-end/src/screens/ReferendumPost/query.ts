import gql from 'graphql-tag';
import { commentFields } from '../../fragments/comments';

const onchainLinkReferendum = gql`
    fragment onchainLinkReferendum on onchain_links {
        id,
        proposer_address,
        onchain_referendum_id,
        onchain_referendum(where: {}) {
            id
            delay
            end
            voteThreshold
            referendumStatus(last: 1) {
                status
                id
            }
            preimage {
                depositAmount
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

const referendumPost = gql`
    fragment referendumPost on posts {
        author {
            id
            name
            username
        }
        content
        created_at
        id
        updated_at
        comments(where: {parent_comment_id: {_is_null: true}}, order_by: {created_at: asc}) {
            ...commentFields
        }
        onchain_link{
            ...onchainLinkReferendum
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
    ${onchainLinkReferendum}
`;

export const QUERY_REFERENDUM_POST_AND_COMMENTS = gql`
    query ReferendumPostAndComments ($id:Int!) {
        posts(where: {onchain_link: {onchain_referendum_id: {_eq: $id}}}) {
            ...referendumPost
        }
    }
    ${referendumPost}
`;

