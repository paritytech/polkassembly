import 'mocha';
import { expect } from 'chai';
import { uuid } from 'uuidv4';

import User from '../../../src/model/User';
import Address from '../../../src/model/Address';
import addresses from '../../../src/resolvers/query/addresses';
import signup from '../../../src/resolvers/mutation/signup';
import { Context } from '../../../src/types';

describe('adresses query', () => {
	let signupResult;
	let dbAddresses = [];
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

		for (let i = 0; i < 3; i++) {
			dbAddresses.push(await Address
				.query()
				.allowInsert('[network, address, user_id, public_key, sign_message, verified]')
				.insert({
					network: 'kasuma',
					address: uuid(),
					user_id: signupResult.user.id,
					public_key: uuid(),
					sign_message: uuid(),
					verified: true
				})
				.returning('*')
			);
		}
	});

	after(async () => {
		await Address
			.query()
			.whereIn('id', dbAddresses.map(address => address.id))
			.del();

		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();
	});

	it('should return addresses for user', async () => {
		const result = await addresses(null, null, fakectx);
		result.forEach((address, i) => {
			expect(address.address).to.equals(dbAddresses[i].address);
			expect(address.public_key).to.equals(dbAddresses[i].public_key);
		});
	});

});
