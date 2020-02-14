import gql from 'graphql-tag';

export const QUERY_LATEST_REFERENDA = gql`
  query LatestReferendaPosts($postType: Int!, $limit: Int! = 5) {
    posts(limit: $limit, where: {
        type: {
            id: {
                _eq: $postType
            }
        },
        onchain_link: {
            onchain_referendum_id: {
                _is_null: false
            }
        }
    }, order_by: {
        onchain_link: {
            onchain_referendum_id: desc
        }
    }) {
        id
        title
        author {
            id
            username
            name
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
        topic {
            id
            name
        }
        onchain_link {
            id
            onchain_referendum_id
            onchain_referendum(where: {}) {
                id
                referendumStatus(last: 1) {
                    id
                    status
                }
            }
        }
    }
}`;