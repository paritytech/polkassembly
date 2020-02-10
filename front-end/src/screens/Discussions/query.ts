import gql from 'graphql-tag';

export const QUERY_LATEST_DISCUSSIONS = gql`
    query LatestDiscussionPosts($limit: Int! = 20) {
        posts(order_by: {created_at: desc}, limit: $limit, where: {type: {id: {_eq: 1}}}) {
            id
            title
            author {
                id
                name
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