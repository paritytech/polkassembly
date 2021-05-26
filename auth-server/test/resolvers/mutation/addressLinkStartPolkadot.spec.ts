// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { expect } from 'chai';
import { AuthenticationError, ForbiddenError } from 'apollo-server';
import 'mocha';
import { uuid } from 'uuidv4';

import User from '../../../src/model/User';
import Address from '../../../src/model/Address';
import addressLinkStart from '../../../src/resolvers/mutation/addressLinkStart';
import { Context, NetworkEnum } from '../../../src/types';
import messages from '../../../src/utils/messages';
import { getNewUserCtx } from '../../helpers';

describe('addressLinkStart mutation on Polkadot', () => {
	let signupUserId = -1;
	let fakectx: Context;
	let dbAddressId: any;
	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';

	before(async () => {
		const result = await getNewUserCtx(email, password, username);
		fakectx = result.ctx;
		signupUserId = result.userId;
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupUserId })
			.del();

		await Address
			.query()
			.where({ id: dbAddressId })
			.del();
	});

	it('should be able to start linking address on Polkadot', async () => {
		const network = NetworkEnum.POLKADOT;
		const address = '14Gjs1TD93gnwEBfDMHoCgsuf1s2TVKUP6Z1qKmAZnZ8cW5q'; // Charlie
		const res = await addressLinkStart(undefined, { network, address }, fakectx);

		const dbAddress = await Address
			.query()
			.where({ user_id: signupUserId })
			.first();

		expect(dbAddress?.network).to.be.equal(network);
		expect(dbAddress?.address).to.be.equal(address);
		expect(dbAddress?.sign_message).to.exist;
		expect(dbAddress?.sign_message).to.be.a('string');
		expect(dbAddress?.sign_message).to.equal(res.sign_message);
		expect(dbAddress?.verified).to.be.false;

		expect(res.message).to.equal(messages.ADDRESS_LINKING_STARTED);

		dbAddressId = dbAddress?.id;
	});

	it('should not be able to start linking address if it already exists in db on Polkadot', async () => {
		const network = NetworkEnum.POLKADOT;
		const address = '14E5nqKAp3oAJcmzgZhUD2RcptBeUBScxKHgJKU4HPNcKVf3'; // Bob
		const dbAddress = await Address
			.query()
			.allowInsert('[network, address, user_id, sign_message, verified]')
			.insert({
				address,
				network,
				sign_message: uuid(),
				user_id: signupUserId,
				verified: true
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

	it('should not be able to start linking address with wrong jwt on Polkadot', async () => {
		const network = NetworkEnum.POLKADOT;
		const address = '15oF4uVJwmo4TdGW7VfQxNLavjCXviqxT9S1MgbjMNHr6Sp5'; // Alice
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
