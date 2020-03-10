// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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
