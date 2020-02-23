
exports.up = function(knex) {
	return knex.schema.table('refresh_tokens', (table) => {
		table.index('token');
	});
};

exports.down = function(knex) {
	return knex.schema.table('users', (table) => {
		table.dropIndex('token');
	});
};
