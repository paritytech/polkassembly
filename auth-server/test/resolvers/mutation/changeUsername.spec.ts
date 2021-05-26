// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { expect } from 'chai';
import { AuthenticationError, ForbiddenError, UserInputError } from 'apollo-server';
import 'mocha';

import User from '../../../src/model/User';
import changeUsername from '../../../src/resolvers/mutation/changeUsername';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';
import { getNewUserCtx } from '../../helpers';

describe('changeUsername mutation', () => {
	let signupUserId = -1;
	let fakectx: Context;
	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';

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

	it('should be able to change username', async () => {
		const username = 'newusername';
		const result = await changeUsername(undefined, { username, password }, fakectx);

		const dbUser = await User
			.query()
			.where({ id: signupUserId })
			.first();

		expect(dbUser?.username).to.be.equal(username);
		expect(result.message).to.be.equal(messages.USERNAME_CHANGE_SUCCESSFUL);
	});

	it('should not be able to change username to existing username', async () => {
		try {
			await changeUsername(undefined, { username, password }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.USERNAME_ALREADY_EXISTS);
		}
	});

	it('should not be able to change username with wrong password', async () => {
		const password = 'wrong';
		const username = 'newuser';

		try {
			await changeUsername(undefined, { username, password }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.INCORRECT_PASSWORD);
		}
	});

	it('should not be able to change name with wrong jwt', async () => {
		const username = 'newusername';
		fakectx.req.headers.authorization = 'Bearer wrong';
		try {
			await changeUsername(undefined, { username, password }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});

	it('should not be able to change username if username contains whitespace', async () => {
		const username = 'user name';

		try {
			await changeUsername(undefined, { username, password }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.USERNAME_INVALID_ERROR);
		}
	});

	it('should not be able to change username if username is too long', async () => {
		const username = 'newnamethatiswaaaaayyyyyyyytoolong';

		try {
			await changeUsername(undefined, { username, password }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.USERNAME_INVALID_ERROR);
		}
	});

	it('should not be able to change username if username is too short', async () => {
		const username = 'a';

		try {
			await changeUsername(undefined, { username, password }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.USERNAME_INVALID_ERROR);
		}
	});
});
