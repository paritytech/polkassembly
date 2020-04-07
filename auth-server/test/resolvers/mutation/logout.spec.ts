// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { ForbiddenError, AuthenticationError } from 'apollo-server';
import 'mocha';
import { expect } from 'chai';

import User from '../../../src/model/User';
import logout from '../../../src/resolvers/mutation/logout';
import signup from '../../../src/resolvers/mutation/signup';
import { Context, SignUpResultType } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('logout mutation', () => {
	let signupResult : SignUpResultType;
	let refresh_token : string;

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
		refresh_token = fakectx.res.header['refresh_token'];
		fakectx.req.cookies['refresh_token'] = refresh_token; // eslint-disable-line
		fakectx.req.headers.authorization = `Bearer ${signupResult.token}` // eslint-disable-line
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should be able to logout', async () => {
		const result = await logout(null, null, fakectx);

		expect(result.message).to.exist;
		expect(result.message).to.eq(messages.LOGOUT_SUCCESSFUL);
	});

	it('should throw an error if the JWT is invalid', async () => {
		fakectx.req.headers.authorization = 'Bearer wrong-jwt';
		try {
			await (fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});

	it('should throw an error if the refresh token is not matching', async () => {
		fakectx.req.cookies['refresh_token'] = 'wrong-refresh-tokken';
		try {
			await (fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.NO_CORRESPONDING_REFRESH_TOKEN);
		}
	});

});
