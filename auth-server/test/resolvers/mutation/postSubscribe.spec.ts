// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { AuthenticationError } from 'apollo-server/dist/exports';
import 'mocha';
import { expect } from 'chai';

import PostSubscription from '../../../src/model/PostSubscription';
import User from '../../../src/model/User';
import postSubscribe from '../../../src/resolvers/mutation/postSubscribe';
import signup from '../../../src/resolvers/mutation/signup';
import { Context, TokenType } from '../../../src/types';
import messages from '../../../src/utils/messages';
import { getNewUserCtx } from '../../helpers';

describe('post subscribe mutation', () => {
	let signupUserId = 0;
	let fakectx: Context;

	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';
	const name = 'test name';
	const post_id = 123;

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

	it('should be able to subscribe to a post', async () => {
		const res = await postSubscribe(undefined, { post_id }, fakectx);

		const dbSubscription = await PostSubscription
			.query()
			.where({
				user_id: signupUserId,
				post_id: post_id
			})
			.first();

		expect(dbSubscription).to.exist;
		expect(dbSubscription?.post_id).to.equals(post_id);
		expect(dbSubscription?.user_id).to.equals(signupUserId);
		expect(res.message).to.eq(messages.SUBSCRIPTION_SUCCESSFUL);
	});

	it('should show already subscribed if subscribed again', async () => {
		const result = await postSubscribe(undefined, { post_id }, fakectx);

		expect(result.message).to.equals(messages.SUBSCRIPTION_ALREADY_EXISTS);
	});

	it('should not be able to subscribe with a wrong jwt', async () => {
		const fakectx_wrong_jwt = fakectx;
		fakectx_wrong_jwt.req.headers.authorization = 'Bearer wrong';

		try {
			await postSubscribe(undefined, { post_id }, fakectx_wrong_jwt);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
		}
	});
});
