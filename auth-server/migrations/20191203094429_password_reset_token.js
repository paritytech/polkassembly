
exports.up = function(knex) {
	return knex.schema.createTable('password_reset_token', (table) => {
		table.increments('id').primary().notNullable();
		table.uuid('token').unique().notNullable();
		table.integer('user_id').notNullable();
		table.boolean('valid').notNullable();
		table.datetime('expires').notNullable();
		table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
		table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('RESTRICT');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('password_reset_token');
};
