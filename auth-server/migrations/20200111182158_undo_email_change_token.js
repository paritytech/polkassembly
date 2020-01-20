// Table to store tokens for email verification
exports.up = function(knex) {
	return knex.schema.createTable('undo_email_change_token', (table) => {
		table.increments('id').primary().notNullable();
		table.uuid('token').unique().notNullable();
		table.string('email').notNullable();
		table.integer('user_id').notNullable();
		table.boolean('valid').notNullable();
		table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
		table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('RESTRICT');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('undo_email_change_token');
};
