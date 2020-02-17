import gql from 'graphql-tag';
import { commentFields } from '../../fragments/comments';

const discussionPost = gql`
    fragment discussionPost on posts {
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
`;

export const QUERY_DISCUSSION_POST_AND_COMMENTS = gql`
    query DiscussionPostAndComments ($id:Int!) {
        posts(where: {id: {_eq: $id}}) {
            ...discussionPost
        }
    }
    ${discussionPost}
`;
