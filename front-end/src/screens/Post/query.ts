import gql from 'graphql-tag';

const commentFields = gql`
    fragment commentFields on comments {
        author {
            id
            username
        }
        content
        created_at
        id
        updated_at
    }
`;

const commentRecursive = gql`
    fragment commentRecursive on comments {
        ...commentFields
        comments {
            ...commentFields
            comments {
                ...commentFields
            }
        }
    }
    ${commentFields}
`;

const post = gql`
    fragment post on posts {
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

export const QUERY_POST_AND_COMMENTS = gql`
    query PostAndComments ($id:Int!) {
        posts(where: {id: {_eq: $id}}) {
            ...post
        }
    }
    ${post}
`;

export const EDIT_POST= gql`
    mutation EditPost ($id: Int!, $content: String!, $title: String!) {
        update_posts(where: {id: {_eq: $id}}, _set: {content: $content, title: $title}) {
            affected_rows
        }
  }
`;

export const ADD_ROOT_COMMENT=gql`
    mutation AddRootComment ($authorId: Int!, $content: String!, $postId: Int!) {
        __typename
        insert_comments(objects: {author_id: $authorId, content:  $content, post_id: $postId}) {
            affected_rows
        }
    }
`;

export const POST_SUBSCRIBE=gql`
    mutation PostSubscribe ($postId: Int!) {
        postSubscribe(post_id: $postId) {
            message
        }
    }
`;

export const POST_UNSUBSCRIBE=gql`
    mutation PostUnsubscribe ($postId: Int!) {
        postUnsubscribe(post_id: $postId) {
            message
        }
    }
`;

export const SUBSCRIPTION=gql`
    query Subscription ($postId: Int!) {
        subscription(post_id: $postId) {
            subscribed
        }
    }
`;
