import gql from 'graphql-tag';

export const MUTATION_VERIFY_EMAIL = gql`
    mutation verifyEmail($token: String!){
        verifyEmail(token: $token){
            message,
            token
        }
    }
`;