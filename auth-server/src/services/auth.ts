import * as jwt from 'jsonwebtoken';
import * as argon2 from 'argon2';
import { randomBytes } from 'crypto';
import * as moment from 'moment';
import { uuid } from 'uuidv4';
import { AuthenticationError, UserInputError, ForbiddenError } from 'apollo-server';

import {
	sendUndoEmailChangeEmail,
	sendVerificationEmail,
	sendResetPasswordEmail
} from './email';
import EmailVerificationToken from '../model/EmailVerificationToken';
import UndoEmailChangeToken from '../model/UndoEmailChangeToken';
import PasswordResetToken from '../model/PasswordResetToken';
import RefreshToken from '../model/RefreshToken';
import User from '../model/User';
import { AuthObjectType, JWTPayploadType, Role, UserObjectType } from '../types';
import getUserFromUserId from '../utils/getUserFromUserId';
import getUserIdFromJWT from '../utils/getUserIdFromJWT';
import messages from '../utils/messages';

const privateKey = process.env.NODE_ENV === 'test'? process.env.JWT_PRIVATE_KEY_TEST : process.env.JWT_PRIVATE_KEY;
const publicKey = process.env.NODE_ENV === 'test'? process.env.JWT_PUBLIC_KEY_TEST : process.env.JWT_PUBLIC_KEY;
const passphrase = process.env.NODE_ENV === 'test'? process.env.JWT_KEY_PASSPHRASE_TEST : process.env.JWT_KEY_PASSPHRASE;

const SIX_MONTHS = 6 * 30 * 24 * 60 * 60 * 1000;
const ONE_DAY = 24 * 60 * 60 * 1000;

export default class AuthService {
	constructor(){}

	public async GetUser(token: string): Promise<UserObjectType> {
		const userId = await getUserIdFromJWT(token, publicKey);

		return getUserFromUserId(userId);
	}

	public async Login(username, password): Promise<AuthObjectType> {
		const user = await User
			.query()
			.where('username', username)
			.first();

		if (!user) {
			throw new AuthenticationError(messages.NO_USER_FOUND_WITH_USERNAME);
		}

		const correctPassword = await user.verifyPassword(password);
		if (!correctPassword) {
			throw new AuthenticationError(messages.INCORRECT_PASSWORD);
		}

		return {
			user: {
				id: user.id,
				email: user.email,
				username: user.username,
				name: user.name,
				email_verified: user.email_verified
			},
			token: this.getSignedToken(user),
			refreshToken: await this.getRefreshToken(user)
		};
	}

	public async Logout(token: string, refreshToken: string) {
		if (!refreshToken) {
			throw new AuthenticationError(messages.REFRESH_TOKEN_NOT_PROVIDED);
		}

		const refreshTokenObj = await RefreshToken
			.query()
			.where('token', refreshToken)
			.first();

		if (!refreshTokenObj) {
			throw new ForbiddenError(messages.NO_CORRESPONDING_REFRESH_TOKEN);
		}

		const userId = await getUserIdFromJWT(token, publicKey);

		if (refreshTokenObj.user_id !== userId) {
			throw new AuthenticationError(messages.JWT_REFRESH_TOKEN_USER_MISMATCH);
		}

		await RefreshToken
			.query()
			.patch({ valid: false })
			.where({ token: refreshToken });
	}

	public async SignUp(email: string, password: string, username: string, name: string): Promise<AuthObjectType> {
		let existing = await User
			.query()
			.where('username', username)
			.first();

		if (existing) {
			throw new ForbiddenError(messages.USERNAME_ALREADY_EXISTS);
		}

		if (email) {
			existing = await User
				.query()
				.where('email', email)
				.first();
		}

		if (existing) {
			throw new ForbiddenError(messages.USER_EMAIL_ALREADY_EXISTS);
		}

		const salt = randomBytes(32);
		password = await argon2.hash(password, { salt });

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
			});

		if (email) {
			const verifyToken = await EmailVerificationToken
				.query()
				.allowInsert('[token, user_id, valid]')
				.insert({
					token: uuid(),
					user_id: user.id,
					valid: true
				});

			// send verification email in background
			sendVerificationEmail(user, verifyToken);
		}

		return {
			user: {
				id: user.id,
				email: user.email,
				username: user.username,
				name: user.name,
				email_verified: user.email_verified
			},
			token: this.getSignedToken(user),
			refreshToken: await this.getRefreshToken(user)
		};
	}

	public async RefreshToken(token: string): Promise<string> {
		const refreshToken = await RefreshToken
			.query()
			.where('token', token)
			.first();

		if (!refreshToken) {
			throw new ForbiddenError(messages.REFRESH_TOKEN_NOT_PROVIDED);
		}

		if (!refreshToken.valid) {
			throw new ForbiddenError(messages.INVALID_REFRESH_TOKEN);
		}

		if (new Date(refreshToken.expires).getTime() < Math.floor(Date.now() / 1000)) {
			throw new ForbiddenError(messages.REFRESH_TOKEN_EXPIRED);
		}

		const user = await User
			.query()
			.where('id', refreshToken.user_id)
			.first();

		return this.getSignedToken(user);
	}

	public async ChangePassword(token: string, oldPassword: string, newPassword: string) {
		if (oldPassword === newPassword) {
			throw new UserInputError(messages.OLD_AND_NEW_PASSWORD_MUST_DIFFER);
		}

		const userId = await getUserIdFromJWT(token, publicKey);
		const user = await getUserFromUserId(userId);

		const correctPassword = await user.verifyPassword(oldPassword);
		if (!correctPassword) {
			throw new UserInputError(messages.INCORRECT_PASSWORD);
		}

		const salt = randomBytes(32);
		const password = await argon2.hash(newPassword, { salt });

		await User
			.query()
			.patch({
				salt: salt.toString('hex'),
				password
			})
			.findById(userId);
	}

	public async ChangeName(token: string, newName: string): Promise<string> {
		const userId = await getUserIdFromJWT(token, publicKey);

		await User
			.query()
			.patch({ name: newName })
			.findById(userId);

		const user = await getUserFromUserId(userId);

		return this.getSignedToken(user);
	}

	public async VerifyEmail(token: string): Promise<string> {
		const verifyToken = await EmailVerificationToken
			.query()
			.where('token', token)
			.first();

		if (!verifyToken) {
			throw new AuthenticationError(messages.EMAIL_VERIFICATION_TOKEN_NOT_FOUND);
		}

		if (!verifyToken.valid) {
			throw new AuthenticationError(messages.INVALID_EMAIL_VERIFICATION_TOKEN);
		}

		await User
			.query()
			.patch({ email_verified: true })
			.findById(verifyToken.user_id);

		await EmailVerificationToken
			.query()
			.patch({ valid: false })
			.findById(verifyToken.id);

		const user = await getUserFromUserId(verifyToken.user_id);

		return this.getSignedToken(user);
	}

	public async ChangeUsername(token: string, username: string): Promise<string> {
		const userId = await getUserIdFromJWT(token, publicKey);
		const existing = await User
			.query()
			.where('username', username)
			.first();

		if (existing) {
			throw new ForbiddenError(messages.USERNAME_ALREADY_EXISTS);
		}

		await User
			.query()
			.patch({
				username
			})
			.findById(userId);

		const user = await getUserFromUserId(userId);

		return this.getSignedToken(user);
	}

	public async ChangeEmail(token: string, email: string): Promise<string> {
		const userId = await getUserIdFromJWT(token, publicKey);
		const existing = await User
			.query()
			.where('email', email)
			.first();

		if (existing) {
			throw new ForbiddenError(messages.USER_EMAIL_ALREADY_EXISTS);
		}

		let user = await getUserFromUserId(userId);

		const existingUndoToken = await UndoEmailChangeToken
			.query()
			.where({
				user_id: userId,
				valid: true
			})
			.orderBy('created_at', 'desc')
			.first();

		if (existingUndoToken) {
			const now = moment();
			const last = moment(existingUndoToken.created_at);

			const hours = moment.duration(now.diff(last)).asHours();

			if (hours < 48) {
				throw new ForbiddenError(messages.EMAIL_CHANGE_NOT_ALLOWED_YET);
			}
		}

		const undoToken = await UndoEmailChangeToken
			.query()
			.allowInsert('[token, user_id, email, valid]')
			.insert({
				token: uuid(),
				user_id: userId,
				email: user.email,
				valid: true
			});

		await User
			.query()
			.patch({
				email,
				email_verified: false
			})
			.findById(userId);

		// Invalidate all email verification token for user
		await EmailVerificationToken
			.query()
			.patch({ valid: false })
			.where({ user_id: userId });

		const verifyToken = await EmailVerificationToken
			.query()
			.allowInsert('[token, user_id, valid]')
			.insert({
				token: uuid(),
				user_id: userId,
				valid: true
			});

		user = await getUserFromUserId(userId);

		// send verification email in background
		sendVerificationEmail(user, verifyToken);

		// send undo token in background
		sendUndoEmailChangeEmail(user, undoToken);

		return this.getSignedToken(user);
	}

	public async RequestResetPassword(email: string) {
		const user = await User
			.query()
			.where('email', email)
			.first();

		if (!user) {
			return;
		}

		const expires = new Date(Date.now() + ONE_DAY).toISOString(); // 24 hours

		const resetToken = await PasswordResetToken
			.query()
			.allowInsert('[token, user_id, valid, expires]')
			.insert({
				token: uuid(),
				user_id: user.id,
				valid: true,
				expires
			});

		sendResetPasswordEmail(user, resetToken);
	}

	public async ResetPassword(token: string, newPassword: string) {
		const resetToken = await PasswordResetToken
			.query()
			.where('token', token)
			.first();

		if (!resetToken) {
			throw new AuthenticationError(messages.PASSWORD_RESET_TOKEN_NOT_FOUND);
		}

		if (!resetToken.valid) {
			throw new AuthenticationError(messages.PASSWORD_RESET_TOKEN_INVALID);
		}

		if (new Date(resetToken.expires).getTime() < Date.now()) {
			throw new AuthenticationError(messages.PASSWORD_RESET_TOKEN_INVALID);
		}

		const salt = randomBytes(32);
		const password = await argon2.hash(newPassword, { salt });

		await User
			.query()
			.patch({
				salt: salt.toString('hex'),
				password
			})
			.findById(resetToken.user_id);

		await PasswordResetToken
			.query()
			.patch({ valid: false })
			.findById(resetToken.id);
	}

	public async UndoEmailChange(token: string) {
		const undoToken = await UndoEmailChangeToken
			.query()
			.where('token', token)
			.first();

		if (!undoToken) {
			throw new AuthenticationError(messages.EMAIL_UNDO_TOKEN_NOT_FOUND);
		}

		if (!undoToken.valid) {
			throw new AuthenticationError(messages.INVALID_EMAIL_UNDO_TOKEN);
		}

		await User
			.query()
			.patch({
				email: undoToken.email,
				email_verified: false
			})
			.findById(undoToken.user_id);

		await UndoEmailChangeToken
			.query()
			.patch({ valid: false })
			.findById(undoToken.id);

		const user = await getUserFromUserId(undoToken.user_id);

		return { updatedToken: this.getSignedToken(user), email: user.email };
	}

	private getSignedToken({ id, name, username, email, email_verified }): string {
		const allowedRoles: Role[] = [Role.USER];
		let currentRole: Role = Role.USER;

		// if our user is the proposal bot, give additional role.
		if (id == process.env.BOT_PROPOSAL_USER_ID) { // eslint-disable-line
			allowedRoles.push(Role.PROPOSAL_BOT);
			currentRole = Role.PROPOSAL_BOT;
		}

		const tokenContent : JWTPayploadType = {
			sub: `${id}`,
			name,
			username,
			email,
			email_verified,
			iat: Math.floor(Date.now() / 1000),
			'https://hasura.io/jwt/claims': {
				'x-hasura-allowed-roles': allowedRoles,
				'x-hasura-default-role': currentRole,
				'x-hasura-user-email': email,
				'x-hasura-user-id': `${id}`
			}
		};

		return jwt.sign(
			tokenContent,
			{ key: privateKey, passphrase },
			{ algorithm: 'RS256', expiresIn: '1h' }
		);
	}

	private async getRefreshToken({ id }): Promise<string> {
		const token = uuid();
		const user_id = id;
		const valid = true;
		const expires = new Date(Date.now() + SIX_MONTHS).toISOString(); // now + 6 months
		const refreshToken = await RefreshToken.query()
			.allowInsert('[token, user_id, valid, expires]')
			.insert({
				token,
				user_id,
				valid,
				expires
			});

		return refreshToken.token;
	}
}
