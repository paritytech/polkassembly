// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
exports.up = (knex) => {
	return knex.schema.createTable('content_report', (table) => {
		table.increments('id').primary();
		table.enu('type', ['post', 'comment']).notNullable();
		table.string('content_id').notNullable();
		table.integer('user_id').notNullable();
		table.string('reason').notNullable();
		table.string('comments').notNullable();
		table.boolean('resolved').defaultTo(false);
		table.string('action');
		table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
		table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('RESTRICT');
	});
};

exports.down = (knex) => {
	return knex.schema.dropTable('content_report');
};
