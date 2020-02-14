import chalk from 'chalk';
import dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import {
	getSdk as getOnchainSdk,
	OnchainMotionFragment,
	OnchainProposalFragment,
	OnchainReferendumFragment
} from '../generated/chain-db-graphql';
import {
	DiscussionMotionFragment,
	DiscussionProposalFragment,
	DiscussionReferendumFragment,
	getSdk as getDiscussionSdk
} from '../generated/discussion-db-graphql';

dotenv.config();

const discussionGraphqlUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;
const onchainGraphqlServerUrl = process.env.CHAIN_DB_GRAPHQL_URL;

export const getDiscussionMotions = async (): Promise<Array<DiscussionMotionFragment> | null | undefined> => {
	if (!discussionGraphqlUrl) {
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, { headers: {} });

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.getDiscussionMotions();

		return data?.onchain_links;
	} catch (err) {
		console.error(chalk.red('getDiscussionMotions execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

export const getDiscussionProposals = async (): Promise<Array<DiscussionProposalFragment> | null | undefined> => {
	if (!discussionGraphqlUrl) {
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, { headers: {} });

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.getDiscussionProposals();

		return data?.onchain_links;
	} catch (err) {
		console.error(chalk.red('getDiscussionProposals execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

export const getDiscussionReferenda = async (): Promise<Array<DiscussionReferendumFragment> | null | undefined> => {
	if (!discussionGraphqlUrl) {
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, { headers: {} });

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.getDiscussionReferenda();

		return data?.onchain_links;
	} catch (err) {
		console.error(chalk.red('getDiscussionReferenda execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

export const getOnChainMotions = async (): Promise<Array<OnchainMotionFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getOnchainMotions();

		return data?.motions;
	} catch (err) {
		console.error(chalk.red('getOnChainMotions execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

export const getOnChainProposals = async (): Promise<Array<OnchainProposalFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });

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

export const getOnchainReferenda = async (): Promise<Array<OnchainReferendumFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getOnchainReferenda();

		return data?.referendums;
	} catch (err) {
		console.error(chalk.red('getOnchainReferenda execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};
