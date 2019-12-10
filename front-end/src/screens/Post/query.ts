import gql from 'graphql-tag';

const post = gql`
    fragment post on posts {
        author {
            username
        }
        content
        creation_date
        id
        modification_date
        replies(order_by: {created_at: asc}) {
            author {
                username
            }
            id
            content
            created_at
            updated_at
        }
        title
        topic {
            name
        }
        type {
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