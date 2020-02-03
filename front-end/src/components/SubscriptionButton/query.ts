import gql from 'graphql-tag';

export const POST_SUBSCRIBE=gql`
    mutation PostSubscribe ($postId: Int!) {
        postSubscribe(post_id: $postId) {
            message
        }
    }
`;

export const POST_UNSUBSCRIBE=gql`
    mutation PostUnsubscribe ($postId: Int!) {
        postUnsubscribe(post_id: $postId) {
            message
        }
    }
`;

export const SUBSCRIPTION=gql`
    query Subscription ($postId: Int!) {
        subscription(post_id: $postId) {
            subscribed
        }
    }
`;