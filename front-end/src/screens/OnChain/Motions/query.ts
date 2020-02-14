import gql from 'graphql-tag';

// for motions postType shoud be 2, postTopic should be 2
export const QUERY_LATEST_MOTIONS = gql`
  query LatestMotionPosts($postType: Int!, $postTopic: Int!, $limit: Int! = 5 ) {
    posts(limit: $limit, where: {
        type: {
            id: {
                _eq: $postType
            }
        },
        topic: {
            id: {
                _eq: $postTopic
            }
        },
        onchain_link: {
            onchain_motion_id: {
                _is_null: false
            },
            onchain_referendum_id: {
                _is_null: true
            }
        }
    }, order_by: {
        onchain_link: {
            onchain_motion_id: desc
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
            onchain_motion_id
            onchain_motion(where: {}) {
                id
                motionStatus(last: 1) {
                    id
                    status
                }
            }
        }
    }
}`;