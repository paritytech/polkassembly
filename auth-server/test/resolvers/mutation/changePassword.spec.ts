// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { AuthenticationError, UserInputError } from 'apollo-server';
import { expect } from 'chai';
import 'mocha';

import User from '../../../src/model/User';
import login from '../../../src/resolvers/mutation/login';
import signup from '../../../src/resolvers/mutation/signup';
import changePassword from '../../../src/resolvers/mutation/changePassword';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('changePassword mutation', () => {
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

	before(async () => {
		signupResult = await signup(undefined, { email, password, username, name }, fakectx);
		fakectx.req.headers.authorization = `Bearer ${signupResult.token}` // eslint-disable-line
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should be able to change password', async () => {
		const newPassword = 'newpass';
		const oldDbUser = await User
			.query()
			.where({ id: signupResult.user.id })
			.first();

		await changePassword(undefined, { oldPassword: password, newPassword }, fakectx);

		const dbUser = await User
			.query()
			.where({ id: signupResult.user.id })
			.first();

		expect(dbUser?.password).to.not.equal(oldDbUser?.password);
	});

	it('should be able to login with the new password', async () => {
		const newPassword = 'newpass';

		const result = await login(undefined, { password: newPassword, username }, fakectx);
		expect(result.user.id).to.exist;
		expect(result.user.id).to.a('number');
		expect(result.user.email).to.equal(email);
		expect(result.user.name).to.equal(name);
		expect(result.user.username).to.equal(username);
		expect(result.token).to.exist;
		expect(result.token).to.be.a('string');
	});

	it('should not be able to change password with an invalid jwt', async () => {
		const newPassword = 'newpass';
		fakectx.req.headers.authorization = 'Bearer wrong';
		try {
			await changePassword(undefined, { oldPassword: password, newPassword }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});

	it('should not be able to change for a short password', async () => {
		const newPassword = 'newpa';
		try {
			await changePassword(undefined, { oldPassword: password, newPassword }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.PASSWORD_LENGTH_ERROR);
		}
	});
});
