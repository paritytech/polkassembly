import 'mocha';
import { expect } from 'chai';

import PostSubscription from '../../../src/model/PostSubscription';
import User from '../../../src/model/User';
import signup from '../../../src/resolvers/mutation/signup';
import postSubscribe from '../../../src/resolvers/mutation/postSubscribe';
import postUnsubscribe from '../../../src/resolvers/mutation/postUnsubscribe';
import { Context, SignUpResultType } from '../../../src/types';

describe('post unSubscribe mutation', () => {
	let signupResult : SignUpResultType;

	let fakectx: Context = {
		req: {
			headers: {},
			cookies: {}
		},
		res: {
			header: { 'refresh_token' : '' },
			cookie: function(name, value){
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

		await postSubscribe(null, { post_id }, fakectx);
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should be able to unsubscribe from a post', async () => {
		await postUnsubscribe(null, { post_id }, fakectx);

		const dbSubscription = await PostSubscription
			.query()
			.where({
				user_id: signupResult.user.id,
				post_id: post_id
			})
			.first();

		expect(dbSubscription).to.not.exist;
	});
});
