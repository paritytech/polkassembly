import chalk from 'chalk';
import dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import {
	getSdk as getOnchainSdk,
	OnchainProposalFragment,
	OnchainReferendumFragment
} from '../generated/chain-db-graphql';
import {
	DiscussionProposalFragment,
	DiscussionReferendumFragment,
	getSdk as getDiscussionSdk
} from '../generated/discussion-db-graphql';

dotenv.config();

const discussionGraphqlUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;
const onchainGraphqlServerUrl = process.env.CHAIN_DB_GRAPHQL_URL;

const getDiscussionProposals = async (): Promise<Array<DiscussionProposalFragment> | null | undefined> => {
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
		const data = await discussionSdk.getDiscussionProposals();

		return data?.onchain_links;
	} catch (err) {
		console.error(chalk.red('getDiscussionsProposals execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

const getDiscussionReferenda = async (): Promise<Array<DiscussionReferendumFragment> | null | undefined> => {
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
		const data = await discussionSdk.getDiscussionReferenda();

		return data?.onchain_links;
	} catch (err) {
		console.error(chalk.red('getDiscussionsProposals execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

const getOnChainProposals = async (): Promise<Array<OnchainProposalFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, {
			headers: {}
		});

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getOnchainProposals();

		return data?.proposals;
	} catch (err) {
		console.error(chalk.red('getOnChainProposals execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

const getOnchainReferenda = async (): Promise<Array<OnchainReferendumFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, {
			headers: {}
		});

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getOnchainReferenda();

		return data?.referendums;
	} catch (err) {
		console.error(chalk.red('getOnChainProposals execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

const isSynced = async (): Promise<void> => {
	try {
		const discussionProposals = await getDiscussionProposals();
		const discussionReferenda = await getDiscussionReferenda();
		const onChainProposals = await getOnChainProposals();
		const onchainReferenda = await getOnchainReferenda();
		console.log('discussionProposals', discussionProposals);
		console.log('onChainProposals', onChainProposals);
		console.log('discussionReferenda', discussionReferenda);
		console.log('onChainReferenda', onchainReferenda);

		// const discussionProposalNumber = await getDiscussionsProposalAggregatedNumbers();
		// const discussionReferendumNumber = await getDiscussionsProposalAggregatedNumbers();
		// const onchainProposalNumber = await getChainDBAggregatedNumbers();
		// const onchainReferendumlNumber = await getChainDBAggregatedNumbers();

		// console.log('discussionProposalNumber', discussionProposalNumber);
		// console.log('discussionReferendumNumber', discussionReferendumNumber);
		// console.log('OnchainProposalNumber', onchainProposalNumber);
		// console.log('OnchainReferendumNumber', onchainReferendumlNumber);

		// return {
		// 	proposals: discussionProposalNumber === onchainProposalNumber,
		// 	referenda: discussionReferendumNumber === onchainProposalNumber
		// };
	} catch (err) {
		console.error(chalk.red('discussionProposalNumber execution error'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

const syncProposals = async () => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, {
			headers: {}
		});

		const sdk = getOnchainSdk(client);
		const { referendums: onchainReferenda } = await sdk.getOnchainReferenda(); // This is fully typed, based on the query
		console.log('onchainReferenda', JSON.stringify(onchainReferenda));
	} catch (err) {
		console.error(chalk.red('syncProposals execution'), err);
			err.response?.errors &&
				console.error(chalk.red('GraphQL response errors', err.response.errors));
			err.response?.data &&
				console.error(chalk.red('Response data if available', err.response.data));
	}

	if (!discussionGraphqlUrl) {
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {}
		});

		const sdk = getDiscussionSdk(client);
		const { onchain_links: discussionReferenda } = await sdk.getDiscussionProposals(); // This is fully typed, based on the query
		console.log('discussionReferenda', JSON.stringify(discussionReferenda));
	} catch (err) {
		console.error(chalk.red('getDiscussionProposalNumber execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}

	// // create a map out of discussion data
	// const discussionProposalsMap = discussionDBData?.data?.onchain_links?.reduce(

	// )

	// chainDBData.referendums.array.forEach(chainDBreferendum => {

	// 	if (chainDBreferendum.referendumId)
	// });
};

export const syncDBs = () => {
	isSynced();
	// .then((syncStatus: SyncStatusType | undefined) => {
	// 	if (!syncStatus?.proposals) {
	// 		syncProposals();
	// 	}
	// });
};
