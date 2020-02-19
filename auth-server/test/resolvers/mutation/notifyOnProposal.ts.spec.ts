import { expect } from 'chai';
import { uuid } from 'uuidv4';
import 'mocha';
import { ForbiddenError } from 'apollo-server/dist/exports';

import Address from '../../../src/model/Address';
import User from '../../../src/model/User';
import signup from '../../../src/resolvers/mutation/signup';
import notifyOnProposal from '../../../src/resolvers/mutation/notifyOnProposal';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('notifyOnProposal mutation', () => {
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
	const address = 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F'; //Alice
	const network = 'kusama';
	let dbAddress;

	before(async () => {
		signupResult = await signup(null, { email, password, username, name }, fakectx);
		fakectx.req.headers.authorization = `Bearer ${signupResult.token}` // eslint-disable-line
		fakectx.req.headers['notify-api-secret'] = process.env.NOTIFY_API_SECRET;
		await User
			.query()
			.patch({ email_verified: true })
			.findById(signupResult.user.id);

		dbAddress = await Address
			.query()
			.allowInsert('[network, address, user_id, sign_message, verified]')
			.insert({
				network,
				address,
				user_id: signupResult.user.id,
				sign_message: uuid(),
				verified: true
			});
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();

		await Address
			.query()
			.where({ id: dbAddress.id })
			.del();
	});

	it('should be able to notify user on proposal create', async () => {
		const result = await notifyOnProposal(null, { proposerAddress: address, postId: 123 }, fakectx);

		expect(result.message).to.equal(messages.PROPOSAL_CREATED_MAIL_SENT_SUCCESSFULLY);
	});

	it('should be not able to notify user on proposal create if api secret is wrong', async () => {
		fakectx.req.headers['notify-api-secret'] = 'fake';

		try {
			await notifyOnProposal(null, { proposerAddress: address, postId: 123 }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
		}
	});
});
