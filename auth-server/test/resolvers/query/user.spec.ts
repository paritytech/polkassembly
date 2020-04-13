// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import 'mocha';
import { expect } from 'chai';
import user from '../../../src/resolvers/query/user';
import User from '../../../src/model/User';

describe('user query', () => {
	let dbUser: User;
	const email = 'test@email.com';
	const password = 'testpass';
	const salt = 'testsalt';
	const username = 'testuser';
	const name = 'test name';
	const email_verified = false;

	before(async () => {
		dbUser = await User
			.query()
			.allowInsert('[email, password, username, name]')
			.insert({
				email,
				password,
				salt,
				username,
				name,
				email_verified
			})
			.returning('*');
	});

	after(async () => {
		await User
			.query()
			.where({ id: dbUser.id })
			.del();
	});

	it('should return user with id', async () => {
		const id = dbUser.id;
		const result = await user(undefined, { id });
		expect(result?.id).to.equal(id);
		expect(result?.username).to.equal(username);
		expect(result?.name).to.equal(name);
	});
});
