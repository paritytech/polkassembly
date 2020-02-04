import chalk from 'chalk';
import dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import { getSdk as getOnchainSdk } from './generated/chain-db-graphql';
import { getSdk as getDiscussionSdk } from './generated/discussion-db-graphql';
import {
	addReferendumIdMutation,
	getProposalQuery,
	getProposalWithNullReferendumQuery,
	loginMutation
} from './queries';

dotenv.config();

const discussionGraphqlUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;
const democracyTopicId = process.env.DEMOCRACY_TOPIC_ID;
const proposalPostTypeId = process.env.HASURA_PROPOSAL_POST_TYPE_ID;
const botProposalUserId = process.env.BOT_PROPOSAL_USER_ID;
const authServerUrl = process.env.AUTH_SERVER_URL;
const chainDBGraphqlUrl = process.env.CHAIN_DB_GRAPHQL_URL;

/**
 * Fetches the JWT from auth server for a "proposal_bot"
 * This is very simple, there's no caching and it fetches the token every single time.
 * it's ok for proposals since there are rarely more than 1 proposal per 15min.
 */

export const getToken = async (): Promise<string | void> => {
	const credentials = {
		username: process.env.PROPOSAL_BOT_USERNAME,
		password: process.env.PROPOSAL_BOT_PASSWORD
	};

	if (!authServerUrl) {
		throw new Error('Auth server url not set in .env file.');
	}

	if (!credentials.username || !credentials.password) {
		throw new Error(
			"PROPOSAL_BOT_USERNAME or PROPOSAL_BOT_PASSWORD environment variables haven't been set for the proposal bot to login."
		);
	}

	try {
		const client = new GraphQLClient(authServerUrl, { headers: {} });
		const data = await client.request(loginMutation, credentials);

		if (data.login?.token) {
			return data?.login?.token;
		} else {
			throw new Error(`Unexpected data at proposal bot login: ${data}`);
		}
	} catch (e) {
		console.error(chalk.red('getToken execution error', e));
		e.response?.errors &&
			console.error(chalk.red('GraphQL response errors', e.response.errors));
		e.response?.data &&
			console.error(chalk.red('Response data if available', e.response.data));
	}
};

/**
 * Tells if there is already a proposal in the discussion DB matching the
 * onchain proposal id passed as argument
 *
 * @param onchainProposalId the proposal id that is on chain (not the Prisma db id)
 */
export const proposalDiscussionExists = async (
	onchainProposalId: number
): Promise<boolean | void> => {
	if (!discussionGraphqlUrl) {
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {}
		});

		const data = await client.request(getProposalQuery, { onchainProposalId });

		return !!data?.onchain_links?.length;
	} catch (err) {
		console.error(chalk.red(`proposalDiscussionExists execution error with proposalId: ${onchainProposalId}`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

/**
 * Tells if there is in the discussion DB a proposal to link a referendum to. It will return true
 * if there is no onchain_referendum id associated to the proposal, false otherwise.
 *
 * @param onchainProposalId the referendum id that is on chain (not the Prisma db id)
 */
export const canUpdateDiscussionDB = async (onchainProposalId: number): Promise<boolean | void> => {
	if (!discussionGraphqlUrl) {
		throw new Error('Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set.');
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {}
		});

		const data = await client.request(getProposalWithNullReferendumQuery, { onchainProposalId });

		return !!data?.onchain_links?.length;
	} catch (err) {
		console.error(chalk.red(`canUpdateDiscussionDB execution error - Referendum already linked to proposal ${onchainProposalId} in discussion DB.`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

/**
 * Creates a generic post and the linked proposal in hasura discussion DB
 *
 * @param proposer address of the proposer of the proposal, encoded with the network prefix
 * @param onchainProposalId the proposal id that is on chain (not the Prisma db id)
 */

export const addPostAndProposal = async ({
	proposer,
	onchainProposalId
}: {
	proposer: string;
	onchainProposalId: number;
}): Promise<number | null | undefined> => {
	if (!democracyTopicId) {
		throw new Error(
			'Please specify an environment variable for the DEMOCRACY_TOPIC_ID.'
		);
	}
	if (!proposalPostTypeId) {
		throw new Error(
			'Please specify an environment variable for the HASURA_PROPOSAL_POST_TYPE_ID.'
		);
	}
	if (!botProposalUserId) {
		throw new Error(
			'Please specify an environment variable for the BOT_PROPOSAL_USER_ID.'
		);
	}

	const proposalAndPostVariables = {
		author_id: Number(botProposalUserId),
		onchainProposalId,
		content: 'Post not yet edited by the proposal author',
		proposer_address: proposer,
		title: 'On chain democracy proposal',
		topic_id: Number(democracyTopicId),
		type_id: Number(proposalPostTypeId)
	};

	try {
		const token = await getToken();

		if (!token) {
			throw new Error(
				'No authorization token found for the chain-db-watcher.'
			);
		}
		if (!discussionGraphqlUrl) {
			throw new Error(
				'Please specify an environment variable for the REACT_APP_SERVER_URL.'
			);
		}

		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.addPostAndProposalMutation(proposalAndPostVariables);

		return data?.insert_onchain_links?.returning[0]?.id;
	} catch (err) {
		console.error(chalk.red(`addPostAndProposal execution error, proposal id ${onchainProposalId}`, err));
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

/**
 * Returns the Proposal id from chain-db from which the renferendum id originates
 *
 * @param {Object} referendumInfo - The referendum we are searching a matching proposal for.
 * @param {string | null} referendumInfo.preimageHash - The preimage hash of the referendum, if any.
 * @param {string} referendumInfo.referendumCreationBlockHash - The block hash at which the referendum was created.
 */

interface ReferendumInfo {
	preimageHash?: string | null;
	referendumCreationBlockHash: string;
}

export const getAssociatedProposalId = async ({
	preimageHash,
	referendumCreationBlockHash
}: ReferendumInfo): Promise<number | void> => {
	if (!chainDBGraphqlUrl) {
		throw new Error(
			'Please specify an environment variable for the CHAIN_DB_GRAPHQL_URL.'
		);
	}

	try {
		const client = new GraphQLClient(chainDBGraphqlUrl, {
			headers: {}
		});

		const getTabledProposalsAtBlockVariables = {
			blockHash: referendumCreationBlockHash
		};

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getTabledProposalAtBlock(getTabledProposalsAtBlockVariables);

		if (!data?.proposals?.length) {
			throw new Error(`No democracy proposal was tabled at block: ${referendumCreationBlockHash}.`);
		}

		// if more than one proposal got tabled at this blockHash
		// we need to find out which one the current referendum
		// corresponds to by matching preimage hash if possible.
		if (data.proposals.length > 1) {
			const candidates = data.proposals.filter(
				(proposal) =>
					preimageHash &&
			proposal?.preimage?.hash === preimageHash
			);
			if (candidates.length === 1) {
				// we got lucky, a matching preimage was found
				return candidates?.[0]?.proposalId;
			} else {
				throw new Error(`Several poposals were tabled at block: ${referendumCreationBlockHash}.\n
				The preimage didn't help identify a matching proposal. Preimage hash: ${preimageHash}.`);
			}
		} else {
			return data.proposals?.[0]?.proposalId;
		}
	} catch (err) {
		console.error(chalk.red(`getAssociatedProposal execution error with preimage hash: ${preimageHash}`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

/**
 * Updates the discussion db to add the referendum id information to an existing on_chain_proposal
 *
 * @param onchainProposalId - The preimage hash of the referendum, if any.
 * @param onchainReferendumId - The block hash at which the referendum was created.
 */

 interface MatchingInfo {
	onchainProposalId: number;
	onchainReferendumId: number;
}

export const addReferendumId = async ({
	onchainProposalId,
	onchainReferendumId
}: MatchingInfo): Promise<boolean|void> => {
	try {
		if (!discussionGraphqlUrl) {
			throw new Error(
				'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
			);
		}

		const token = await getToken();

		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		const data = await client.request(addReferendumIdMutation, {
			proposalId: onchainProposalId,
			referendumId: onchainReferendumId
		});

		return !!data?.update_onchain_links?.affected_rows?.length;
	} catch (err) {
		console.error(chalk.red(`addReferendumId execution error with proposalId:${onchainProposalId}, referendumId:${onchainReferendumId}`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};
