
exports.up = function(knex) {
	return knex.schema.table('content_report', (table) => {
		table.enu('network', ['kusama', 'polkadot']).defaultTo('kusama');
	});
};

exports.down = function(knex) {
	return knex.schema.table('content_report', function (table) {
		table.dropColumn('network');
	});
};
