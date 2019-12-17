import gql from 'graphql-tag';

export const QUERY_LATEST_DISCUSSIONS = gql`
    query LatestDiscussionPosts {
        posts(order_by: {created_at: desc}, limit: 20, where: {type: {id: {_eq: 1}}}) {
            id
            title
            author {
                id
                username
            }
            created_at
            updated_at
            comments_aggregate {
                aggregate {
                    count
                }
            }
            type {
                name
                id
            }
        }
    }
`;