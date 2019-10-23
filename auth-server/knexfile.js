// Update with your config settings.
var dotenv = require('dotenv');
dotenv.load();

const databaseName = "postgres";
const pg = require('pg');

const connection_url = process.env.DATABASE_URL || `postgres://postgres:@localhost:5432/${databaseName}`;

console.log("migration applied on ",connection_url);

module.exports = {
  client: 'pg',
  connection: connection_url,
  migrations: {
    directory: __dirname + '/db/migrations'
  }
};
