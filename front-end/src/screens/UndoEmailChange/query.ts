import gql from 'graphql-tag';

export const MUTATION_VERIFY_EMAIL = gql`
    mutation undoEmailChange($token: String!){
        undoEmailChange(token: $token){
            message,
            token
        }
    }
`;
