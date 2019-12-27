import gql from 'graphql-tag';

export const MUTATION_CHANGE_NAME = gql`
    mutation changeName($newName: String!){
        changeName(newName: $newName){
            message
        }
    }
`;

export const MUTATION_CHANGE_USERNAME = gql`
    mutation changeUsername($username: String!){
        changeUsername(username: $username){
            message
        }
    }
`;

export const MUTATION_CHANGE_EMAIL = gql`
    mutation changeEmail($email: String!){
        changeEmail(email: $email){
            message
        }
    }
`;

export const MUTATION_CHANGE_PASSWORD = gql`
    mutation changePassword($oldPassword: String!, $newPassword: String!){
        changePassword(oldPassword: $oldPassword, newPassword: $newPassword){
            message
        }
    }
`

export const QUERY_PROFILE = gql`
    query Profile {
        profile {
            id
            username
            name
            email
            email_verified
        }
    }
`;