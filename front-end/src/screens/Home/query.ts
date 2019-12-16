import gql from 'graphql-tag';

export const QUERY_LATEST_POSTS = gql`
    query LatestPosts {
        posts (order_by: {created_at: desc}){
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
        }
    }
`;