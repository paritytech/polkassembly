// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import 'mocha';
import { expect } from 'chai';
import jwt from 'jsonwebtoken';

import login from '../../../src/resolvers/mutation/login';
import User from '../../../src/model/User';
import { Context } from '../../../src/types';
import { AuthenticationError } from 'apollo-server';
import messages from '../../../src/utils/messages';
import { getNewUserCtx } from '../../helpers';

describe('login mutation', () => {
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

	it('should be able to login', async () => {
		const result = await login(undefined, { username, password }, fakectx);

		expect(result.token).to.exist;
		expect(result.token).to.be.a('string');

		const token: any = jwt.decode(result.token);
		const claims = 'https://hasura.io/jwt/claims';

		expect(token.username).to.equal(username);
		expect(token.email).to.equals(email);
		expect(token[claims]['x-hasura-default-role']).to.equals('user');
		expect(token[claims]['x-hasura-user-email']).to.equals(email);
	});

	it('should throw an error if username doesn\'t exist', async () => {
		try {
			await login(undefined, { username: 'notexist', password }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.NO_USER_FOUND_WITH_USERNAME);
		}
	});

	it('should throw an error if password is wrong', async () => {
		try {
			await login(undefined, { username, password: 'wrong' }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INCORRECT_PASSWORD);
		}
	});

});
