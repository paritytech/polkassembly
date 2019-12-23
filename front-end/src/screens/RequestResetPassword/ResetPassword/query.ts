import gql from 'graphql-tag';

export const MUTATION_RESET_PASSWORD = gql`
    mutation resetPassword($newPassword: String!, $token: String!){
        resetPassword(newPassword:$newPassword,token: $token){
            message
        }
    }
`;