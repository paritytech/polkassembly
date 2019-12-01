
exports.up = function(knex) {
	return knex.schema.table('users', (table) => {
		table.boolean('email_verified').defaultTo(false)
	})
}

exports.down = function(knex) {
	return knex.schema.table('users', function (table) {
		table.dropColumn('email_verified')
	})
}
