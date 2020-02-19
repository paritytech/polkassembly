
exports.up = function(knex) {
	return knex.schema.table('users', (table) => {
		table.index('username');
		table.index('email');
	});
};

exports.down = function(knex) {
	return knex.schema.table('users', (table) => {
		table.dropIndex('username');
		table.dropIndex('email');
	});
};
