// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import chalk from 'chalk';

export default function verifyEnvVariables (): void {
	// Don't log the following on purpose
	// JWT_PRIVATE_KEY_TEST
	// TEST_DATABASE_URL
	// JWT_KEY_PASSPHRASE_TEST
	// JWT_PUBLIC_KEY_TEST

	const publics = [
		'NODE_ENV',
		'PORT',
		'PROPOSAL_BOT_USER_ID',
		'DOMAIN_PROTOCOL',
		'DOMAIN_NAME'
	];
	const secrets = [
		'JWT_PUBLIC_KEY', // setting it as a secret because it's spamming otherwise
		'JWT_PRIVATE_KEY',
		'JWT_KEY_PASSPHRASE',
		'REDIS_URL',
		'DATABASE_URL',
		'HASURA_EVENT_SECRET',
		'SENDGRID_API_KEY'
	];

	publics.forEach(env => {
		const value = process.env[env];
		if (!value) {
			console.error(chalk.red(`✖︎ Environment variable ${env} not set.`));
		} else {
			console.log(chalk.green('✓'), `${env} set to ${value}`);
		}
	});

	secrets.forEach(secret => {
		if (!process.env[secret]) {
			console.error(chalk.red(`✖︎ Environment (secret) variable ${secret} not set.`));
		}
	});

	console.log('------------------------------------------');
}
