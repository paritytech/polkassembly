
exports.up = (knex) => {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary();
		table.string('email').nullable();
		table.string('password').notNullable();
		table.string('salt').notNullable();
		table.string('username').unique().notNullable();
		table.string('name').nullable();
		table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
	});
};

exports.down = (knex) => {
	return knex.schema.dropTable('users');
};
