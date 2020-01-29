import 'mocha';
import { expect } from 'chai';
import { AuthenticationError } from 'apollo-server';
import { uuid } from 'uuidv4';

import User from '../../../src/model/User';
import Address from '../../../src/model/Address';
import addressUnlink from '../../../src/resolvers/mutation/addressUnlink';
import signup from '../../../src/resolvers/mutation/signup';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('addressUnlink mutation', () => {
	let signupResult;
	let dbAddress;
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
		signupResult = await signup(null, { email, password, username, name }, fakectx);
		fakectx.req.headers.authorization = `Bearer ${signupResult.token}` // eslint-disable-line

		dbAddress = await Address
			.query()
			.allowInsert('[network, address, user_id, public_key, sign_message, linked]')
			.insert({
				network: 'kasuma',
				address: 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', // Alice
				user_id: signupResult.user.id,
				public_key: uuid(),
				sign_message: uuid(),
				linked: true
			})
			.returning('*');
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should be able to unlink an address', async () => {
		const res = await addressUnlink(null, { address: dbAddress.address }, fakectx);

		const dbAddressRes = await Address
			.query()
			.findById(dbAddress.id);

		expect(dbAddressRes).to.not.exist;
		expect(res.message).to.be.equal(messages.ADDRESS_UNLINKING_SUCCESS);
	});

	it('should not be able to unlink address with wrong jwt', async () => {
		fakectx.req.headers.authorization = 'Bearer wrong';
		try {
			await addressUnlink(null, { address: dbAddress.address }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});
});
