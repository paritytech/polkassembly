import * as jwt from 'jsonwebtoken'
import { NotFoundError } from 'objection'
import { DataError } from 'objection-db-errors'
import { uuid } from 'uuidv4'

import { AuthObjectType } from '../types'
import User from '../model/User'
import RefreshToken from '../model/RefreshToken'

export default class AuthService {
	constructor(){}

	public async Login(username, password): Promise<AuthObjectType> {
		const user = await User
			.query()
			.where('username', username)
			.first()
      
		if (!user) { 
			throw new NotFoundError('User not found')
		}

		const correctPassword = await user.verifyPassword(password)
		if (!correctPassword) {
			throw new DataError('Incorrect password')
		}

		return {
			user: {
				email: user.email,
				username: user.username,
				name: user.name
			},
			token: this.getSignedToken(user),
			refreshToken: await this.getRefreshToken(user)
		}
	}

	public async SignUp(email, password, username, name): Promise<AuthObjectType> {
		const user = await User.query()
			.allowInsert('[email, password, username, name]')
			.insert({
				email,
				password,
				username,
				name
			})
		
		return {
			user: {
				email: user.email,
				username: user.username,
				name: user.name
			},
			token: this.getSignedToken(user),
			refreshToken: await this.getRefreshToken(user)
		}
	}

	public async RefreshToken(token: string): Promise<string> {
		const refreshToken = await RefreshToken
			.query()
			.where('token', token)
			.first()
		
		if (!refreshToken) { 
			throw new NotFoundError('Refresh token not found')
		}

		if (!refreshToken.valid) {
			throw new Error('Refresh token not valid')
		}

		if (refreshToken.expires < Math.floor(Date.now() / 1000)) {
			throw new Error('Refresh token expired')
		}

		const user = await User
			.query()
			.where('id', refreshToken.user_id)
			.first()

		return this.getSignedToken(user)
	}

	private getSignedToken({ id, username, email }): string {
		const allowedRoles = ['user']
		let currentRole = 'user'
	
		// if our user is the proposal bot, give additional role.
		if (id == process.env.BOT_PROPOSAL_USER_ID) { // eslint-disable-line
			allowedRoles.push('proposal_bot')
			currentRole = 'proposal_bot'
		}
	
		const tokenContent = {
			sub: `${id}`,
			name: username,
			iat: Math.floor(Date.now() / 1000),
			'https://hasura.io/jwt/claims': {
				'x-hasura-allowed-roles': allowedRoles,
				'x-hasura-default-role': currentRole,
				'x-hasura-user-id': `${id}`,
				'x-hasura-user-email': email
			}
		}

		return jwt.sign(tokenContent, process.env.ENCRYPTION_KEY, { expiresIn: '10d' })
	}

	private async getRefreshToken({ id }): Promise<string> {
		const token = uuid()
		const user_id = id
		const valid = true
		const expires = Math.floor(Date.now() / 1000) + (100 * 24 * 60 * 60)
		const refreshToken = await RefreshToken.query()
			.allowInsert('[token, user_id, valid, expires]')
			.insert({
				token, 
				user_id, 
				valid, 
				expires
			})

		return refreshToken.token
	}
}