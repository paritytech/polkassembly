import { expect } from 'chai';
import { ForbiddenError } from 'apollo-server';
import 'mocha';

import User from '../../../src/model/User';
import Address from '../../../src/model/Address';
import addressLinkStart from '../../../src/resolvers/mutation/addressLinkStart';
import addressLinkConfirm from '../../../src/resolvers/mutation/addressLinkConfirm';
import addressLogin from '../../../src/resolvers/mutation/addressLogin';
import signup from '../../../src/resolvers/mutation/signup';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('addressLogin mutation', () => {
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
	const network = 'kusama';
	const address = 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F'; //Alice
	const signMessage = 'da194645-4daf-43b6-b023-6c6ce99ee709';
	const signature = '0x048ffa02dd58557ab7f7ffb316ac75fa942d2bdb83f4480a6698a1f39d6fa1184dd85d95480bfab59f516de578b102a2b01b81ca0e69134f90e0cd08ada7ca88';

	before(async () => {
		signupResult = await signup(null, { email, password, username, name }, fakectx);
		fakectx.req.headers.authorization = `Bearer ${signupResult.token}` // eslint-disable-line

		const linkStartRes = await addressLinkStart(null, { network, address }, fakectx);

		await Address
			.query()
			.patch({
				sign_message: signMessage
			})
			.findById(linkStartRes.address_id);

		await addressLinkConfirm(null, { signature, address_id: linkStartRes.address_id }, fakectx);
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();

		await Address
			.query()
			.where({ user_id: signupResult.user.id })
			.del();
	});

	it('should be able to login with addresss', async () => {
		const signature = '0x4a6b16e017b6dd5ed35ad46ab751ff89358ed4e77a86e67e3946355b4ea53872cc0fd504f96860ef371a2ade186d8852d34b3fe651540054306099e8082dd68e';

		const result = await addressLogin(null, { address, signature }, fakectx);

		expect(result.user.id).to.exist;
		expect(result.user.id).to.a('number');
		expect(result.user.email).to.equal(email);
		expect(result.user.name).to.equal(name);
		expect(result.user.username).to.equal(username);
		expect(result.token).to.exist;
		expect(result.token).to.be.a('string');
	});

	it('should not be able to login with invalid signature', async () => {
		const signature = '0xaaaa';

		try {
			await addressLogin(null, { address, signature }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.ADDRESS_LOGIN_INVALID_SIGNATURE);
		}
	});
});
