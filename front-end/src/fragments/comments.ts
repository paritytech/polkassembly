import gql from 'graphql-tag';

const commentFields = gql`
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

export const commentRecursive = gql`
    fragment commentRecursive on comments {
        ...commentFields
        comments {
            ...commentFields
            comments {
                ...commentFields
            }
        }
    }
    ${commentFields}
`;