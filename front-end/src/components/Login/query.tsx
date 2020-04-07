// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

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

export const ADDRESS_LOGIN_START = gql`
    mutation AddressLoginStart($address: String!) {
        addressLoginStart(address: $address){
            message
            signMessage
        }
    }
`;

export const ADDRESS_LOGIN = gql`
    mutation AddressLogin($address: String!, $signature: String!) {
        addressLogin(address: $address, signature:$signature){
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