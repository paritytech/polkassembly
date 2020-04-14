// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import 'mocha';

import { AuthenticationError, ForbiddenError } from 'apollo-server';
import { expect } from 'chai';

import User from '../../../src/model/User';
import logout from '../../../src/resolvers/mutation/logout';
import signup from '../../../src/resolvers/mutation/signup';
import { SignUpResultType } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('logout mutation', () => {
	let signupResult: SignUpResultType;
	let refresh_token: string;

	const fakectx: {req: any, res: any} = {
		req: {
			cookies: {},
			headers: {}
		},
		res: {
			// shortcuting the cookie function, any cookie that is
			// set by the server, will be set in the header,
			// so that we can read it later on.
			cookie: function (name: string, value: any): void {
				this.header[name] = value;
			},
			header: { refresh_token: '' }
		}
	};

	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';
	const name = 'test name';

	before(async () => {
		signupResult = await signup(undefined, { email, name, password, username }, fakectx);
		// reading the refresh token from the header thanks to our modified cookie function
		refresh_token = fakectx.res.header.refresh_token;
		fakectx.req.headers.authorization = `Bearer ${signupResult.token}` // eslint-disable-line
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should be able to logout', async () => {
		fakectx.req.cookies.refresh_token = refresh_token;
		const result = await logout(undefined, undefined, fakectx);

		expect(result.message).to.exist;
		expect(result.message).to.eq(messages.LOGOUT_SUCCESSFUL);
	});

	it('should throw an error if the JWT is invalid', async () => {
		fakectx.req.headers.authorization = 'Bearer wrong-jwt';
		try {
			await fakectx;
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});

	it('should throw an error if the refresh token is not matching', async () => {
		fakectx.req.cookies.refresh_token = 'wrong-refresh-tokken';
		try {
			await fakectx;
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.NO_CORRESPONDING_REFRESH_TOKEN);
		}
	});
});
