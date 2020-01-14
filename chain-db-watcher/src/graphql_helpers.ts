import { GraphQLClient } from 'graphql-request';

import { addPostAndProposalMutation, getProposal } from './queries';
import { getToken } from './util';

const graphqlServerUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;

/**
 * Tell if there is already a proposal in the DB matching the
 * onchain proposal id passed as argument
 *
 * @param onchainId the onchain proposal id
 */
export const proposalAlreadyExists = async (onchainId: number) => {
	const token = await getToken();

	if (!graphqlServerUrl) throw new Error ('Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set');
	if (!token) throw new Error ('No authorization token found for the  chain-db-watcher');

	try {
		const client = new GraphQLClient(graphqlServerUrl, {
			headers: {
				'Authorization': 'Bearer ' + token
			}
		});

		return client.request(getProposal, { onchain_id: onchainId })
			.then(data => data.proposals && !!data.proposals.length)
			.catch(err => {
				console.log('GraphQL response errors',err.response.errors);
				console.log('Response data if available',err.response.data);
				throw new Error(err);
			});

	} catch (e){
		console.error('Graphql execution error - Proposal already exists',e);
		throw new Error(e);
	}
};

/**
 * Creates a generic post and the linked proposal in hasura discussion DB
 *
 * @param proposer address of the proposer of the proposal, encoded with the network prefix
 * @param onchainId the onchain proposal id
 */

export const addPostAndProposal = async ({ proposer, onchainId }: {proposer: string, onchainId: number}) => {
	const token = await getToken();

	const proposalAndPostVariables = {
		'author_id': process.env.BOT_PROPOSAL_USER_ID,
		'chain_db_id': onchainId,
		'content': 'Post not yet edited by the proposal author',
		'proposer_address': proposer,
		'title': `#${onchainId} - On chain proposal`,
		'topic_id': 1, // Democracy
		'type_id': process.env.HASURA_PROPOSAL_POST_TYPE_ID
	};

	if (!graphqlServerUrl) throw new Error ('Please specify an environment variable for the REACT_APP_SERVER_URL.');
	if (!token) throw new Error ('No authorization token found for the chain-db-watcher.');

	try {
		const client = new GraphQLClient(graphqlServerUrl, {
			headers: {
				'Authorization': 'Bearer ' + token
			}
		});

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
