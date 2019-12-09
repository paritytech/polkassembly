import gql from 'graphql-tag';

const USER_FRAGMENT = gql`
  fragment user on User {
      id
      name
      username
  }
`

export const SIGNUP = gql`
    mutation SIGNUP($email: String!, $password: String!, $username: String!, $name: String) {
        signup(email: $email, password: $password, username:$username, name:$name){
            user {
                ...user
            }
            token
        }
    }
    ${USER_FRAGMENT}
`;

export const LOGIN = gql`
    mutation LOGIN($password: String!, $username: String!) {
        login(password: $password, username:$username){
            user {
                ...user
            }
            token
        }
    }
    ${USER_FRAGMENT}
`;

export const LOGOUT = gql`
    mutation LOGOUT {
        logout {
            message
        }
    }
`;

export const GET_REFRESH_TOKEN = gql`
    query GET_REFRESH_TOKEN {
        token {
            token
        }
    }
`

