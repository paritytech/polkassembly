
exports.up = function(knex) {
	return knex.schema.createTable('refresh_tokens', (table) => {
		table.increments('id').primary().notNullable()
		table.string('token').unique().notNullable()
		table.integer('user_id').notNullable()
		table.boolean('valid').notNullable()
		table.bigInteger('expires').notNullable()
		table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
		table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('RESTRICT')
	})
};

exports.down = function(knex) {
	return knex.schema.dropTable('refresh_tokens')
};
