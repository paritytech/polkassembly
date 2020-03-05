import { expect } from 'chai';
import { AuthenticationError, ForbiddenError, UserInputError } from 'apollo-server';
import 'mocha';

import User from '../../../src/model/User';
import changeUsername from '../../../src/resolvers/mutation/changeUsername';
import signup from '../../../src/resolvers/mutation/signup';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('changeUsername mutation', () => {
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
		fakectx.req.headers.authorization = `Bearer ${signupResult.token}` // eslint-disable-line
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should be able to change username', async () => {
		const username = 'newusername';
		const result = await changeUsername(null, { username }, fakectx);

		const dbUser = await User
			.query()
			.where({ id: signupResult.user.id })
			.first();

		expect(dbUser.username).to.be.equal(username);
		expect(result.message).to.be.equal(messages.USERNAME_CHANGE_SUCCESSFUL);
	});

	it('should not be able to change username to existing username', async () => {
		try {
			await changeUsername(null, { username }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.USERNAME_ALREADY_EXISTS);
		}
	});

	it('should not be able to change name with wrong jwt', async () => {
		const username = 'newusername';
		fakectx.req.headers.authorization = 'Bearer wrong';
		try {
			await changeUsername(null, { username }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});

	it('should not be able to change username if username contains whitespace', async () => {
		const username = 'user name';

		try {
			await changeUsername(null, { username }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.USERNAME_INVALID_ERROR);
		}
	});

	it('should not be able to change username if username is too long', async () => {
		const username = 'newnamethatiswaaaaayyyyyyyytoolong';

		try {
			await changeUsername(null, { username }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.USERNAME_INVALID_ERROR);
		}
	});

	it('should not be able to change username if username is too short', async () => {
		const username = 'a';

		try {
			await changeUsername(null, { username }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.USERNAME_INVALID_ERROR);
		}
	});
});
