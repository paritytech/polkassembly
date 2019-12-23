/**
 * Module dependencies.
 */
require('dotenv').config()

import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as chalk from 'chalk'
import * as dotenv from 'dotenv'
import * as expressValidator from 'express-validator'
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema'
import resolvers from './resolvers'

import routes from './routes'

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' })

if (process.env.NODE_ENV === 'test') {
	if (!process.env.JWT_PRIVATE_KEY_TEST) {
		throw new Error('JWT_PRIVATE_KEY_TEST private key required')
	}

	if (!process.env.JWT_PUBLIC_KEY_TEST) {
		throw new Error('JWT_PUBLIC_KEY_TEST public key required')
	}

	if (!process.env.JWT_KEY_PASSPHRASE_TEST) {
		throw new Error('JWT_KEY_PASSPHRASE_TEST private key passphrase required')
	}
} else {
	if (!process.env.JWT_PRIVATE_KEY) {
		throw new Error('JWT_PRIVATE_KEY private key required')
	}

	if (!process.env.JWT_PUBLIC_KEY) {
		throw new Error('JWT_PUBLIC_KEY public key required')
	}

	if (!process.env.JWT_KEY_PASSPHRASE) {
		throw new Error('JWT_KEY_PASSPHRASE private key passphrase required')
	}
}

/**
 * Controllers (route handlers).
 */

/**
 * Create Express server.
 */
const app = express()
const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	context: ({ req, res }) => ({ req, res })
});

/**
 * Express configuration.
 */
app.use(cors())
app.set('host', '0.0.0.0')
app.set('port', process.env.PORT || 8080)
app.set('json spaces', 2) // number of spaces for indentation
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())

server.applyMiddleware({ app, path: '/auth/graphql' });

app.use(routes)

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
	console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'))
	console.log('  Press CTRL-C to stop\n')
})

module.exports = app
