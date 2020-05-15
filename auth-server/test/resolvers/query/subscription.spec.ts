// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import 'mocha';

import { expect } from 'chai';

import User from '../../../src/model/User';
import postSubscribe from '../../../src/resolvers/mutation/postSubscribe';
import subscription from '../../../src/resolvers/query/subscription';
import { Context } from '../../../src/types';
import { getNewUserCtx } from '../../helpers';

describe('post subscription query', () => {
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

	it('should be able to check if user is subscribed to a post', async () => {
		await postSubscribe(undefined, { post_id }, fakectx);

		const result = await subscription(undefined, { post_id }, fakectx);

		expect(result.subscribed).to.be.true;
	});
});
