
exports.up = function(knex) {
	return knex.schema.table('post_subscription', (table) => {
		table.index(['user_id', 'post_id']);
	});
};

exports.down = function(knex) {
	return knex.schema.table('post_subscription', (table) => {
		table.dropIndex(['user_id', 'post_id']);
	});
};
