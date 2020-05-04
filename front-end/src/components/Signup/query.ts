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
                web3signup
            }
            token
        }
    }
`;

export const ADDRESS_SIGNUP_START = gql`
    mutation AddressSignupStart($address: String!) {
        addressSignupStart(address: $address){
            message
            signMessage
        }
    }
`;

export const ADDRESS_SIGNUP_CONFIRM = gql`
    mutation AddressSignupConfirm(
        $network: String!,
        $address: String!,
        $signature: String!,
        $email: String,
        $name: String,
        $username: String
    ) {
        addressSignupConfirm(
            network: $network
            address: $address,
            signature: $signature,
            email: $email,
            name: $name,
            username: $username
        ){
            user {
                id
                name
                username
                email
                email_verified
                web3signup
            }
            token
        }
    }
`;
