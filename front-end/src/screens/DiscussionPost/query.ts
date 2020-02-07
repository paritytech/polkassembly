import gql from 'graphql-tag';
import { commentRecursive } from '../../fragments/comments';

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
        comments(where: {parent_comment_id: {_is_null: true}}, order_by: {created_at: asc}) {
            ...commentRecursive
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
    ${commentRecursive}
`;

export const QUERY_DISCUSSION_POST_AND_COMMENTS = gql`
    query DiscussionPostAndComments ($id:Int!) {
        posts(where: {id: {_eq: $id}}) {
            ...discussionPost
        }
    }
    ${discussionPost}
`;
