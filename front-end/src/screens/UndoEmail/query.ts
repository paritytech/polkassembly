import gql from 'graphql-tag';

export const MUTATION_VERIFY_EMAIL = gql`
    mutation undoEmail($token: String!){
        undoEmail(token: $token){
            message,
            token
        }
    }
`;
