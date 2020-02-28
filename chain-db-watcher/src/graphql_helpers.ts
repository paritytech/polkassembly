import chalk from 'chalk';
import dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import { getSdk as getOnchainSdk } from './generated/chain-db-graphql';
import { getSdk as getDiscussionSdk } from './generated/discussion-db-graphql';

dotenv.config();

const discussionGraphqlUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;
const democracyTopicId = process.env.DEMOCRACY_TOPIC_ID;
const proposalPostTypeId = process.env.HASURA_PROPOSAL_POST_TYPE_ID;
const proposalBotUserId = process.env.PROPOSAL_BOT_USER_ID;
const proposalBotUsername = process.env.PROPOSAL_BOT_USERNAME;
const proposalBotPassword = process.env.PROPOSAL_BOT_PASSWORD;
const chainDBGraphqlUrl = process.env.CHAIN_DB_GRAPHQL_URL;
const councilTopicId = process.env.COUNCIL_TOPIC_ID;

const DEFAULT_TITLE = 'On chain democracy proposal';
const DEFAULT_MOTION_TITLE = 'On chain council motion';
const DEFAULT_DESCRIPTION = 'This content (and title) can be edited by the proposal author to explain the rationale behind the proposal.';

/**
 * Fetches the JWT from auth server for a "proposal_bot"
 * This is very simple, there's no caching and it fetches the token every single time.
 * it's ok for proposals since there are rarely more than 1 proposal per 15min.
 */

export const getToken = async (): Promise<string | void> => {
	if (!discussionGraphqlUrl) {
		throw new Error('Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set.');
	}

	if (!proposalBotPassword || !proposalBotUsername) {
		throw new Error(
			"PROPOSAL_BOT_USERNAME or PROPOSAL_BOT_PASSWORD environment variables haven't been set for the proposal bot to login."
		);
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, { headers: {} });
		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.loginMutation({ password: proposalBotPassword, username: proposalBotUsername });

		if (data.login?.token) {
			return data?.login?.token;
		} else {
			throw new Error(`Unexpected data at proposal bot login: ${data}`);
		}
	} catch (e) {
		console.error(chalk.red('getToken execution error', e));
		e.response?.errors &&
			console.error(chalk.red('GraphQL response errors\n'), e.response.errors);
		e.response?.data &&
			console.error(chalk.red('Response data if available\n'), e.response.data);
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

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.getDiscussionProposalById({ onchainProposalId });

		return !!data.onchain_links?.length;
	} catch (err) {
		console.error(chalk.red(`proposalDiscussionExists execution error with proposalId: ${onchainProposalId}`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors\n'), err.response.errors);
		err.response?.data &&
			console.error(chalk.red('Response data if available\n'), err.response.data);
	}
};

/**
 * Tells if there is already a treasurySpendProposal in the discussion DB matching the
 * onchain treasury proposal id passed as argument
 *
 * @param treasuryProposalId the proposal id that is on chain (not the Prisma db id)
 */
export const treasurySpendProposalDiscussionExists = async (
	onchainTreasuryProposalId: number
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

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.getDiscussionTreasurySpendProposalById({ onchainTreasuryProposalId });

		return !!data.onchain_links?.length;
	} catch (err) {
		console.error(chalk.red(`treasurySpendProposalDiscussionExists execution error with treasuryProposalId: ${onchainTreasuryProposalId}`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors\n'), err.response.errors);
		err.response?.data &&
			console.error(chalk.red('Response data if available\n'), err.response.data);
	}
};

/**
 * Tells if there is already a motion in the discussion DB matching the
 * onchain motion proposal id passed as argument
 *
 * @param onchainMotionProposalId the proposal id that is on chain (not the Prisma db id)
 */
export const motionDiscussionExists = async (
	onchainMotionProposalId: number
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

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.getDiscussionMotionProposalById({ onchainMotionProposalId });

		return !!data.onchain_links?.length;
	} catch (err) {
		console.error(chalk.red(`motionDiscussionExists execution error with motionProposalId: ${onchainMotionProposalId}`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors\n'), err.response.errors);
		err.response?.data &&
			console.error(chalk.red('Response data if available\n'), err.response.data);
	}
};

/**
 * Returns the discussion id linked to a referendum.
 *
 * @param onchainProposalId the referendum id that is on chain (not the Prisma db id)
 */
export const getProposalDiscussionAssociatedReferendumId = async (onchainProposalId: number): Promise<number | undefined> => {
	if (!discussionGraphqlUrl) {
		throw new Error('Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set.');
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {}
		});

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.getProposalWithNoAssociatedReferendumQuery({ onchainProposalId });

		return data?.onchain_links?.[0]?.id;
	} catch (err) {
		console.error(chalk.red(`getProposalDiscussionAssociatedReferendumId execution error - Referendum already linked to proposal ${onchainProposalId} in discussion DB.`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors\n'), err.response.errors);
		err.response?.data &&
			console.error(chalk.red('Response data if available\n'), err.response.data);
		return undefined;
	}
};

/**
 * Returns the discussion id linked to a referendum.
 *
 * @param onchainMotionId the referendum id that is on chain (not the Prisma db id)
 */
export const getMotionDiscussionAssociatedReferendumId = async (onchainMotionId: number): Promise<number | undefined> => {
	if (!discussionGraphqlUrl) {
		throw new Error('Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set.');
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {}
		});

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.getMotionWithNoAssociatedReferendumQuery({ onchainMotionId });

		return data?.onchain_links?.[0]?.id;
	} catch (err) {
		console.error(chalk.red(`getMotionlDiscussionAssociatedReferendumId execution error - Referendum already linked to proposal ${onchainMotionId} in discussion DB.`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors\n'), err.response.errors);
		err.response?.data &&
			console.error(chalk.red('Response data if available\n'), err.response.data);
		return undefined;
	}
};

/**
 * Creates a generic post and the linked proposal in hasura discussion DB
 *
 * @param proposer address of the proposer of the proposal
 * @param onchainProposalId the proposal id that is on chain (not the Prisma db id)
 */

export const addDiscussionPostAndProposal = async ({
	proposer,
	onchainProposalId
}: {
	proposer: string;
	onchainProposalId: number;
}): Promise<void> => {
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
	if (!proposalBotUserId) {
		throw new Error(
			'Please specify an environment variable for the PROPOSAL_BOT_USER_ID.'
		);
	}

	const proposalAndPostVariables = {
		authorId: Number(proposalBotUserId),
		onchainProposalId,
		content: DEFAULT_DESCRIPTION,
		proposerAddress: proposer,
		title: DEFAULT_TITLE,
		topicId: Number(democracyTopicId),
		typeId: Number(proposalPostTypeId)
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
		const addedId = data?.insert_onchain_links?.returning[0]?.id;

		if (addedId || addedId === 0) {
			console.log(`${chalk.green('✔︎')} Proposal ${addedId} added to the database.`);
		}
	} catch (err) {
		console.error(chalk.red(`addPostAndProposal execution error, proposal id ${onchainProposalId}\n`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors\n'), err.response.errors);
		err.response?.data &&
			console.error(chalk.red('Response data if available\n'), err.response.data);
	}
};

/**
 * Creates a generic post and the linked treasury spend proposal in hasura discussion DB
 *
 * @param proposer address of the proposer of the proposal
 * @param onchainTreasuryProposalId the proposal id that is on chain (not the Prisma db id)
 */

export const addDiscussionPostAndTreasurySpendProposal = async ({
	proposer,
	onchainTreasuryProposalId
}: {
	proposer: string;
	onchainTreasuryProposalId: number;
}): Promise<void> => {
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
	if (!proposalBotUserId) {
		throw new Error(
			'Please specify an environment variable for the PROPOSAL_BOT_USER_ID.'
		);
	}

	const proposalAndPostVariables = {
		authorId: Number(proposalBotUserId),
		onchainTreasuryProposalId,
		content: DEFAULT_DESCRIPTION,
		proposerAddress: proposer,
		title: DEFAULT_TITLE,
		topicId: Number(democracyTopicId),
		typeId: Number(proposalPostTypeId)
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
		const data = await discussionSdk.addPostAndTreasurySpendProposalMutation(proposalAndPostVariables);
		const addedId = data?.insert_onchain_links?.returning[0]?.id;

		if (addedId || addedId === 0) {
			console.log(`${chalk.green('✔︎')} Proposal ${addedId} added to the database.`);
		}
	} catch (err) {
		console.error(chalk.red(`addPostAndTreasurySpendProposal execution error, proposal id ${onchainTreasuryProposalId}\n`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors\n'), err.response.errors);
		err.response?.data &&
			console.error(chalk.red('Response data if available\n'), err.response.data);
	}
};

/**
 * Creates a generic post and the linked motion in hasura discussion DB
 *
 * @param proposer address of the proposer of the motion
 * @param onchainMotionId the motion id that is on chain (not the Prisma db id)
 */

export const addDiscussionPostAndMotion = async ({
	proposer,
	onchainMotionProposalId
}: {
	proposer: string;
	onchainMotionProposalId: number;
}): Promise<void> => {
	if (!councilTopicId) {
		throw new Error(
			'Please specify an environment variable for the COUNCIL_TOPIC_ID.'
		);
	}
	if (!proposalPostTypeId) {
		throw new Error(
			'Please specify an environment variable for the HASURA_PROPOSAL_POST_TYPE_ID.'
		);
	}
	if (!proposalBotUserId) {
		throw new Error(
			'Please specify an environment variable for the BOT_PROPOSAL_USER_ID.'
		);
	}

	const motionAndPostVariables = {
		authorId: Number(proposalBotUserId),
		onchainMotionProposalId,
		content: DEFAULT_DESCRIPTION,
		proposerAddress: proposer,
		title: DEFAULT_MOTION_TITLE,
		topicId: Number(councilTopicId),
		typeId: Number(proposalPostTypeId)
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
		const data = await discussionSdk.addPostAndMotionMutation(motionAndPostVariables);
		const addedId = data?.insert_onchain_links?.returning[0]?.id;

		if (addedId || addedId === 0) {
			console.log(`${chalk.green('✔︎')} Motion ${addedId} added to the database.`);
		}
	} catch (err) {
		console.error(chalk.red(`addPostAndMotion execution error, motion id ${onchainMotionProposalId}\n`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors\n'), err.response.errors);
		err.response?.data &&
			console.error(chalk.red('Response data if available\n'), err.response.data);
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

export const getOnchainAssociatedProposalId = async ({
	preimageHash,
	referendumCreationBlockHash
}: ReferendumInfo): Promise<number | undefined> => {
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
			console.log(chalk.yellow(`No democracy proposal Id tabled at block: ${referendumCreationBlockHash}. It must have been initiated by a council motion.`));
			return undefined;
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
		console.error(chalk.red(`getOnchainAssociatedProposalId execution error with preimage hash: ${preimageHash}`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors\n'), err.response.errors);
		err.response?.data &&
			console.error(chalk.red('Response data if available\n'), err.response.data);

		return undefined;
	}
};

/**
 * Returns the motion id from chain-db from which the renferendum id originates
 *
 * @param {string} preimageHash - The preimage hash for the proposal.
 */

export const getOnchainAssociatedMotionId = async (preimageHash: string): Promise<number | undefined> => {
	if (!chainDBGraphqlUrl) {
		throw new Error(
			'Please specify an environment variable for the CHAIN_DB_GRAPHQL_URL.'
		);
	}

	try {
		const client = new GraphQLClient(chainDBGraphqlUrl, {
			headers: {}
		});

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getExecutedMotionsWithPreimageHash({ preimageHash });

		if (!data?.motions?.length) {
			throw new Error(`No council motion was executed with preimage hash: ${preimageHash}.`);
		}

		return data.motions?.[0]?.motionProposalId;
	} catch (err) {
		console.error(chalk.red(`getOnchainAssociatedMotionId execution error with preimage hash: ${preimageHash}`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors\n'), err.response.errors);
		err.response?.data &&
			console.error(chalk.red('Response data if available\n'), err.response.data);
		return undefined;
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

export const addReferendumIdToProposal = async ({
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

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.addReferendumIdToProposalMutation({
			proposalId: onchainProposalId,
			referendumId: onchainReferendumId
		});

		return !!data?.update_onchain_links?.affected_rows;
	} catch (err) {
		console.error(chalk.red(`addReferendumId execution error with proposalId:${onchainProposalId}, referendumId:${onchainReferendumId}\n`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

/**
 * Updates the discussion db to add the referendum id information to an existing on_chain_motion
 *
 * @param onchainMotionId - The preimage hash of the referendum, if any.
 * @param onchainReferendumId - The block hash at which the referendum was created.
 */

interface MatchingMotionInfo {
	onchainMotionId: number;
	onchainReferendumId: number;
}

export const addReferendumIdToMotion = async ({
	onchainMotionId,
	onchainReferendumId
}: MatchingMotionInfo): Promise<boolean|void> => {
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

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.addReferendumIdToMotionMutation({
			motionId: onchainMotionId,
			referendumId: onchainReferendumId
		});

		return !!data?.update_onchain_links?.affected_rows;
	} catch (err) {
		console.error(chalk.red(`addReferendumIdToMotion execution error with motionId:${onchainMotionId}, referendumId:${onchainReferendumId}\n`), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

interface AddDiscussionReferendum {
	preimageHash: string;
	referendumCreationBlockHash: string;
	referendumId: number;
}

export const addDiscussionReferendum = async ({ preimageHash, referendumCreationBlockHash, referendumId }: AddDiscussionReferendum): Promise<void> => {
	try {
		const associatedProposalId = await getOnchainAssociatedProposalId({
			preimageHash,
			referendumCreationBlockHash
		});
		let associatedMotionId: number | undefined;

		if (associatedProposalId || associatedProposalId === 0) {
			// at this stage the referendum is linked onchain to a proposal
			// we must verify that this proposal/motion is present in the discussion db.
			const proposalAssociatedRefendumId = await getProposalDiscussionAssociatedReferendumId(associatedProposalId);

			const shouldUpdateProposal = !!proposalAssociatedRefendumId || proposalAssociatedRefendumId === 0;
			if (shouldUpdateProposal) {
				const affectedRows = await addReferendumIdToProposal({
					onchainProposalId: associatedProposalId,
					onchainReferendumId: Number(referendumId)
				});

				if (!affectedRows) {
					throw new Error(`addDiscussionReferendum execution error with discussion proposal id ${associatedProposalId} and referendum id:${referendumId}, affected row: ${affectedRows}`);
				}

				console.log(`${chalk.green('✔︎')} Referendum id ${referendumId} added to the onchain_links with proposal id ${associatedProposalId}.`);
			} else {
				console.error(chalk.red(
					`✖︎ Proposal id ${associatedProposalId.toString()} related to referendum id ${referendumId} does not exist in the discussion db, or onchain_referendum_id is not null.`
				));
			}
		} else {
			associatedMotionId = await getOnchainAssociatedMotionId(preimageHash);

			// edge case, motion id can be 0, which is falsy
			if (!associatedMotionId && associatedMotionId !== 0) {
				console.log(chalk.red(`No motion Id found on chain-db for referendum id: ${referendumId}.`));
				return;
			}

			const motionAssociatedRefendumId = await getMotionDiscussionAssociatedReferendumId(associatedMotionId);

			const shouldUpdateMotion = !!motionAssociatedRefendumId || motionAssociatedRefendumId === 0;
			if (shouldUpdateMotion) {
				const affectedRows = await addReferendumIdToMotion({
					onchainMotionId: associatedMotionId,
					onchainReferendumId: Number(referendumId)
				});

				if (!affectedRows) {
					throw new Error(`addReferendumId execution error with discussion motion id ${associatedMotionId} and referendum id:${referendumId}, affected row: ${affectedRows}`);
				}

				console.log(`${chalk.green('✔︎')} Referendum id ${referendumId} added to the onchain_links with motion id ${associatedMotionId}.`);
			} else {
				console.error(chalk.red(
					`✖︎ Motion id ${associatedMotionId.toString()} related to referendum id ${referendumId} does not exist in the discussion db, or onchain_referendum_id is not null.`
				));
			}
		}
	} catch (error) {
		console.error(error);
	}
};
