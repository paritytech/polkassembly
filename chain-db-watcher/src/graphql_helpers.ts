import { getToken } from './util';
import { GraphQLClient } from 'graphql-request';

const graphqlServerUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;

/**
 * Tell if there is already a proposal in the DB matching the
 * onchain proposal id passed as argument
 *
 * @param onchainId the onchain proposal id
 */
export const proposalAlreadyExist = async (onchainId: number) => {
	const token = await getToken();

	if (!graphqlServerUrl) throw new Error ('Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set');
	if (!token) throw new Error ('No authorization token found for the  chain-db-watcher');

	try {
		const client = new GraphQLClient(graphqlServerUrl, {
			headers: {
				'Authorization': 'Bearer ' + token
			}
		});

		const getProposal = `
            query Proposals($onchain_id: Int!) {
            proposals(where: {onchain_id: {_eq: $onchain_id}}) {
                id
            }
        }
       `;

		return client.request(getProposal, { onchain_id: onchainId })
			.then(data => data.proposals && !!data.proposals.length)
			.catch(err => {
				console.log('GraphQL response errors',err.response.errors);
				console.log('Response data if available',err.response.data);
				throw new Error(err);
			});

	} catch (e){
		console.log('propAlreadyExist - graphql execurion error',e);
		throw new Error(e);
	}
};

export const addPostAndProposal = async ({ proposer, onchainId }: {proposer: string, onchainId: number}) => {
	const token = await getToken();
	const defaultProposalContent = 'Post not yet edited by the proposal author';
	const defaultProposalTitle = `#${onchainId} on chain proposal`;
	const proposalPostTypeId = process.env.HASURA_PROPOSAL_POST_TYPE_ID;
	const botProposalUserId = process.env.BOT_PROPOSAL_USER_ID;
	const proposalTopicId = 1; // Democracy

	if (!graphqlServerUrl) throw new Error ('Please specify an environment variable for the REACT_APP_SERVER_URL.');
	if (!token) throw new Error ('No authorization token found for the chain-db-watcher.');

	try {
		const client = new GraphQLClient(graphqlServerUrl, {
			headers: {
				'Authorization': 'Bearer ' + token
			}
		});

		// mutation addPostAndProposalMutation ($chain_db_id:Int!, $author_id: Int!, $content: String!, $title: String!, $topic_id: Int!, $type_id: Int! ){
		// 	__typename
		// 	insert_onchain_proposals(objects: {chain_db_id: $chain_db_id, post: {data: {author_id: $author_id, content: $content, title: $title, topic_id: $topic_id, type_id: $type_id}}}) {
		// 	  returning {
		// 		id
		// 	  }
		// 	}
		//   }

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

		const addPostAndProposalMutation = `
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

		const proposalAndPostVariables = {
			'author_id': botProposalUserId,
			'chain_db_id': onchainId,
			'content': defaultProposalContent,
			'proposer_address': proposer,
			'title': defaultProposalTitle,
			'topic_id': proposalTopicId,
			'type_id': proposalPostTypeId
		};

		return client.request(addPostAndProposalMutation, proposalAndPostVariables)
			.then(data => {
				console.log('data',data);
				return data['insert_onchain_proposals']
				&& data['insert_onchain_proposals']['returning']
				&& data['insert_onchain_proposals']['returning'][0]
				&& data['insert_proposals']['returning'][0].id;})
			.catch(err => {
				console.log('GraphQL response errors',err.response.errors);
				console.log('Response data if available',err.response.data);
				throw new Error(err);
			});

	} catch (e){
		console.log('addPostAndProposal - graphql execution error',e);
		throw new Error(e);
	}
};
