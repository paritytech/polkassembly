import * as jwt from 'jsonwebtoken'
import * as argon2 from 'argon2'
import { randomBytes } from 'crypto'
import { uuid } from 'uuidv4'
import { AuthenticationError, UserInputError, ForbiddenError } from 'apollo-server'

import {
	sendVerificationEmail,
	sendResetPasswordEmail
} from './email'
import EmailVerificationToken from '../model/EmailVerificationToken'
import PasswordResetToken from '../model/PasswordResetToken'
import RefreshToken from '../model/RefreshToken'
import User from '../model/User'
import { AuthObjectType, JWTPayploadType, Role } from '../types'
import getUserFromUserId from '../utils/getUserFromUserId'
import getUserIdFromJWT from '../utils/getUserIdFromJWT'
import messages from '../utils/messages'

const privateKey = process.env.NODE_ENV === 'test'? process.env.JWT_PRIVATE_KEY_TEST : process.env.JWT_PRIVATE_KEY
const publicKey = process.env.NODE_ENV === 'test'? process.env.JWT_PUBLIC_KEY_TEST : process.env.JWT_PUBLIC_KEY
const passphrase = process.env.NODE_ENV === 'test'? process.env.JWT_KEY_PASSPHRASE_TEST : process.env.JWT_KEY_PASSPHRASE

const SIX_MONTHS = 6 * 30 * 24 * 60 * 60 * 1000
const ONE_DAY = 24 * 60 * 60 * 1000

export default class AuthService {
	constructor(){}

	public async Login(username, password): Promise<AuthObjectType> {
		const user = await User
			.query()
			.where('username', username)
			.first()

		if (!user) {
			throw new AuthenticationError(messages.NO_USER_FOUND_WITH_USERNAME)
		}

		const correctPassword = await user.verifyPassword(password)
		if (!correctPassword) {
			throw new AuthenticationError(messages.INCORRECT_PASSWORD)
		}

		return {
			user: {
				id: user.id,
				email: user.email,
				username: user.username,
				name: user.name
			},
			token: this.getSignedToken(user),
			refreshToken: await this.getRefreshToken(user)
		}
	}

	public async Logout(token: string, refreshToken: string) {
		if (!refreshToken) {
			throw new AuthenticationError(messages.REFRESH_TOKEN_NOT_PROVIDED)
		}

		const refreshTokenObj = await RefreshToken
			.query()
			.where('token', refreshToken)
			.first()

		if (!refreshTokenObj) {
			throw new ForbiddenError(messages.NO_CORRESPONDING_REFRESH_TOKEN)
		}

		const userId = await getUserIdFromJWT(token, publicKey)

		if (refreshTokenObj.user_id !== userId) {
			throw new AuthenticationError(messages.JWT_REFRESH_TOKEN_USER_MISMATCH)
		}

		await RefreshToken
			.query()
			.patch({ valid: false })
			.where({ token: refreshToken })
	}

	public async SignUp(email: string, password: string, username: string, name: string): Promise<AuthObjectType> {
		let existing = await User
			.query()
			.where('username', username)
			.first()

		if (existing) {
			throw new ForbiddenError(messages.USERNAME_ALREADY_EXISTS)
		}

		existing = await User
			.query()
			.where('email', email)
			.first()

		if (existing) {
			throw new ForbiddenError(messages.USER_EMAIL_ALREADY_EXISTS)
		}

		const salt = randomBytes(32)
		password = await argon2.hash(password, { salt })

		const user = await User
			.query()
			.allowInsert('[email, password, username, name]')
			.insert({
				email,
				password,
				salt: salt.toString('hex'),
				username,
				name,
				email_verified: false
			})

		const verifyToken = await EmailVerificationToken
			.query()
			.allowInsert('[token, user_id, valid]')
			.insert({
				token: uuid(),
				user_id: user.id,
				valid: true
			})

		// send verification email in background
		sendVerificationEmail(user, verifyToken)

		return {
			user: {
				id: user.id,
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
			throw new ForbiddenError(messages.REFRESH_TOKEN_NOT_PROVIDED)
		}

		if (!refreshToken.valid) {
			throw new ForbiddenError(messages.INVALID_REFRESH_TOKEN)
		}

		if (new Date(refreshToken.expires).getTime() < Math.floor(Date.now() / 1000)) {
			throw new ForbiddenError(messages.REFRESH_TOKEN_EXPIRED)
		}

		const user = await User
			.query()
			.where('id', refreshToken.user_id)
			.first()

		return this.getSignedToken(user)
	}

	public async ChangePassword(token: string, oldPassword: string, newPassword: string) {
		if (oldPassword === newPassword) {
			throw new UserInputError(messages.OLD_AND_NEW_PASSWORD_MUST_DIFFER)
		}

		const userId= await getUserIdFromJWT(token, publicKey)
		const user = await getUserFromUserId(userId);

		const correctPassword = await user.verifyPassword(oldPassword)
		if (!correctPassword) {
			throw new UserInputError(messages.INCORRECT_PASSWORD)
		}

		const salt = randomBytes(32)
		const password = await argon2.hash(newPassword, { salt })

		await User
			.query()
			.patch({
				salt: salt.toString('hex'),
				password
			})
			.findById(userId)
	}

	public async ChangeName(token: string, newName: string) {
		const userId= await getUserIdFromJWT(token, publicKey);

		//verify that the user exists
		await getUserFromUserId(userId);

		await User
			.query()
			.patch({ name: newName })
			.findById(userId)
	}

	public async VerifyEmail(token: string) {
		const verifyToken = await EmailVerificationToken
			.query()
			.where('token', token)
			.first()

		if (!verifyToken) {
			throw new AuthenticationError(messages.EMAIL_VERIFICATION_TOKEN_NOT_FOUND)
		}

		if (!verifyToken.valid) {
			throw new AuthenticationError(messages.INVALID_EMAIL_VERIFICATION_TOKEN)
		}

		await User
			.query()
			.patch({ email_verified: true })
			.findById(verifyToken.user_id)

		await EmailVerificationToken
			.query()
			.patch({ valid: false })
			.findById(verifyToken.id)
	}

	public async ChangeEmail(token: string, email: string) {
		const userId= await getUserIdFromJWT(token, publicKey);
		const user= await getUserFromUserId(userId);

		await User
			.query()
			.patch({
				email,
				email_verified: false
			})
			.findById(userId)

		// Invalidate all email verification token for user
		await EmailVerificationToken
			.query()
			.patch({ valid: false })
			.where({ user_id: userId })

		const verifyToken = await EmailVerificationToken
			.query()
			.allowInsert('[token, user_id, valid]')
			.insert({
				token: uuid(),
				user_id: user.id,
				valid: true
			})

		// send verification email in background
		sendVerificationEmail(user, verifyToken)

	}

	public async RequestResetPassword(email: string) {
		const user = await User
			.query()
			.where('email', email)
			.first()

		if (!user) {
			return
		}

		const expires = new Date(Date.now() + ONE_DAY).toISOString() // 24 hours

		const resetToken = await PasswordResetToken
			.query()
			.allowInsert('[token, user_id, valid, expires]')
			.insert({
				token: uuid(),
				user_id: user.id,
				valid: true,
				expires
			})

		sendResetPasswordEmail(user, resetToken)
	}

	public async ResetPassword(token: string, newPassword: string) {
		const resetToken = await PasswordResetToken
			.query()
			.where('token', token)
			.first()

		if (!resetToken) {
			throw new AuthenticationError(messages.PASSWORD_RESET_TOKEN_NOT_FOUND)
		}

		if (!resetToken.valid) {
			throw new AuthenticationError(messages.INVALID_PASSWORD_RESET_TOKEN)
		}

		if (new Date(resetToken.expires).getTime() < Date.now()) {
			throw new AuthenticationError(messages.INVALID_PASSWORD_RESET_TOKEN)
		}

		const salt = randomBytes(32)
		const password = await argon2.hash(newPassword, { salt })

		await User
			.query()
			.patch({
				salt: salt.toString('hex'),
				password
			})
			.findById(resetToken.user_id)

		await PasswordResetToken
			.query()
			.patch({ valid: false })
			.findById(resetToken.id)
	}

	private getSignedToken({ id, username, email }): string {
		const allowedRoles: Role[] = [Role.USER]
		let currentRole: Role = Role.USER

		// if our user is the proposal bot, give additional role.
		if (id == process.env.BOT_PROPOSAL_USER_ID) { // eslint-disable-line
			allowedRoles.push(Role.PROPOSAL_BOT)
			currentRole = Role.PROPOSAL_BOT
		}

		const tokenContent : JWTPayploadType = {
			sub: `${id}`,
			name: username,
			iat: Math.floor(Date.now() / 1000),
			'https://hasura.io/jwt/claims': {
				'x-hasura-allowed-roles': allowedRoles,
				'x-hasura-default-role': currentRole,
				'x-hasura-user-email': email,
				'x-hasura-user-id': `${id}`
			}
		}

		return jwt.sign(
			tokenContent,
			{ key: privateKey, passphrase },
			{ algorithm: 'RS256', expiresIn: '1h' }
		)
	}

	private async getRefreshToken({ id }): Promise<string> {
		const token = uuid()
		const user_id = id
		const valid = true
		const expires = new Date(Date.now() + SIX_MONTHS).toISOString() // now + 6 months
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
