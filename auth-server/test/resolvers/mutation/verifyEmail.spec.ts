// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { AuthenticationError } from 'apollo-server';
import { expect } from 'chai';
import 'mocha';
import { uuid } from 'uuidv4';

import User from '../../../src/model/User';
import verifyEmail from '../../../src/resolvers/mutation/verifyEmail';
import { redisDel, redisGet, redisSetex } from '../../../src/redis';
import { ONE_DAY, getEmailVerificationTokenKey } from '../../../src/services/auth';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';
import { getNewUserCtx } from '../../helpers';

describe('verifyEmail mutation', () => {
	const verifyToken = uuid();
	let fakectx: Context;
	let signupUserId = -1;

	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';

	before(async () => {
		const result = await getNewUserCtx(email, password, username);
		fakectx = result.ctx;
		signupUserId = result.userId;

		await redisSetex(getEmailVerificationTokenKey(verifyToken), ONE_DAY, email);
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupUserId })
			.del();

		await redisDel(getEmailVerificationTokenKey(verifyToken));
	});

	it('should be able to verify email with valid token', async () => {
		const res = await verifyEmail(undefined, { token: verifyToken });

		const dbUser = await User
			.query()
			.where({ id: signupUserId })
			.first();

		expect(dbUser?.email_verified).to.be.true;
		expect(res.message).to.eq(messages.EMAIL_VERIFICATION_SUCCESSFUL);
		expect(res.token).to.exist;
	});

	it('should throw an error if token is invalid', async () => {
		try {
			await verifyEmail(undefined, { token: uuid() });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.EMAIL_VERIFICATION_TOKEN_NOT_FOUND);
		}
	});
});
