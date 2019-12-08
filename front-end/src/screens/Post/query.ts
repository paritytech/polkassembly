import gql from 'graphql-tag';

export const QUERY_POST_AND_REPLIES = gql`
    query PostAndReplies ($id:Int!) {
        posts(where: {id: {_eq: $id}}) {
            content
            creation_date
            title
            author {
                username
            }
            category {
                name
            }
            replies(order_by: {created_at: asc}) {
                author {
                    username
                }
                id
                content
                created_at
                updated_at
            }
        }
    }
`;