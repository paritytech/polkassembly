import gql from 'graphql-tag';

export const QUERY_LATEST_POSTS = gql`
    query LatestPosts {
        posts {
            id
            title
            author {
                username
            }
            creation_date
            modification_date
        }
    }
`;