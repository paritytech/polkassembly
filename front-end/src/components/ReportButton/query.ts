// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const REPORT_CONTENT=gql`
    mutation ReportContent ($type: String!, $content_id: Int!, $reason: String!, $comments: String!) {
        reportContent(type: $type, content_id: $content_id, reason: $reason, comments: $comments) {
            message
        }
    }
`;
