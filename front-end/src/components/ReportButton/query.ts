import gql from 'graphql-tag';

export const REPORT_CONTENT=gql`
    mutation ReportContent ($type: String!, $content_id: Int!, $reason: String!, $comments: String!) {
        reportContent(type: $type, content_id: $content_id, reason: $reason, comments: $comments) {
            message
        }
    }
`;
