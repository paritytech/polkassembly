import 'mocha';
import { expect } from 'chai';

import User from '../../../src/model/User';
import postSubscribe from '../../../src/resolvers/mutation/postSubscribe';
import subscription from '../../../src/resolvers/query/subscription';
import signup from '../../../src/resolvers/mutation/signup';
import { Context, SignUpResultType } from '../../../src/types';

describe('post subscription query', () => {
	let signupResult : SignUpResultType;

	let fakectx: Context = {
		req: {
			headers: {},
			cookies: {}
		},
		res: {
			header: { 'refresh_token' : '' },
			cookie: function(name, value){
				// eslint-disable-next-line security/detect-object-injection
				this.header[name] = value;
			}
		}
	} as any;

	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';
	const name = 'test name';
	const post_id = 123;

	before(async () => {
		signupResult = await signup(null, { email, password, username, name }, fakectx);
		fakectx.req.headers.authorization = `Bearer ${signupResult.token}`; // eslint-disable-line
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should be able to check if user is subscribed to a post', async () => {
		await postSubscribe(null, { post_id }, fakectx);

		const result = await subscription(null, { post_id }, fakectx);

		expect(result.subscribed).to.be.true;
	});
});
