import gql from 'graphql-tag';

export const commentFields = gql`
    fragment commentFields on comments {
        author {
            id
            name
            username
        }
        content
        created_at
        id
        updated_at
    }
`;