import { expect } from 'chai';
import { AuthenticationError, ForbiddenError } from 'apollo-server';
import 'mocha';

import User from '../../../src/model/User';
import Address from '../../../src/model/Address';
import addressLinkStart from '../../../src/resolvers/mutation/addressLinkStart';
import addressLinkConfirm from '../../../src/resolvers/mutation/addressLinkConfirm';
import signup from '../../../src/resolvers/mutation/signup';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('addressLinkConfirm mutation', () => {
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

	it('should be able to confirm address link', async () => {
		const network = 'kasuma';
		const address = '5E9ap3x1fQ42vQ4kaD9UiSgDHZJ1WsPN64E1CMKBzAg3h7aX';
		const signMessage = 'da194645-4daf-43b6-b023-6c6ce99ee709';
		const signature = '0x660535f7dc76abff4de1ab61e194b2af9bfa88ba99de7c418e3a9ddbec2a463847031aad7e9f8634ccfdea4b8ae83723cc3997327b2760958ca04e3364cb3207';

		const linkStartRes = await addressLinkStart(null, { network, address }, fakectx);

		await Address
			.query()
			.patch({
				sign_message: signMessage
			})
			.findById(linkStartRes.address_id);

		const linkConfirmRes = await addressLinkConfirm(null, { signature, address_id: linkStartRes.address_id }, fakectx);

		const dbAddress = await Address
			.query()
			.where({ user_id: signupResult.user.id })
			.first();

		expect(dbAddress.public_key).to.exist;
		expect(dbAddress.linked).to.be.true;

		expect(linkConfirmRes.message).to.equal(messages.ADDRESS_LINKING_SUCCESSFUL);
	});

	it('should not be able to confirm address link with fake signature', async () => {
		const network = 'kasuma';
		const address = '5E9ap3x1fQ42vQ4kaD9UiSgDHZJ1WsPN64E1CMKBzAg3h7aX';
		const signature = 'fake';

		const linkStartRes = await addressLinkStart(null, { network, address }, fakectx);

		await Address
			.query()
			.patch({
				sign_message: 'da194645-4daf-43b6-b023-6c6ce99ee709'
			})
			.findById(linkStartRes.address_id);

		try {
			await addressLinkConfirm(null, { signature, address_id: linkStartRes.address_id }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.ADDRESS_LINKING_FAILED);
		}
	});

	it('should not be able to confirm linking address with wrong jwt', async () => {
		const signature = 'fake';
		fakectx.req.headers.authorization = 'Bearer wrong';
		try {
			await addressLinkConfirm(null, { signature, address_id: 1 }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});
});
