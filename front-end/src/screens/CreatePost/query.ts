import gql from 'graphql-tag';

export const CREATE_POST = gql`
    mutation createPost($userId: Int! $content: String! $topicId: Int! $title: String!) {
        __typename
        insert_posts(objects: {
            author_id: $userId,
            content: $content,
            title: $title,
            topic_id: $topicId
        }) {
            affected_rows
        }
    }
`;

const topic_fragment = gql`
    fragment topic on topics {
        id
        name
    }
`

export const GET_TOPICS = gql`
    query Topics {
        topics {
            ...topic
        }
    }
    ${topic_fragment}
`;

