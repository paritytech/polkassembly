// Update with your config settings.
const dotenv = require('dotenv')

dotenv.load()

const databaseName = 'governance-auth'
const connectionUrl = process.env.DATABASE_URL || `postgres://postgres:postgres@localhost:5431/${databaseName}`

const config = {
	test: {
		client: 'postgresql',
		connection: 'postgres://postgres:postgres@localhost:5431/governance-auth-test',
		migrations: {
			directory: `${__dirname}/migrations`
		}
	},
	development: {
		client: 'postgresql',
		connection: connectionUrl,
		migrations: {
			directory: `${__dirname}/migrations`
		}
	}
}

const env = process.env.NODE_ENV || 'development'

module.exports = config[env]

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
