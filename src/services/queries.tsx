import gql from 'graphql-tag'
import * as fragments from '../fragments'

export const QUERY_ME = gql`
    query Me ($id:Int!){
        users(where: {id: {_eq: $id}}){
            ...user
        }
    }
    ${fragments.user}
`;
