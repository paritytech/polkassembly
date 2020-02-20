
exports.up = function(knex) {
	return knex.schema.table('email_verification_token', (table) => {
		table.index('token');
	});
};

exports.down = function(knex) {
	return knex.schema.table('email_verification_token', (table) => {
		table.dropIndex('token');
	});
};
