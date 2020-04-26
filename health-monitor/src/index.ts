// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config();

const app = express();

app.set('host', '0.0.0.0');
app.set('port', process.env.PORT || 8034);

export interface HealthCheckResult {
	authServerStatus: number;
	hasuraServerStatus: number;
	chainDbWatcherServerStatus: number;
	reactServerStatus: number;
}

async function healthcheck (): Promise<HealthCheckResult> {
	const authServer = await fetch(`${process.env.AUTH_SERVER}/healthcheck`);
	const hasuraServer = await fetch(`${process.env.HASURA_SERVER}/healthz`);
	const chainDbWatcherServer = await fetch(`${process.env.HASURA_SERVER}/healthz`);
	const reactServer = await fetch(`${process.env.REACT_SERVER}/healthcheck`);

	return {
		authServerStatus: authServer.status,
		chainDbWatcherServerStatus: chainDbWatcherServer.status,
		hasuraServerStatus: hasuraServer.status,
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
