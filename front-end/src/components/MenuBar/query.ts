import gql from 'graphql-tag';

export const LOGOUT = gql`
    mutation LOGOUT {
        logout {
            message
        }
    }
`;
