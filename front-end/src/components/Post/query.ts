import gql from 'graphql-tag';

export const EDIT_POST= gql`
    mutation EditPost ($id: Int!, $content: String!, $title: String!) {
        update_posts(where: {id: {_eq: $id}}, _set: {content: $content, title: $title}) {
            affected_rows
        }
  }
`;

export const ADD_POST_COMMENT=gql`
    mutation AddPostComment ($authorId: Int!, $content: String!, $postId: Int!) {
        __typename
        insert_comments(objects: {author_id: $authorId, content:  $content, post_id: $postId}) {
            affected_rows
        }
    }
`;
