// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { expect } from 'chai';
import { AuthenticationError, UserInputError } from 'apollo-server';
import 'mocha';

import User from '../../../src/model/User';
import changeName from '../../../src/resolvers/mutation/changeName';
import signup from '../../../src/resolvers/mutation/signup';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';
import { getNewUserCtx } from '../../helpers';

describe('changeName mutation', () => {
	let signupUserId = 0;
	let fakectx: Context;
	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';
	const name = 'test name';

	before(async () => {
		const result = await getNewUserCtx(email, password, username, name);
		fakectx = result.ctx;
		signupUserId = result.userId;
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupUserId })
			.del();
	});

	it('should be able to change name', async () => {
		const newName = 'new name';
		const res = await changeName(undefined, { newName }, fakectx);

		const dbUser = await User
			.query()
			.where({ id: signupUserId })
			.first();

		expect(dbUser?.name).to.be.equal(newName);
		expect(res.message).to.eq(messages.NAME_CHANGED_SUCCESSFULLY);
	});

	it('should not be able to use a too long name', async () => {
		const newName = 'new name that is waaaaayyyyyyyy too long';

		try {
			await changeName(undefined, { newName }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.NAME_INVALID_ERROR);
		}
	});

	it('should not be able to use a too short name', async () => {
		const newName = 'a';

		try {
			await changeName(undefined, { newName }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.NAME_INVALID_ERROR);
		}
	});

	it('should not be able to change name with wrong jwt', async () => {
		const newName = 'new name';
		fakectx.req.headers.authorization = 'Bearer wrong';
		try {
			await changeName(undefined, { newName }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});
});
