
// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
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
