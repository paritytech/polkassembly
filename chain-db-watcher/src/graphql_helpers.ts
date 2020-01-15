import dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import { addPostAndProposalMutation, getProposalQuery, loginMutation } from './queries';

dotenv.config();

const graphqlServerUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;

/**
 * Tell if there is already a proposal in the DB matching the
 * onchain proposal id passed as argument
 *
 * @param onchain_proposal_id the prisma db id for the proposal
 */
export const proposalAlreadyExists = async (onchain_proposal_id: number): Promise<boolean> => {

	if (!graphqlServerUrl) throw new Error ('Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set');

	try {
		const client = new GraphQLClient(graphqlServerUrl, {
			headers: {}
		});

		return client.request(getProposalQuery, { onchain_proposal_id })
			.then(data => !!data?.onchain_proposals?.length)
			.catch(err => {
				err.response?.errors && console.log('GraphQL response errors',err.response.errors);
				err.response?.data && console.log('Response data if available',err.response.data);
				throw new Error(err);
			});

	} catch (e){
		console.error('Graphql execution error - Proposal already exists');
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
		'onchain_proposal_id': onchainId,
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
			.then(data => data?.['insert_proposals']?.['returning'][0]?.id)
			.catch(err => {
				err.response?.errors && console.log('GraphQL response errors',err.response.errors);
				err.response?.data && console.log('Response data if available',err.response.data);
				throw new Error(err);
			});

	} catch (e){
		console.log('addPostAndProposal - graphql execution error',e);
		throw new Error(e);
	}
};

// FIXME This is probably too simple and fetches the token every single time.
// it's ok for proposals since there are rarely more than 1 proposal per 15min.
export const getToken = async (): Promise<string> => {

	const credentials = {
		username: process.env.USERNAME,
		password: process.env.PASSWORD
	};

	const authServerUrl = process.env.AUTH_SERVER_URL;

	if (!authServerUrl) {
		throw new Error('Auth server url not set in .env file.');
	}

	if (!credentials.username || !credentials.password) {
		throw new Error ('USERNAME or PASSWORD environment variables haven\'t been set for the proposal bot to login.');
	}

	try {
		const client = new GraphQLClient(authServerUrl, { headers: {} });

		return client.request(loginMutation, credentials)
			.then((data) => {
				if (data.login?.token) {
					return data?.login?.token;
				} else {
					throw new Error(`Unexpected data: ${data}`);
				}
			})
			.catch(err => {
				err.response?.errors && console.log('GraphQL response errors',err.response.errors);
				err.response?.data && console.log('Response data if available',err.response.data);
				throw new Error(err);
			});

	} catch (e){
		console.error('Graphql execution error - Proposal already exists',e);
		throw new Error(e);
	}
};