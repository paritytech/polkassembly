// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const EDIT_COMMENT= gql`
    mutation EditComment ($id: uuid!, $content: String!) {
        update_comments(where: {id: {_eq: $id}}, _set: {content: $content}) {
            affected_rows
        }
    }
`;

export const DELETE_COMMENT = gql`
    mutation DeleteComment ($id: uuid!) {
        delete_comments(where: {id: {_eq: $id}}) {
            affected_rows
        }
    }
`;
