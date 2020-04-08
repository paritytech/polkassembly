
// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
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
