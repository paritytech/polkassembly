import gql from 'graphql-tag';

export const MUTATION_RESET_PASSWORD_REQUEST = gql`
    mutation requestResetPassword($email: String!){
        requestResetPassword(email: $email){
            message
        }
    }
`;