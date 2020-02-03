import gql from 'graphql-tag';

export const QUERY_LATEST_POSTS = gql`
    query LatestPosts {
        posts (limit: 20, order_by: {created_at: desc}){
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
            onchain_link {
                id
                onchain_proposal_id
                onchain_proposal(where: {}) {
                    id
                    proposalStatus {
                        id
                        status
                    }
                }
            }
        }
    }
`;