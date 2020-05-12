// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise, WsProvider } from '@polkadot/api';
import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config();

const app = express();

app.set('host', '0.0.0.0');
app.set('port', process.env.PORT || 8034);

export interface HealthCheckResult {
	authServerStatus: number;
	chainDbWatcherServerStatus: number;
	hasuraServerStatus: number;
	latestBlockNumber: number;
	onchainLinkReferendumDelays: boolean;
	postsWithAuthor: boolean;
	prismaVersion: string;
	reactServerStatus: number;
	referendumVoteThreshold: boolean;
}

async function getLatestBlockNumber (): Promise<number> {
	const provider = new WsProvider(process.env.ARCHIVE_NODE_ENDPOINT);
	const api = await ApiPromise.create({ provider });

	const latestBlockNumber = (
		await api.derive.chain.bestNumber()
	).toNumber();

	return latestBlockNumber;
}

async function getPostsWithAuthor (): Promise<boolean> {
	return fetch(`${process.env.HASURA_SERVER}/v1/graphql`, {
		body: JSON.stringify({
			operationName: null,
			query: `query LatestDiscussionPosts($limit: Int!) {
				posts(order_by: {created_at: desc}, limit: $limit) {
				  id
				  author {
					id
					name
					username
				  }
				}
			}`,
			variables: { limit: 10 }
		}),
		headers: {
			'content-type': 'application/json'
		},
		method: 'POST'
	}).then(res => res.json()).then(({ data }) => {
		const result = data?.posts?.reduce((acc: boolean, post: any) => {
			return acc && post?.id !== undefined && !!post?.author?.id !== undefined;
		}, true);

		return result && data?.posts?.length > 0;
	});
}

async function getPrismaVersion (): Promise<string> {
	return fetch(`${process.env.CHAIN_DB}/management`, {
		body: JSON.stringify({
			operationName: null,
			query: `{
				serverInfo {
					version
				}
			}`,
			variables: {}
		}),
		headers: {
			'content-type': 'application/json'
		},
		method: 'POST'
	}).then(res => res.json()).then(({ data }) => data?.serverInfo?.version);
}

async function getReferendumDelays (): Promise<boolean> {
	const { data } = await fetch(`${process.env.CHAIN_DB_SERVER}`, {
		body: JSON.stringify({
			operationName: null,
			query: `{
				referendums(last:10){
				  delay
				}
			}`,
			variables: {}
		}),
		headers: {
			'content-type': 'application/json'
		},
		method: 'POST'
	}).then(res => res.json());
	const found = data?.referendums?.length > 0;

	if (!found) {
		throw new Error('Referendum Delays query not successful.');
	}

	return found;
}

async function getOnchainLinkReferendumVoteThreshold (): Promise<boolean> {
	const { data } = await fetch(`${process.env.HASURA_SERVER}/v1/graphql`, {
		body: JSON.stringify({
			operationName: null,
			query: `query HasuraPostsWithLinkedChainDBInfo($limit: Int!) {
				posts(limit: $limit, where: {onchain_link: {onchain_referendum_id: {_is_null: false}}}) {
				  	id
				  	onchain_link {
						id
						onchain_referendum {
					  		voteThreshold
						}
				  	}
				}
			}`,
			variables: { limit: 10 }
		}),
		headers: {
			'content-type': 'application/json'
		},
		method: 'POST'
	}).then(res => res.json());

	const result = data?.posts?.reduce((acc: boolean, post: any) => {
		return acc && !!post?.onchain_link?.onchain_referendum?.[0]?.voteThreshold;
	}, true);

	const found = result && data?.posts?.length > 0;

	if (!found) {
		throw new Error('OnchainLink Referendum voteThreshold query not successful.');
	}

	return found;
}

const checkEnvVars = (): void => {
	if (!process.env.AUTH_SERVER) {
		throw new Error('AUTH_SERVER variable not set');
	}
	if (!process.env.HASURA_SERVER) {
		throw new Error('HASURA_SERVER variable not set');
	}
	if (!process.env.CHAIN_DB_WATCHER_SERVER) {
		throw new Error('CHAIN_DB_WATCHER_SERVER variable not set');
	}
	if (!process.env.CHAIN_DB_SERVER) {
		throw new Error('CHAIN_DB_SERVER variable not set');
	}
	if (!process.env.CHAIN_DB) {
		throw new Error('CHAIN_DB variable not set');
	}
	if (!process.env.REACT_SERVER) {
		throw new Error('REACT_SERVER variable not set');
	}
	if (!process.env.ARCHIVE_NODE_ENDPOINT) {
		throw new Error('ARCHIVE_NODE_ENDPOINT variable not set');
	}
};

async function healthcheck (): Promise<HealthCheckResult> {
	const [
		authServer,
		hasuraServer,
		chainDbWatcherServer,
		reactServer,
		latestBlockNumber,
		prismaVersion,
		postsWithAuthor,
		referendumVoteThreshold,
		onchainLinkReferendumDelays
	] = await Promise.all([
		fetch(`${process.env.AUTH_SERVER}/healthcheck`),
		fetch(`${process.env.HASURA_SERVER}/healthz`),
		fetch(`${process.env.CHAIN_DB_WATCHER_SERVER}/healthcheck`),
		fetch(`${process.env.REACT_SERVER}/healthcheck`),
		getLatestBlockNumber(),
		getPrismaVersion(),
		getPostsWithAuthor(),
		getReferendumDelays(),
		getOnchainLinkReferendumVoteThreshold()
	]);

	return {
		authServerStatus: authServer.status,
		chainDbWatcherServerStatus: chainDbWatcherServer.status,
		hasuraServerStatus: hasuraServer.status,
		latestBlockNumber,
		onchainLinkReferendumDelays,
		postsWithAuthor,
		prismaVersion: prismaVersion,
		reactServerStatus: reactServer.status,
		referendumVoteThreshold
	};
}

app.use('/healthcheck', (req, res, next) => {
	healthcheck()
		.then((result) => res.json(result))
		.catch(next);
});

checkEnvVars();

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
	console.log(`App is running at http://localhost:${app.get('port')}`);
	console.log(`
AUTH_SERVER: ${process.env.AUTH_SERVER}/healthcheck
HASURA_SERVER: ${process.env.HASURA_SERVER}/healthz
CHAIN_DB_WATCHER_SERVER: ${process.env.CHAIN_DB_WATCHER_SERVER}/healthcheck
CHAIN_DB_SERVER: ${process.env.CHAIN_DB_SERVER}
CHAIN_DB: ${process.env.CHAIN_DB}/management
REACT_SERVER: ${process.env.REACT_SERVER}/healthcheck
`);
	console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
