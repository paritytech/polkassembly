
exports.up = function(knex) {
	return knex.schema.createTable('post_subscription', (table) => {
		table.increments('id').primary().notNullable();
		table.integer('user_id').notNullable();
		table.integer('post_id').notNullable();
		table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
		table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('RESTRICT');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('post_subscription');
};
