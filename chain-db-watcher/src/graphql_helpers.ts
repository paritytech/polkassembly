import chalk from 'chalk';
import dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import {
	addPostAndProposalMutation,
	addReferendumIdMutation,
	getProposalQuery,
	getReferendumQuery,
	getTabledProposalsAtBlockQuery,
	loginMutation
} from './queries';

dotenv.config();

const discussionGraphqlUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;
const democracyTopicId = process.env.DEMOCRACY_TOPIC_ID;
const proposalPostTypeId = process.env.HASURA_PROPOSAL_POST_TYPE_ID;
const botProposalUserId = process.env.BOT_PROPOSAL_USER_ID;
const authServerUrl = process.env.AUTH_SERVER_URL;
const chainGraphqlServerUrl = process.env.CHAIN_DB_GRAPHQL_URL;

export const getToken = async (): Promise<string> => {
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

		return client
			.request(loginMutation, credentials)
			.then(data => {
				if (data.login?.token) {
					return data?.login?.token;
				} else {
					throw new Error(`Unexpected data: ${data}`);
				}
			})
			.catch(err => {
				err.response?.errors &&
					console.error(
						chalk.red(
							'GraphQL response errors',
							err.response.errors
						)
					);
				err.response?.data &&
					console.error(
						chalk.red(
							'Response data if available',
							err.response.data
						)
					);
				throw new Error(err);
			});
	} catch (e) {
		console.error(
			chalk.red('Graphql execution error - Proposal already exists')
		);
		throw new Error(e);
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
): Promise<boolean> => {
	if (!discussionGraphqlUrl)
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {}
		});

		return client
			.request(getProposalQuery, { onchainProposalId })
			.then(data => !!data?.onchain_links?.length)
			.catch(err => {
				err.response?.errors &&
					console.error(
						chalk.red(
							'GraphQL response errors',
							err.response.errors
						)
					);
				err.response?.data &&
					console.error(
						chalk.red(
							'Response data if available',
							err.response.data
						)
					);
				throw new Error(err);
			});
	} catch (e) {
		console.error(
			chalk.red(
				'Graphql execution error - Proposal already linked in discussion DB'
			)
		);
		throw new Error(e);
	}
};

/**
 * Tells if there is in the discussion DB a proposal to link a referendum to. It will return true
 * if there is no onchain_referendum id associated to the proposal, false otherwise.
 *
 * @param onchainProposalId the referendum id that is on chain (not the Prisma db id)
 */
export const canUpdateDiscussionDB = async ({
	onchainReferendumId,
	onchainProposalId
}: {
	onchainReferendumId: number;
	onchainProposalId: number;
}): Promise<boolean> => {
	if (!discussionGraphqlUrl)
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {}
		});

		return client
			.request(getReferendumQuery, {
				onchainReferendumId,
				onchainProposalId
			})
			.then(data => {
				if (data?.onchain_links?.length) {
					if (
						data.onchain_links[0].onchainProposalId ===
							onchainProposalId &&
						data.onchain_links[0].onchain_referendum_id === null
					) {
						return true;
					} else {
						return false;
					}
				}
				// there is no discussion db row with either the proposal id, not the referendum id
				return false;
			})
			.catch(err => {
				err.response?.errors &&
					console.error(
						chalk.red(
							'GraphQL response errors',
							err.response.errors
						)
					);
				err.response?.data &&
					console.error(
						chalk.red(
							'Response data if available',
							err.response.data
						)
					);
				throw new Error(err);
			});
	} catch (e) {
		console.error(
			chalk.red(
				'Graphql execution error - Referendum already linked in discussion DB'
			)
		);
		throw new Error(e);
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
}): Promise<void> => {
	if (!democracyTopicId)
		throw new Error(
			'Please specify an environment variable for the DEMOCRACY_TOPIC_ID.'
		);
	if (!proposalPostTypeId)
		throw new Error(
			'Please specify an environment variable for the HASURA_PROPOSAL_POST_TYPE_ID.'
		);
	if (!proposalPostTypeId)
		throw new Error(
			'Please specify an environment variable for the BOT_PROPOSAL_USER_ID.'
		);

	const proposalAndPostVariables = {
		author_id: botProposalUserId,
		onchainProposalId,
		content: 'Post not yet edited by the proposal author',
		proposer_address: proposer,
		title: `#${onchainProposalId} - On chain proposal`,
		topic_id: democracyTopicId,
		type_id: proposalPostTypeId
	};

	try {
		const token = await getToken();

		if (!token)
			throw new Error(
				'No authorization token found for the chain-db-watcher.'
			);
		if (!discussionGraphqlUrl)
			throw new Error(
				'Please specify an environment variable for the REACT_APP_SERVER_URL.'
			);

		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return client
			.request(addPostAndProposalMutation, proposalAndPostVariables)
			.then(data => data?.['insert_proposals']?.['returning'][0]?.id)
			.catch(err => {
				err.response?.errors &&
					console.error(
						chalk.red(
							'GraphQL response errors',
							err.response.errors
						)
					);
				err.response?.data &&
					console.error(
						chalk.red(
							'Response data if available',
							err.response.data
						)
					);
				throw new Error(err);
			});
	} catch (e) {
		console.error(
			chalk.red('addPostAndProposal - graphql execution error', e)
		);
		throw new Error(e);
	}
};

/**
 * Fetches the JWT from auth server for a "proposal_bot"
 * This is very simple, there's no caching and it fetches the token every single time.
 * it's ok for proposals since there are rarely more than 1 proposal per 15min.
 */

interface ReferendumInfo {
	preimageHash: string | null;
	referendumCreationBlockHash: string;
}

/**
 * Returns the Proposal id from chain-db from which the renferendum id originates
 *
 * @param {Object} referendumInfo - The referendum we are searching a matching proposal for.
 * @param {string | null} referendumInfo.preimageHash - The preimage hash of the referendum, if any.
 * @param {string} referendumInfo.referendumCreationBlockHash - The block hash at which the referendum was created.
 */

export const getAssociatedProposalId = ({
	preimageHash,
	referendumCreationBlockHash
}: ReferendumInfo): Promise<number | null> => {
	if (!chainGraphqlServerUrl)
		throw new Error(
			'Please specify an environment variable for the CHAIN_DB_GRAPHQL_URL.'
		);

	try {
		const client = new GraphQLClient(chainGraphqlServerUrl, {
			headers: {}
		});

		const getTabledProposalsAtBlockVariables = {
			blockHash: referendumCreationBlockHash
		};

		// FIXME This only takes care of democracy proposals going from proposal -> referendum
		// it does not cater for council proposals that are externally tabled
		return client
			.request(
				getTabledProposalsAtBlockQuery,
				getTabledProposalsAtBlockVariables
			)
			.then(data => {
				if (!data?.proposals?.length) {
					console.error(
						chalk.red(
							`No democracy proposal was tabled at block: ${referendumCreationBlockHash}.`
						)
					);
					return null;
				}

				// if more than one proposal got tabled at this blockHash
				// we need to find out which one the current referendum
				// corresponds to.
				if (data.proposals.length > 1) {
					const candidates = data.proposals.filter(
						(proposal: any) =>
							preimageHash &&
							proposal.preimage.hash === preimageHash
					);
					if (candidates.length === 1) {
						// we got lucky, a matching preimage was found
						return candidates[0].proposalId;
					} else {
						throw new Error(`Several poposals were tabled at block: ${referendumCreationBlockHash}.\n
							The preimage didn't help identify a matching proposal. Preimage hash: ${preimageHash}.`);
					}
				} else {
					return data.proposals[0].proposalId;
				}
			})
			.catch(err => {
				err.response?.errors &&
					console.error(
						chalk.red(
							'GraphQL response errors',
							err.response.errors
						)
					);
				err.response?.data &&
					console.error(
						chalk.red(
							'Response data if available',
							err.response.data
						)
					);
				throw new Error(err);
			});
	} catch (e) {
		console.error(
			chalk.red('getAssociatedProposal - graphql execution error')
		);
		throw new Error(e);
	}
};

interface MatchingInfo {
	onchainProposalId: number;
	onchainReferendumId: number;
}

/**
 * Updates the discussion db to add the referendum id information to an existing on_chain_proposal
 *
 * @param onchainProposalId - The preimage hash of the referendum, if any.
 * @param onchainReferendumId - The block hash at which the referendum was created.
 */

export const addReferendumId = async ({
	onchainProposalId,
	onchainReferendumId
}: MatchingInfo): Promise<boolean> => {
	if (!discussionGraphqlUrl)
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);

	try {
		const token = await getToken();

		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return client
			.request(addReferendumIdMutation, {
				proposalId: onchainProposalId,
				referendumId: onchainReferendumId
			})
			.then(data => !!data?.update_onchain_links?.affected_rows?.length)
			.catch(err => {
				err.response?.errors &&
					console.error(
						chalk.red(
							'GraphQL response errors',
							err.response.errors
						)
					);
				err.response?.data &&
					console.error(
						chalk.red(
							'Response data if available',
							err.response.data
						)
					);
				throw new Error(err);
			});
	} catch (e) {
		console.error(chalk.red('Graphql execution error - addReferendumId'));
		throw new Error(e);
	}
};
