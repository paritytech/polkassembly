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

import { upload, uploadController } from './controllers/upload'
import { postLogin, postLogout, postChangePassword, postChangeName, postChangeEmail, getVerifyAccount, postSignup, postToken } from './controllers/user'
import { typeDefs, resolvers } from './controllers/graphql'

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' })

if (!process.env.JWT_PRIVATE_KEY) {
	throw new Error('JWT private key required')
}

if (!process.env.JWT_PUBLIC_KEY) {
	throw new Error('JWT public key required')
}

if (!process.env.JWT_KEY_PASSPHRASE) {
	throw new Error('JWT private key passphrase required')
}

/**
 * Controllers (route handlers).
 */

/**
 * Create Express server.
 */
const app = express()
const server = new ApolloServer({ typeDefs, resolvers });

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

server.applyMiddleware({ app });

app.post('/login', postLogin)
app.post('/logout', postLogout)
app.post('/change-password', postChangePassword)
app.post('/change-name', postChangeName)
app.post('/change-email', postChangeEmail)
app.get('/verify-account', getVerifyAccount)
app.post('/signup', postSignup)
app.post('/token', postToken)
// unused
app.post('/upload-profile-pic', upload.single('file'), uploadController)

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
	console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'))
	console.log('  Press CTRL-C to stop\n')
})

module.exports = app
