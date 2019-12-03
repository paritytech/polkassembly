import gql from 'graphql-tag';

export const SIGNUP = gql`
    mutation SIGNUP($email: String!, $password: String!, $username: String!, $name: String) {
        signup(email: $email, password: $password, username:$username, name:$name){
                user {
                id
            }
            token
        }
    }  
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

