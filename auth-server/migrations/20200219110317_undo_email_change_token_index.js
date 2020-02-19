
exports.up = function(knex) {
	return knex.schema.table('undo_email_change_token', (table) => {
		table.index('token');
	});
};

exports.down = function(knex) {
	return knex.schema.table('undo_email_change_token', (table) => {
		table.dropIndex('token');
	});
};
