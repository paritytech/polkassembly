import gql from 'graphql-tag';

export const QUERY_LATEST_DISCUSSIONS = gql`
    query LatestDiscussionPosts {
        posts(order_by: {creation_date: desc}, limit: 20, where: {type: {id: {_eq: 1}}}) {
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
            type {
                name
                id
            }
        }
    }
`;