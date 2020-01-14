import gql from 'graphql-tag';

export const proposalsSubscription = gql`
    subscription proposalsSubscription{
        proposal {
            mutation
                node {
                    depositAmount
                    method
                    proposalId
                    proposer
                    proposalArguments {
                        name
                        value
                    }
                    section
                }
        }
    }
`;

// e.g returns
// {
// 	"data": {
// 	  "proposal": {
// 		"mutation": "CREATED",
// 		"node": {
// 		  "method": "remark",
// 		  "metaDescription": "[ Make some on-chain remark.]",
// 		  "proposalId": 0,
// 		  "section": "system",
// 		  "depositAmount": "123000000000000",
// 		  "proposalArguments": [
// 			{
// 			  "name": "_remark",
// 			  "value": "0x00"
// 			}
// 		  ],
// 		  "proposer": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
// 		}
// 	  }
// 	}
//   }

export const addPostAndProposalMutation = `
    mutation addPostAndProposalMutation (
        $chain_db_id:Int!,
        $author_id: Int!,
        $proposer_address: String!,
        $content: String!,
        $title: String!,
        $topic_id: Int!,
        $type_id: Int!
        ){
        __typename
        insert_onchain_proposals(objects: {
            chain_db_id: $chain_db_id,
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
// 	"data": {
// 	  "insert_onchain_proposals": {
// 		"returning": [
// 		  {
// 			"id": 1
// 		  }
// 		]
// 	  },
// 	  "__typename": "mutation_root"
// 	}
//   }

export const getProposal = `
    query getProposals($onchain_id: Int!) {
        onchain_proposals(where: {onchain_id: {_eq: $onchain_id}}) {
            id
        }
    }
`;