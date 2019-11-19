// Update with your config settings.
var dotenv = require('dotenv');
dotenv.load();

const databaseName = "governance-auth";
const pg = require('pg');

const connection_url = process.env.DATABASE_URL || `postgres://postgres:postgres@localhost:5431/${databaseName}`;

console.log("applying migration on ",connection_url);

module.exports = {
  client: 'postgresql',
  connection: connection_url,
  migrations: {
    directory: __dirname + '/db/migrations'
  }
};

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
