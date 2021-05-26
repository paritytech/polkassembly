// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const authorFields = gql`
    fragment authorFields on User {
        id
        kusama_default_address
        polkadot_default_address
        username
    }
`;
