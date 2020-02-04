import gql from 'graphql-tag';

export const addPostAndProposalMutation = gql`
    mutation addPostAndProposalMutation (
        $onchainProposalId:Int!,
        $author_id: Int!,
        $proposer_address: String!,
        $content: String!,
        $title: String!,
        $topic_id: Int!,
        $type_id: Int!
        ){
        __typename
        insert_onchain_links(objects: {
            onchain_proposal_id: $onchainProposalId,
            proposer_address: $proposer_address,
            post: {data: {
                author_id: $author_id,
                content: $content,
                title: $title,
                topic_id: $topic_id,
                type_id: $type_id
            }
        }}) {
            returning {
                id
            }
        }
    }
`;

// returns
// {
//  "data": {
//    "insert_onchain_links": {
//      "returning": [
//        {
//          "id": 1
//        }
//      ]
//    },
//    "__typename": "mutation_root"
//  }
//   }

export const getProposalWithNoAssociatedReferendumQuery = gql`
    query getProposalWithNoAssociatedReferendumQuery($onchainProposalId: Int!) {
        onchain_links(where: {_or: {onchain_proposal_id: {_eq: $onchainProposalId}, onchain_referendum_id: {_is_null: true}}}) {
            id
            onchain_proposal_id
        }
    }
`;

// returns
// {
//     "data": {
//       "onchain_links": [
//         {
//           "id": 17,
//           "onchain_proposal_id": 1,
//           "onchain_referendum_id": 1
//         }
//       ]
//     }
//   }

export const addReferendumIdToProposalMutation = gql`
        mutation addReferendumIdToProposalMutation($proposalId: Int!, $referendumId: Int!) {
            update_onchain_links(
                where: {
                    onchain_proposal_id: {_eq: $proposalId}
                },
                _set: {
                    onchain_referendum_id: $referendumId
                }
            ) {
            affected_rows
        }
    }
`;
