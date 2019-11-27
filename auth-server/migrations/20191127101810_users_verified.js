
exports.up = function(knex) {
	return knex.schema.table('users', (table) => {
		table.boolean('verified').defaultTo(false)
	})
}

exports.down = function(knex) {
	return knex.schema.table('users', function (table) {
		table.dropColumn('verified')
	})
}
