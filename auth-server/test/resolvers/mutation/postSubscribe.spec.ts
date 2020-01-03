import 'mocha';
import { expect } from 'chai';

import PostSubscription from '../../../src/model/PostSubscription';
import User from '../../../src/model/User';
import signup from '../../../src/resolvers/mutation/signup';
import postSubscribe from '../../../src/resolvers/mutation/postSubscribe';
import { Context, SignUpResultType } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('post subscribe mutation', () => {
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

	it('should be able to subscribe to a post', async () => {
		const post_id = 123;
		await postSubscribe(null, { post_id }, fakectx);

		const dbSubscription = await PostSubscription
			.query()
			.where({
				user_id: signupResult.user.id,
				post_id: post_id
			})
			.first();

		expect(dbSubscription).to.exist;
		expect(dbSubscription.post_id).to.equals(post_id);
		expect(dbSubscription.user_id).to.equals(signupResult.user.id);

		const result = await postSubscribe(null, { post_id }, fakectx);

		expect(result.message).to.equals(messages.SUBSCRIPTION_ALREADY_EXIST);
	});
});
