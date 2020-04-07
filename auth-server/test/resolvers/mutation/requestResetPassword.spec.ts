// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { UserInputError, AuthenticationError } from 'apollo-server';
import { expect } from 'chai';
import { uuid } from 'uuidv4';
import 'mocha';

import PasswordResetToken from '../../../src/model/PasswordResetToken';
import User from '../../../src/model/User';
import signup from '../../../src/resolvers/mutation/signup';
import resetPassword from '../../../src/resolvers/mutation/resetPassword';
import requestResetPassword from '../../../src/resolvers/mutation/requestResetPassword';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('requestResetPassword mutation', () => {
	let signupResult;
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
		signupResult = await signup(null, { email, password, username, name }, fakectx);
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();

		await PasswordResetToken
			.query()
			.where({ user_id: signupResult.user.id })
			.del();
	});

	it('should be able to request a password reset', async () => {

		const res = await requestResetPassword(null, { email });

		const passwordResetToken = await PasswordResetToken
			.query()
			.where({ user_id: signupResult.user.id, valid: true });

		token = passwordResetToken[0].token;

		expect(passwordResetToken.length).to.eq(1);
		expect(passwordResetToken[0].token).to.not.be.empty;
		expect(passwordResetToken[0].valid).to.be.true;
		expect(res.message).to.eq(messages.RESET_PASSWORD_RETURN_MESSAGE);
	});

	it('should not be able to reset password with a short password', async () => {

		try {
			await resetPassword(null, { token, newPassword: 'short' });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.PASSWORD_LENGTH_ERROR);
		}
	});

	it('should not be able to reset password with a wrong token', async () => {

		try {
			await resetPassword(null, { token: uuid(), newPassword });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.PASSWORD_RESET_TOKEN_NOT_FOUND);
		}
	});

	it('should be able to reset password with a valid token', async () => {

		const res = await resetPassword(null, { token, newPassword });

		expect(res.message).to.eq(messages.PASSWORD_RESET_SUCCESSFUL);
	});

	it('should not be able to change password with an expired token', async () => {

		try {
			await resetPassword(null, { token, newPassword });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.PASSWORD_RESET_TOKEN_INVALID);
		}
	});

	it('should not be able to change password with an invalid email', async () => {
		const email = 'wrong@email';

		try {
			await requestResetPassword(null, { email });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.INVALID_EMAIL);
		}
	});
});
