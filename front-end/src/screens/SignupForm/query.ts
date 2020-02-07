import gql from 'graphql-tag';

export const SIGNUP = gql`
    mutation SIGNUP($email: String, $password: String!, $username: String!, $name: String) {
        signup(email: $email, password: $password, username:$username, name:$name){
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
