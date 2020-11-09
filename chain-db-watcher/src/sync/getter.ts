// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable camelcase */
import chalk from 'chalk';
import dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import {
	getSdk as getOnchainSdk,
	OnchainBountyFragment,
	OnchainMotionFragment,
	OnchainProposalFragment,
	OnchainReferendumFragment,
	OnchainTipFragment,
	OnchainTreasuryProposalFragment
} from '../generated/chain-db-graphql';
import {
	DiscussionBountyFragment,
	DiscussionMotionFragment,
	DiscussionProposalFragment,
	DiscussionReferendumFragment,
	DiscussionTipFragment,
	DiscussionTreasuryProposalFragment,
	getSdk as getDiscussionSdk
} from '../generated/discussion-db-graphql';

dotenv.config();

const discussionGraphqlUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;
const onchainGraphqlServerUrl = process.env.CHAIN_DB_GRAPHQL_URL;
const startBlock = Number(process.env.START_FROM) || 0;

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

export const getDiscussionTreasuryProposals = async (): Promise<Array<DiscussionTreasuryProposalFragment> | null | undefined> => {
	if (!discussionGraphqlUrl) {
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, { headers: {} });

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.getDiscussionTreasuryProposals();

		return data?.onchain_links;
	} catch (err) {
		console.error(chalk.red('getDiscussionTreasury execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

export const getDiscussionBounties = async (): Promise<Array<DiscussionBountyFragment> | null | undefined> => {
	if (!discussionGraphqlUrl) {
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, { headers: {} });

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.getDiscussionBounties();

		return data?.onchain_links;
	} catch (err) {
		console.error(chalk.red('getDiscussionBounties execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

export const getDiscussionTips = async (): Promise<Array<DiscussionTipFragment> | null | undefined> => {
	if (!discussionGraphqlUrl) {
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, { headers: {} });

		const discussionSdk = getDiscussionSdk(client);
		const data = await discussionSdk.getDiscussionTips();

		return data?.onchain_links;
	} catch (err) {
		console.error(chalk.red('getDiscussionTips execution'), err);
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
		const data = await onchainSdk.getOnchainMotions({ startBlock });

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
		const data = await onchainSdk.getOnchainProposals({ startBlock });

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
		const data = await onchainSdk.getOnchainReferenda({ startBlock });

		return data?.referendums;
	} catch (err) {
		console.error(chalk.red('getOnchainReferenda execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

export const getOnChainTreasuryProposals = async (): Promise<Array<OnchainTreasuryProposalFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getOnchainTreasuryProposals({ startBlock });

		return data?.treasurySpendProposals;
	} catch (err) {
		console.error(chalk.red('getOnChainTreasuryProposals execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

export const getOnChainBounties = async (): Promise<Array<OnchainBountyFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getOnchainBounties({ startBlock });

		return data?.bounties;
	} catch (err) {
		console.error(chalk.red('getOnChainBounties execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

export const getOnChainTips = async (): Promise<Array<OnchainTipFragment | null> | undefined> => {
	if (!onchainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(onchainGraphqlServerUrl, { headers: {} });

		const onchainSdk = getOnchainSdk(client);
		const data = await onchainSdk.getOnchainTips({ startBlock });

		return data?.tips;
	} catch (err) {
		console.error(chalk.red('getOnchainTips execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};
