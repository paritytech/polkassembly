// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AuthenticationError, UserInputError } from 'apollo-server';
import { expect } from 'chai';
import 'mocha';
import { uuid } from 'uuidv4';

import User from '../../../src/model/User';
import signup from '../../../src/resolvers/mutation/signup';
import requestResetPassword from '../../../src/resolvers/mutation/requestResetPassword';
import resetPassword from '../../../src/resolvers/mutation/resetPassword';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';
import { getPwdResetTokenKey } from '../../../src/services/auth';
import { redisGet, redisDel } from '../../../src/redis';

describe('requestResetPassword mutation', () => {
	let signupResult: any;
	const fakectx: Context = {
		req: {
			headers: {}
		},
		res: {
			cookie: () => {}
		}
	} as any;
	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';
	const name = 'test name';
	const newPassword = 'longenough';
	let token = '';

	before(async () => {
		signupResult = await signup(undefined, { email, password, username, name }, fakectx);
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
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

	it('should be able to reset password with a valid token', async () => {

		const res = await resetPassword(undefined, { token, userId: signupResult.user.id, newPassword });

		expect(res.message).to.eq(messages.PASSWORD_RESET_SUCCESSFUL);
	});

	it('should not be able to reset password with a short password', async () => {

		try {
			await resetPassword(undefined, { token, userId: signupResult.user.id, newPassword: 'short' });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.PASSWORD_LENGTH_ERROR);
		}
	});

	it('should not be able to reset password with a wrong token', async () => {

		try {
			await resetPassword(undefined, { token: uuid(), userId: signupResult.user.id, newPassword });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.PASSWORD_RESET_TOKEN_INVALID);
		}
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

	it('should not be able to change password with token that was used already', async () => {
		await redisDel(getPwdResetTokenKey(signupResult.user.id));

		try {
			await resetPassword(undefined, { token, userId: signupResult.user.id, newPassword });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.PASSWORD_RESET_TOKEN_INVALID);
		}
	});
});
