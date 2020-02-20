
exports.up = function(knex) {
	return knex.schema.table('password_reset_token', (table) => {
		table.index('token');
	});
};

exports.down = function(knex) {
	return knex.schema.table('password_reset_token', (table) => {
		table.dropIndex('token');
	});
};
