
exports.up = (knex) => {
	return knex.schema.createTable('content_report', (table) => {
		table.increments('id').primary();
		table.enu('type', ['post', 'comment']).notNullable();
		table.integer('content_id').notNullable();
		table.integer('user_id').notNullable();
		table.string('reason').notNullable();
		table.boolean('resolved').defaultTo(false);
		table.string('action');
		table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
		table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('RESTRICT');
	});
};

exports.down = (knex) => {
	return knex.schema.dropTable('content_report');
};
