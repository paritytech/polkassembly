// Update with your config settings.
const dotenv = require('dotenv')

dotenv.load()

const databaseName = 'governance-auth'
const connectionUrl = process.env.DATABASE_URL || `postgres://postgres:postgres@localhost:5431/${databaseName}`

console.log('applying migration on ', connectionUrl)

module.exports = {
	client: 'postgresql',
	connection: connectionUrl,
	migrations: {
		directory: `${__dirname}/migrations`
	}
}

// staging: {
//   client: 'postgresql',
//   connection: {
//     database: 'my_db',
//     user:     'username',
//     password: 'password'
//   },
//   pool: {
//     min: 2,
//     max: 10
//   },
//   migrations: {
//     tableName: 'knex_migrations'
//   }
// },
