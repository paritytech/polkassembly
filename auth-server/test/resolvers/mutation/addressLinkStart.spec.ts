// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { expect } from 'chai';
import { AuthenticationError, ForbiddenError } from 'apollo-server';
import 'mocha';
import { uuid } from 'uuidv4';

import User from '../../../src/model/User';
import Address from '../../../src/model/Address';
import addressLinkStart from '../../../src/resolvers/mutation/addressLinkStart';
import signup from '../../../src/resolvers/mutation/signup';
import { Context, NetworkEnum } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('addressLinkStart mutation', () => {
	let signupResult: any;
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
		signupResult = await signup(undefined, { email, password, username, name }, fakectx);
		fakectx.req.headers.authorization = `Bearer ${signupResult.token}` // eslint-disable-line
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should be able to start linking address', async () => {
		const network = NetworkEnum.KUSAMA;
		const address = 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F'; // Alice
		const res = await addressLinkStart(undefined, { network, address }, fakectx);

		const dbAddress = await Address
			.query()
			.where({ user_id: signupResult.user.id })
			.first();

		expect(dbAddress?.network).to.be.equal(network);
		expect(dbAddress?.address).to.be.equal(address);
		expect(dbAddress?.sign_message).to.exist;
		expect(dbAddress?.sign_message).to.be.a('string');
		expect(dbAddress?.sign_message).to.equal(res.sign_message);
		expect(dbAddress?.verified).to.be.false;

		expect(res.message).to.equal(messages.ADDRESS_LINKING_STARTED);
	});

	it('should not be able to start linking address if it already exists in db', async () => {
		const network = NetworkEnum.KUSAMA;
		const address = 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F'; // Alice
		const dbAddress = await Address
			.query()
			.allowInsert('[network, address, user_id, sign_message, verified]')
			.insert({
				address,
				network,
				sign_message: uuid(),
				user_id: signupResult.user.id,
				verified: false
			});

		try {
			await addressLinkStart(undefined, { network, address }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.ADDRESS_ALREADY_EXISTS);
		}

		await Address
			.query()
			.where({ id: dbAddress.id })
			.del();
	});

	it('should not be able to start linking address with wrong jwt', async () => {
		const network = NetworkEnum.KUSAMA;
		const address = 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F'; // Alice
		fakectx.req.headers.authorization = 'Bearer wrong';
		try {
			await addressLinkStart(undefined, { network, address }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});
});
