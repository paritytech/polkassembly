// Update with your config settings.
const dotenv = require('dotenv')

dotenv.load()

// e.g. 'postgres://postgres:postgres@localhost:5431/governance-auth'
const devConnectionUrl = process.env.DATABASE_URL
const testConnectionUrl = process.env.TEST_DATABASE_URL

const config = {
	development: {
		client: 'postgresql',
		connection: devConnectionUrl,
		migrations: {
			directory: `${__dirname}/migrations`
		}
	},
	test: {
		client: 'postgresql',
		connection: testConnectionUrl,
		migrations: {
			directory: `${__dirname}/migrations`
		}
	}
}

const env = process.env.NODE_ENV || 'development'
const connection = config[env]

if (!connection || !connection.connection) {
	throw new Error(`DB Connection not provided for env ${env}`)
}

module.exports = connection

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
