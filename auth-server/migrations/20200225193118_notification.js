
exports.up = (knex) => {
	return knex.schema.createTable('notification', (table) => {
		table.increments('id').primary();
		table.integer('user_id').notNullable();
		table.boolean('post_participated').defaultTo(true);
		table.boolean('post_created').defaultTo(true);
		table.boolean('new_proposal').defaultTo(false);
		table.boolean('own_proposal').defaultTo(true);
		table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
	});
};

exports.down = (knex) => {
	return knex.schema.dropTable('notification');
};
