// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { AuthenticationError } from 'apollo-server/dist/exports';
import 'mocha';
import { expect } from 'chai';

import PostSubscription from '../../../src/model/PostSubscription';
import User from '../../../src/model/User';
import postSubscribe from '../../../src/resolvers/mutation/postSubscribe';
import postUnsubscribe from '../../../src/resolvers/mutation/postUnsubscribe';
import signup from '../../../src/resolvers/mutation/signup';
import { Context, SignUpResultType } from '../../../src/types';
import messages from '../../../src/utils/messages';

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

		await postSubscribe(null, { post_id }, fakectx);
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should be able to unsubscribe from a post', async () => {
		const res = await postUnsubscribe(null, { post_id }, fakectx);

		const dbSubscription = await PostSubscription
			.query()
			.where({
				user_id: signupResult.user.id,
				post_id: post_id
			})
			.first();

		expect(dbSubscription).to.not.exist;
		expect(res.message).eq(messages.SUBSCRIPTION_REMOVE_SUCCESSFUL);
	});

	it('should not be able to unsubscribe a second time', async () => {
		const result = await postUnsubscribe(null, { post_id }, fakectx);

		expect(result.message).to.equals(messages.SUBSCRIPTION_DOES_NOT_EXIST);
	});

	it('should not be able to unsubscribe with a wrong jwt', async () => {
		const fakectx_wrong_jwt = fakectx;
		fakectx_wrong_jwt.req.headers.authorization = 'Bearer wrong';
		try {
			await postUnsubscribe(null, { post_id }, fakectx_wrong_jwt);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
		}
	});
});
