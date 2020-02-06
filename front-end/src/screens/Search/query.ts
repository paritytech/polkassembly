import gql from 'graphql-tag';

export const QUERY_SEARCH_POSTS = gql`
    query SearchPosts ($term:String!)  {
        posts(
            order_by: {created_at: desc},
            limit: 20,
            where: {
                _or: [
                    {title: {_ilike: $term}},
                    {content: {_ilike: $term}}
                ]
            }
        ) {
            id
            title
            author {
                id
                name
                username
            }
            created_at
            updated_at
            type {
                name
                id
            }
        }
    }
`;
