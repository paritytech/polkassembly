import gql from 'graphql-tag';

export const EDIT_COMMENT= gql`
    mutation EditComment ($id: uuid!, $content: String!) {
        update_comments(where: {id: {_eq: $id}}, _set: {content: $content}) {
            affected_rows
        }
  }
`;