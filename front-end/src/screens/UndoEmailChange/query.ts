import gql from 'graphql-tag';

export const MUTATION_UNDO_EMAIL_CHANGE = gql`
    mutation undoEmailChange($token: String!){
        undoEmailChange(token: $token){
            message,
            token,
            email
        }
    }
`;
