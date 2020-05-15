// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { AuthenticationError } from 'apollo-server';
import { expect } from 'chai';
import 'mocha';
import { uuid } from 'uuidv4';

import UndoEmailChangeToken from '../../../src/model/UndoEmailChangeToken';
import User from '../../../src/model/User';
import undoEmailChange from '../../../src/resolvers/mutation/undoEmailChange';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';
import { getNewUserCtx } from '../../helpers';

describe('undoEmailChange mutation', () => {
	let undoToken: any;
	let fakectx: Context;
	let signupUserId = 0;

	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';
	const name = 'test name';

	before(async () => {
		const result = await getNewUserCtx(email, password, username, name);
		fakectx = result.ctx;
		signupUserId = result.userId;

		undoToken = await UndoEmailChangeToken
			.query()
			.allowInsert('[token, user_id, email, valid]')
			.insert({
				token: uuid(),
				email,
				user_id: signupUserId,
				valid: true
			});
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupUserId })
			.del();

		await UndoEmailChangeToken
			.query()
			.where({ id: undoToken.id })
			.del();
	});

	it('should be able to undo email change with valid token', async () => {
		const res = await undoEmailChange(undefined, { token: undoToken?.token });

		const dbUser = await User
			.query()
			.where({ id: signupUserId })
			.first();

		expect(dbUser?.email).to.equal(undoToken?.email);
		expect(res.message).to.eq(messages.EMAIL_UNDO_SUCCESSFUL);
		expect(res.token).to.exist;
	});

	it('should throw an error if token is invalid', async () => {
		try {
			await undoEmailChange(undefined, { token: uuid() });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.EMAIL_UNDO_TOKEN_NOT_FOUND);
		}
	});
});
