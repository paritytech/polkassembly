// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const commentReactionFields = gql`
    fragment commentReactionFields on comment_reactions {
        id
        reacting_user {
            id
            name
            username
        }
        reaction {
            id
            reaction
        }
        created_at
        updated_at
    }
`;
