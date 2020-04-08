// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const dotenv = require('dotenv');

dotenv.config();

// e.g. 'postgres://postgres:postgres@localhost:5431/governance-auth'
const devConnectionUrl = process.env.DATABASE_URL;
const testConnectionUrl = process.env.TEST_DATABASE_URL;

const config = {
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
const connection = config[String(env)];

if (!connection || !connection.connection) {
	throw new Error(`DB Connection not provided for env ${env}`);
}

module.exports = connection;

// staging: {
//   client: 'postgresql',
//   connection: {
//     database: 'my_db',
//     user:     'username',
//     password: 'password'
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: 'knex_migrations'
//   }
// },
