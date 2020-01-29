
exports.up = function(knex) {
	return knex.schema.createTable('address', (table) => {
		table.increments('id').primary().notNullable();
		table.integer('user_id').notNullable();
		table.enu('network', ['kasuma', 'polkadot']).notNullable();
		table.string('address');
		table.string('public_key');
		table.uuid('sign_message');
		table.boolean('verified').defaultTo(false);
		table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
		table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('RESTRICT');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('address');
};
