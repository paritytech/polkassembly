// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import 'mocha';

import { AuthenticationError, ForbiddenError } from 'apollo-server';
import { expect } from 'chai';
import { uuid } from 'uuidv4';

import Address from '../../../src/model/Address';
import User from '../../../src/model/User';
import addressUnlink from '../../../src/resolvers/mutation/addressUnlink';
import { Context, NetworkEnum } from '../../../src/types';
import messages from '../../../src/utils/messages';
import { getNewUserCtx } from '../../helpers';
import getPublicKey from '../../../src/utils/getPublicKey';

describe('addressUnlink mutation', () => {
	let signupUserId = -1;
	let dbAddress: any;
	let fakectx: Context;
	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';

	before(async () => {
		const result = await getNewUserCtx(email, password, username);
		fakectx = result.ctx;
		signupUserId = result.userId;

		const address = 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F'; // Alice
		const publicKey = getPublicKey(address);

		dbAddress = await Address
			.query()
			.allowInsert('[network, address, user_id, public_key, sign_message, verified]')
			.insert({
				network: NetworkEnum.KUSAMA,
				address,
				user_id: signupUserId,
				public_key: publicKey,
				sign_message: uuid(),
				verified: true
			})
			.returning('*');
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupUserId })
			.del();
	});

	it('should not be able to unlink an unknown address', async () => {
		const wrongAddress = 'aaaata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upaaaa';

		try {
			await addressUnlink(undefined, { address: wrongAddress }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.ADDRESS_NOT_FOUND);
		}
	});

	it('should be able to unlink an address', async () => {
		const res = await addressUnlink(undefined, { address: dbAddress?.address }, fakectx);
		const dbAddressRes = await Address
			.query()
			.findById(dbAddress?.id);

		expect(dbAddressRes).to.not.exist;
		expect(res.message).to.be.equal(messages.ADDRESS_UNLINKING_SUCCESS);
	});

	it('should not be able to unlink address with wrong jwt', async () => {
		fakectx.req.headers.authorization = 'Bearer wrong';

		try {
			await addressUnlink(undefined, { address: dbAddress?.address }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});
});
