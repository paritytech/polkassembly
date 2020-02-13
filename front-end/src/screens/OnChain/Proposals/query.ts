import gql from 'graphql-tag';

// post_type.ON_CHAIN === 2
// post_topic.DEMOCRACY === 1

export const QUERY_LATEST_PROPOSALS = gql`
  query LatestDemocracyProposalPosts($postType: Int! = 2, $postTopic: Int! = 1, $limit: Int! = 5 ) {
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
            onchain_proposal_id: {
                _is_null: false
            },
            onchain_referendum_id: {
                _is_null: true
            }
        }
    }, order_by: {
        onchain_link: {
            onchain_proposal_id: desc
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
            onchain_proposal_id
            onchain_proposal(where: {}) {
                id
                proposalStatus(last: 1) {
                    id
                    status
                }
            }
        }
    }
}`;