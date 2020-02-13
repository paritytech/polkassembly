import gql from 'graphql-tag';

// post_type.ON_CHAIN === 2
// post_topic.COUNCIL === 2

export const QUERY_LATEST_MOTIONSS = gql`
  query LatestMotionPosts($postType: Int! = 2, $postTopic: Int! = 2, $limit: Int! = 5 ) {
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