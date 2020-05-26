// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { AuthenticationError, UserInputError, ForbiddenError } from 'apollo-server';
import { expect } from 'chai';
import 'mocha';

import UndoEmailChangeToken from '../../../src/model/UndoEmailChangeToken';
import User from '../../../src/model/User';
import changeEmail from '../../../src/resolvers/mutation/changeEmail';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';
import { getNewUserCtx } from '../../helpers';

describe('changeEmail mutation', () => {
	let signupUserId = -1;
	let fakectx: Context;
	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';
	const name = 'test name';

	before(async () => {
		const result = await getNewUserCtx(email, password, username, name);
		fakectx = result.ctx;
		signupUserId = result.userId;
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupUserId })
			.del();

		await UndoEmailChangeToken
			.query()
			.where( { user_id: signupUserId })
			.del();
	});

	it('should allow to change an email', async () => {
		const email = 'blabla@blou.de';

		await changeEmail(undefined, { email, password }, fakectx);

		const undoToken = await UndoEmailChangeToken
			.query()
			.where({ user_id: signupUserId, valid: true });

		expect(undoToken.length).to.eq(1);
		expect(undoToken[0].token).to.not.be.empty;
	});

	it('should not be able to change email with an invalid password', async () => {
		const password = 'wrong';
		const email = 'blaasdbla@blou.de';

		try {
			await changeEmail(undefined, { email, password }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.INCORRECT_PASSWORD);
		}
	});

	it('should not be able to change email with an invalid email', async () => {
		const email = 'wrong@email';

		try {
			await changeEmail(undefined, { email, password }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(UserInputError);
			expect(error.message).to.eq(messages.INVALID_EMAIL);
		}
	});

	it('should not be able to change email before 48 hours and undotoken valid', async () => {
		const email = 'blabla2@blou.de';

		try {
			await changeEmail(undefined, { email, password }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(ForbiddenError);
			expect(error.message).to.eq(messages.EMAIL_CHANGE_NOT_ALLOWED_YET);
		}
	});

	it('should be able to change email after 48 hours', async () => {
		const email = 'blabla2@blou.de';

		await UndoEmailChangeToken
			.query()
			.patch({
				created_at: new Date(Date.now() - 49 * 60 * 60 * 1000).toISOString() // now - 49 hours
			})
			.where( { user_id: signupUserId });

		const { message, token } = await changeEmail(undefined, { email, password }, fakectx);

		expect(token).to.exist;
		expect(message).to.equal(messages.EMAIL_CHANGE_REQUEST_SUCCESSFUL);
	});

	it('should not be able to change email with an invalid jwt', async () => {
		const email = 'blabla@blou.de';
		fakectx.req.headers.authorization = 'Bearer wrong';
		try {
			await changeEmail(undefined, { email, password }, fakectx);
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.INVALID_JWT);
		}
	});
});
