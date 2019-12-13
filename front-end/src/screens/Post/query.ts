import gql from 'graphql-tag';

const post = gql`
    fragment post on posts {
        author {
            id
            username
        }
        content
        created_at
        id
        updated_at
        replies(order_by: {created_at: asc}) {
            author {
                id
                username
            }
            id
            content
            created_at
            updated_at
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
`

export const QUERY_POST_AND_REPLIES = gql`
    query PostAndReplies ($id:Int!) {
        posts(where: {id: {_eq: $id}}) {
            ...post
        }
    }
    ${post}
`;