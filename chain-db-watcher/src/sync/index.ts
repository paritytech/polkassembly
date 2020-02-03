import chalk from 'chalk';
import dotenv from 'dotenv';
import { GraphQLClient } from 'graphql-request';

import {
	getDiscussionProposalNumberQuery,
	getDiscussionReferendumNumberQuery,
	getOnchainProposalNumberQuery,
	getOnchainReferendumNumberQuery
} from './queries';

dotenv.config();

const discussionGraphqlUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;
const chainGraphqlServerUrl = process.env.CHAIN_DB_GRAPHQL_URL;

export const getOnchainLinkAggregatedNumbers = async (query: string): Promise<number | void> => {
	if (!discussionGraphqlUrl) {
		throw new Error(
			'Environment variable for the REACT_APP_HASURA_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(discussionGraphqlUrl, {
			headers: {}
		});

		const data = await client.request(query);

		return data?.onchain_links_aggregate?.aggregate?.count;
	} catch (err) {
		console.error(chalk.red('getDiscussionProposalNumber execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

export const getChainDBAggregatedNumbers = async (query: string, field: string): Promise<number | void> => {
	if (!chainGraphqlServerUrl) {
		throw new Error(
			'Environment variable for the CHAIN_DB_GRAPHQL_URL not set'
		);
	}

	try {
		const client = new GraphQLClient(chainGraphqlServerUrl, {
			headers: {}
		});

		const data = await client.request(query);

		return data?.[field]?.length;
	} catch (err) {
		console.error(chalk.red('getChainDBAggregatedNumbers execution'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};

export const isSynced = async (): Promise<void> => {
	// let onchainReferendumNumber: number;
	// let onchainProposalNumber: number;

	try {
		const discussionProposalNumber = await getOnchainLinkAggregatedNumbers(getDiscussionProposalNumberQuery);
		const discussionReferendumNumber = await getOnchainLinkAggregatedNumbers(getDiscussionReferendumNumberQuery);
		const onchainProposalNumber = await getChainDBAggregatedNumbers(getOnchainProposalNumberQuery, 'proposals');
		const onchainReferendumlNumber = await getChainDBAggregatedNumbers(getOnchainReferendumNumberQuery, 'referendums');

		console.log('discussionProposalNumber', discussionProposalNumber);
		console.log('discussionReferendumNumber', discussionReferendumNumber);
		console.log('OnchainProposalNumber', onchainProposalNumber);
		console.log('OnchainReferendumNumber', onchainReferendumlNumber);
	} catch (err) {
		console.error(chalk.red('discussionProposalNumber execution error'), err);
		err.response?.errors &&
			console.error(chalk.red('GraphQL response errors', err.response.errors));
		err.response?.data &&
			console.error(chalk.red('Response data if available', err.response.data));
	}
};
