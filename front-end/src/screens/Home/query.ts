import gql from 'graphql-tag';

export const QUERY_LATEST_POSTS = gql`
    query LatestPosts {
        posts (order_by: {creation_date: desc}){
            id
            title
            author {
                username
            }
            creation_date
            modification_date
            replies_aggregate {
                aggregate {
                    count
                }
            }
        }
    }
`;