// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import dotenv from 'dotenv';
import { Config } from 'src/types';

dotenv.config();

// e.g. 'postgres://postgres:postgres@localhost:5431/governance-auth'
const devConnectionUrl = process.env.DATABASE_URL;
const testConnectionUrl = process.env.TEST_DATABASE_URL;

const config: Config = {
	development: {
		client: 'postgresql',
		connection: devConnectionUrl,
		migrations: {
			directory: `${__dirname}/migrations`
		}
	},
	test: {
		client: 'postgresql',
		connection: testConnectionUrl,
		migrations: {
			directory: `${__dirname}/migrations`
		}
	}
};

const env = process.env.NODE_ENV || 'development';
const connection = config[env];

if (!connection || !connection.connection) {
	throw new Error(`DB Connection not provided for env ${env}`);
}

export = connection;
