import gql from 'graphql-tag';

export const LOGIN = gql`
    mutation LOGIN($password: String!, $username: String!) {
        login(password: $password, username:$username){
            user {
                id
                name
                username
                email
                email_verified
            }
            token
        }
    }
`;
