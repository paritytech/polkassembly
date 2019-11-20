import * as jwt from 'jsonwebtoken'
import User from '../model/User'
import { NotFoundError } from 'objection'
import { DataError } from 'objection-db-errors'

export default class AuthService {
	constructor(){}

	public async Login(username, password): Promise<any> {
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
			token: this.getSignedToken(user)
		}
	}

	public async SignUp(email, password, username, name): Promise<any> {
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
			token: this.getSignedToken(user)
		}
	}

	private getSignedToken({ id, username, email }) {
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
}