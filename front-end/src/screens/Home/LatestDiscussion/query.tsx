import gql from 'graphql-tag';

export const QUERY_LATEST_DISCUSSION = gql`
    query LatestDiscussionPost {
        posts(order_by: {created_at: desc}, limit: 1, where: {type: {id: {_eq: 1}}}) {
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