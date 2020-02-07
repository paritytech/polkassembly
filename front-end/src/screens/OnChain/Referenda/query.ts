import gql from 'graphql-tag';
// import { post_type } from '../../../global/post_types';
// import { post_topic } from '../../../global/post_topics';

// const type = post_type.ON_CHAIN;
// const topic = post_topic.DEMOCRACY;

export const QUERY_LATEST_REFERENDA = gql`
  query LatestDemocracyReferendaPosts($postType: Int! = 2, $postTopic: Int! = 1, $limit: Int! = 5) {
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
                referendumStatus {
                    id
                    status
                }
            }
        }
    }
}`;