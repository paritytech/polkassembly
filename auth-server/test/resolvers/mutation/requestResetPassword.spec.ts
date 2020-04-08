// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserInputError } from 'apollo-server';
import { expect } from 'chai';
import 'mocha';

import User from '../../../src/model/User';
import signup from '../../../src/resolvers/mutation/signup';
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

	before(async () => {
		signupResult = await signup(null, { email, password, username, name }, fakectx);
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should be able to request a password reset', async () => {
		const res = await requestResetPassword(null, { email });

		expect(res.message).to.eq(messages.RESET_PASSWORD_RETURN_MESSAGE);
	});

	it('should not be able to request reset password with an invalid email', async () => {
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
