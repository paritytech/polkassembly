import { expect } from 'chai';
import { AuthenticationError } from 'apollo-server';
import 'mocha';

import User from '../../../src/model/User';
import Address from '../../../src/model/Address';
import addressLinkStart from '../../../src/resolvers/mutation/addressLinkStart';
import signup from '../../../src/resolvers/mutation/signup';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('addressLinkStart mutation', () => {
	let signupResult;
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
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should be able to start linking address', async () => {
		const network = 'kasuma';
		const address = '5CRvXUKwLDzFM1u9reZ1quf14pNbsw27EZWCBxPMmpydBfYV';
		const res = await addressLinkStart(null, { network, address }, fakectx);

		const dbAddress = await Address
			.query()
			.where({ user_id: signupResult.user.id })
			.first();

		expect(dbAddress.network).to.be.equal(network);
		expect(dbAddress.address).to.be.equal(address);
		expect(dbAddress.sign_message).to.exist;
		expect(dbAddress.sign_message).to.be.a('string');
		expect(dbAddress.sign_message).to.equal(res.sign_message);
		expect(dbAddress.linked).to.be.false;

		expect(res.message).to.equal(messages.ADDRESS_LINKING_STARTED);
	});

	it('should not be able to start linking address with wrong jwt', async () => {
		const network = 'kasuma';
		const address = '5CRvXUKwLDzFM1u9reZ1quf14pNbsw27EZWCBxPMmpydBfYV';
		fakectx.req.headers.authorization = 'Bearer wrong';
		try {
			await addressLinkStart(null, { network, address }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});
});
