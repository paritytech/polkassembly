import gql from 'graphql-tag';

export const MUTATION_CHANGE_NAME = gql`
    mutation changeName($newName: String!){
        changeName(newName: $newName){
            message
            token
        }
    }
`;

export const MUTATION_CHANGE_USERNAME = gql`
    mutation changeUsername($username: String!){
        changeUsername(username: $username){
            message
            token
        }
    }
`;

export const MUTATION_CHANGE_EMAIL = gql`
    mutation changeEmail($email: String!){
        changeEmail(email: $email){
            message
            token
        }
    }
`;

export const MUTATION_CHANGE_PASSWORD = gql`
    mutation changePassword($oldPassword: String!, $newPassword: String!){
        changePassword(oldPassword: $oldPassword, newPassword: $newPassword){
            message
        }
    }
`;
