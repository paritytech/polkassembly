// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AuthenticationError, UserInputError } from 'apollo-server';
import { expect } from 'chai';
import 'mocha';
import { uuid } from 'uuidv4';

import User from '../../../src/model/User';
import requestResetPassword from '../../../src/resolvers/mutation/requestResetPassword';
import resetPassword from '../../../src/resolvers/mutation/resetPassword';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';
import { getPwdResetTokenKey } from '../../../src/services/auth';
import { redisGet } from '../../../src/redis';
import { getNewUserCtx } from '../../helpers';

describe('requestResetPassword mutation', () => {
	let fakectx: Context;
	let signupUserId = -1;

	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';
	const newPassword = 'longenough';
	let token = '';

	before(async () => {
		const result = await getNewUserCtx(email, password, username);
		fakectx = result.ctx;
		signupUserId = result.userId;
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupUserId })
			.del();
	});

	it('should be able to request a password reset with token set in redis', async () => {
		const res = await requestResetPassword(undefined, { email });

		const user = await User
			.query()
			.where('email', email)
			.first();

		const passwordResetToken = await redisGet(getPwdResetTokenKey(user?.id || 0));
		token = passwordResetToken;

		expect(passwordResetToken).to.not.be.empty;
		expect(res.message).to.eq(messages.RESET_PASSWORD_RETURN_MESSAGE);
	});

	it('should not be able to request reset password with an invalid email', async () => {
		const email = 'wrong@email';

		try {
			await requestResetPassword(undefined, { email });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.INVALID_EMAIL);
		}
	});

	it('should not be able to reset password with a short password', async () => {

		try {
			await resetPassword(undefined, { token, userId: signupUserId, newPassword: 'short' });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.PASSWORD_LENGTH_ERROR);
		}
	});

	it('should not be able to reset password with a wrong token', async () => {

		try {
			await resetPassword(undefined, { token: uuid(), userId: signupUserId, newPassword });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.PASSWORD_RESET_TOKEN_INVALID);
		}
	});

	it('should be able to reset password with a valid token', async () => {

		const res = await resetPassword(undefined, { token, userId: signupUserId, newPassword });

		expect(res.message).to.eq(messages.PASSWORD_RESET_SUCCESSFUL);
	});

	it('should not be able to change password with token that was used already', async () => {
		try {
			await resetPassword(undefined, { token, userId: signupUserId, newPassword });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.PASSWORD_RESET_TOKEN_INVALID);
		}
	});
});
