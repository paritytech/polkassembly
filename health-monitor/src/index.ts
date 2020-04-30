// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
import { ApiPromise, WsProvider } from '@polkadot/api';

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
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			operationName: 'LatestDiscussionPosts',
			variables: { limit: 10 },
			query:`query LatestDiscussionPosts($limit: Int!) {
				posts(order_by: {created_at: desc}, limit: $limit) {
				  id
				  author {
					id
					name
					username
				  }
				}
			}`
		}),
		method: 'POST'
	}).then(res => res.json()).then(({ data }) => {
		let result = true;

		data?.posts?.forEach((post: any) => {
			result = result && !!post.id && !!post?.author?.id;
		});

		return result && data?.posts?.length > 0;
	});
}


async function getPrismaVersion () {
	return fetch(`${process.env.CHAIN_DB_SERVER}/management`, {
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			operationName: null,
			variables: {},
			query:`{
				serverInfo {
					version
				}
			}`
		}),
		method: 'POST'
	}).then(res => res.json());
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
		reactServerStatus: reactServer.status,
		latestBlockNumber,
		prismaVersion: prismaVersion.data.serverInfo.version,
		postsWithAuthor
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
