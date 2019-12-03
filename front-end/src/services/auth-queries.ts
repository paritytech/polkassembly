import gql from 'graphql-tag';

const user_fragment = gql`
    fragment userFragment on User {
        id
        name
        username
    }
`

export const SIGNUP = gql`
    mutation SIGNUP($email: String!, $password: String!, $username: String!, $name: String) {
        signup(email: $email, password: $password, username:$username, name:$name){
            user {
                ...userFragment
            }
            token
        }
    }
    ${user_fragment}
`;

export const LOGIN = gql`
    mutation LOGIN($password: String!, $username: String!) {
        login(password: $password, username:$username){
            user {
                ...userFragment
            }
            token
        }
    }
    ${user_fragment}
`;

// const categorie_fragment = gql`
//     fragment catfragment on categories {
//         id
//         name
//     }
// `

// export const GET_CATEGORIES = gql`
//     query Categories {
//         categories {
//         ...catfragment
//         }
//     }
//     ${categorie_fragment}
// `;

