import connection from '../src/model/connection';
import * as knexCleaner from 'knex-cleaner';

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
