import gql from 'graphql-tag';

export const QUERY_LATEST_POSTS = gql`
    query LatestPosts {
        posts {
            content
            author {
                username
            }
            creation_date
            modification_date
        }
    }
`;