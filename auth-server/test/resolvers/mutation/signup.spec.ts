import { ForbiddenError, UserInputError } from 'apollo-server';
import 'mocha';
import { expect } from 'chai';

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
		const result = await signup(null, { email, password, username, name }, fakectx);
		expect(result.user.id).to.exist;
		expect(result.user.id).to.a('number');
		expect(result.user.email).to.equal(email);
		expect(result.user.name).to.equal(name);
		expect(result.user.username).to.equal(username);
		expect(result.token).to.exist;
		expect(result.token).to.be.a('string');
	});

	it('should be able to subsequently login', async () => {
		const result = await login(null, { password, username }, fakectx);
		expect(result.user.id).to.exist;
		expect(result.user.id).to.a('number');
		expect(result.user.email).to.equal(email);
		expect(result.user.name).to.equal(name);
		expect(result.user.username).to.equal(username);
		expect(result.token).to.exist;
		expect(result.token).to.be.a('string');
	});

	it('should be able to subsequently login', async () => {
		const result = await login(null, { password, username }, fakectx);
		expect(result.user.id).to.exist;
		expect(result.user.id).to.a('number');
		expect(result.user.email).to.equal(email);
		expect(result.user.name).to.equal(name);
		expect(result.user.username).to.equal(username);
		expect(result.token).to.exist;
		expect(result.token).to.be.a('string');

		await User
			.query()
			.where({ id: result.user.id })
			.del();
	});

	it('should throw an error if the email is invalid', async () => {
		const email = 'wrong@email';

		try {
			await signup(null, { email, password, username, name }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.INVALID_EMAIL);
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
			await signup(null, { email, password, username, name }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.USERNAME_ALREADY_EXISTS);
		}

		try {
			await signup(null, { email: 'wrong email', password, username, name }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.INVALID_EMAIL);
		}

		try {
			await signup(null, { email, password, username: 'newuser', name }, fakectx);
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
