// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const SIGNUP = gql`
    mutation SIGNUP($email: String, $password: String!, $username: String!) {
        signup(email: $email, password: $password, username:$username){
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
    mutation AddressSignupConfirm($network: String!, $address: String!, $signature: String!) {
        addressSignupConfirm(network: $network, address: $address, signature: $signature) {
            token
        }
    }
`;
