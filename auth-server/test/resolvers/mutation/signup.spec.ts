// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { ForbiddenError, UserInputError } from 'apollo-server';
import 'mocha';
import { expect } from 'chai';
import jwt from 'jsonwebtoken';

import User from '../../../src/model/User';
import login from '../../../src/resolvers/mutation/login';
import signup from '../../../src/resolvers/mutation/signup';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('signup mutation', () => {
	const fakectx: Context = {
		req: {},
		res: {
			cookie: () => {}
		}
	} as any;
	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';
	const name = 'test name';
	const salt = 'testsalt';

	it('should be able to signup', async () => {
		const result = await signup(undefined, { email, password, username, name }, fakectx);
		const token: any = jwt.decode(result.token);
		const claims = 'https://hasura.io/jwt/claims';

		expect(token.username).to.equal(username);
		expect(token.name).to.equal(name);
		expect(token.email).to.equals(email);
		expect(token[claims]['x-hasura-default-role']).to.equals('user');
		expect(token[claims]['x-hasura-user-email']).to.equals(email);

		expect(result.token).to.exist;
		expect(result.token).to.be.a('string');
	});

	it('should be able to subsequently login', async () => {
		const result = await login(undefined, { password, username }, fakectx);
		const token: any = jwt.decode(result.token);
		const claims = 'https://hasura.io/jwt/claims';

		expect(token.username).to.equal(username);
		expect(token.name).to.equal(name);
		expect(token.email).to.equals(email);
		expect(token[claims]['x-hasura-default-role']).to.equals('user');
		expect(token[claims]['x-hasura-user-email']).to.equals(email);
		expect(result.token).to.exist;
		expect(result.token).to.be.a('string');
	});

	it('should be able to login with case different for username', async () => {
		const result = await login(undefined, { password, username: username.toUpperCase() }, fakectx);
		const token: any = jwt.decode(result.token);
		const claims = 'https://hasura.io/jwt/claims';

		expect(token.username).to.equal(username);
		expect(token.name).to.equal(name);
		expect(token.email).to.equals(email);
		expect(token[claims]['x-hasura-default-role']).to.equals('user');
		expect(token[claims]['x-hasura-user-email']).to.equals(email);
		expect(result.token).to.exist;
		expect(result.token).to.be.a('string');
	});

	it('should be able to subsequently login', async () => {
		const result = await login(undefined, { password, username }, fakectx);
		const token: any = jwt.decode(result.token);
		const claims = 'https://hasura.io/jwt/claims';

		expect(token.username).to.equal(username);
		expect(token.name).to.equal(name);
		expect(token.email).to.equals(email);
		expect(token[claims]['x-hasura-default-role']).to.equals('user');
		expect(token[claims]['x-hasura-user-email']).to.equals(email);
		expect(result.token).to.exist;
		expect(result.token).to.be.a('string');

		await User
			.query()
			.where({ id: Number(token.sub) })
			.del();
	});

	it('should be able to signup with no display name or email', async () => {
		const result = await signup(undefined, { email: '', password, name: '', username }, fakectx);
		const token: any = jwt.decode(result.token);

		expect(token.username).to.equal(username);
		expect(result.token).to.exist;
		expect(result.token).to.be.a('string');

		await User
			.query()
			.where({ id: Number(token.sub) })
			.del();
	});

	it('should throw an error if the email is invalid', async () => {
		const email = 'wrong@email';

		try {
			await signup(undefined, { email, password, username, name }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.INVALID_EMAIL);
		}
	});

	it('should throw an error if username contains whitespace', async () => {
		const username = 'user name';

		try {
			await signup(undefined, { email, password, username, name }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.USERNAME_INVALID_ERROR);
		}
	});

	it('should throw an error if user with username/email already exist', async () => {
		const dbUser = await User
			.query()
			.allowInsert('[email, password, username, name]')
			.insert({
				email,
				password,
				salt,
				username,
				name
			})
			.returning('*');

		try {
			await signup(undefined, { email, password, username, name }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.USERNAME_ALREADY_EXISTS);
		}

		try {
			await signup(undefined, { email: 'wrong email', password, username, name }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.INVALID_EMAIL);
		}

		try {
			await signup(undefined, { email, password, username: 'newuser', name }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.USER_EMAIL_ALREADY_EXISTS);
		}

		await User
			.query()
			.where({ id: dbUser.id })
			.del();
	});

});
