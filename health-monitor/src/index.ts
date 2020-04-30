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
	postsWithAuthor: boolean;
	prismaVersion: string;
	reactServerStatus: number;
}

async function getLatestBlockNumber (): Promise<number> {
	const provider = new WsProvider(process.env.ARCHIVE_NODE_ENDPOINT);
	const api = await ApiPromise.create({ provider });

	const latestBlockNumber = (
		await api.derive.chain.bestNumberFinalized()
	).toNumber();

	return latestBlockNumber;
}

async function getPostsWithAuthor (): Promise<boolean> {
	return fetch(`${process.env.HASURA_SERVER}/v1/graphql`, {
		body: JSON.stringify({
			operationName: 'LatestDiscussionPosts',
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
		let result = true;

		data?.posts?.forEach((post: any) => {
			result = result && !!post?.id && !!post?.author?.id;
		});

		return result && data?.posts?.length > 0;
	});
}

async function getPrismaVersion (): Promise<string> {
	return fetch(`${process.env.CHAIN_DB_SERVER}/management`, {
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

async function healthcheck (): Promise<HealthCheckResult> {
	const [
		authServer,
		hasuraServer,
		chainDbWatcherServer,
		reactServer,
		latestBlockNumber,
		prismaVersion,
		postsWithAuthor
	] = await Promise.all([
		fetch(`${process.env.AUTH_SERVER}/healthcheck`),
		fetch(`${process.env.HASURA_SERVER}/healthz`),
		fetch(`${process.env.HASURA_SERVER}/healthz`),
		fetch(`${process.env.REACT_SERVER}/healthcheck`),
		getLatestBlockNumber(),
		getPrismaVersion(),
		getPostsWithAuthor()
	]);

	return {
		authServerStatus: authServer.status,
		chainDbWatcherServerStatus: chainDbWatcherServer.status,
		hasuraServerStatus: hasuraServer.status,
		latestBlockNumber,
		postsWithAuthor,
		prismaVersion: prismaVersion,
		reactServerStatus: reactServer.status
	};
}

app.use('/healthcheck', (req, res, next) => {
	healthcheck()
		.then((result) => res.json(result))
		.catch(next);
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
	console.log(`App is running at http://localhost:${app.get('port')}`);
	console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
