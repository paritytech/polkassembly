// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import connection from '../src/model/connection';

const knexCleaner = require('knex-cleaner');

before(async () => {
	const options = {
		mode: 'delete',
		restartIdentity: true, // Used to tell PostgresSQL to reset the ID counter,
		ignoreTables: ['knex_migrations', 'knex_migrations_lock']
	};

	await knexCleaner.clean(connection, options);
});

after(async () => {
	await connection.destroy();
});
