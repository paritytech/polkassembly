import { AuthenticationError } from 'apollo-server';
import { expect } from 'chai';
import 'mocha';
import { uuid } from 'uuidv4';

import UndoEmailChangeToken from '../../../src/model/UndoEmailChangeToken';
import User from '../../../src/model/User';
import signup from '../../../src/resolvers/mutation/signup';
import undoEmailChange from '../../../src/resolvers/mutation/undoEmailChange';
import { Context } from '../../../src/types';
import messages from '../../../src/utils/messages';

describe('undoEmailChange mutation', () => {
	let signupResult;
	let undoToken;
	let fakectx: Context = {
		req: {},
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

		undoToken = await UndoEmailChangeToken
			.query()
			.allowInsert('[token, user_id, email, valid]')
			.insert({
				token: uuid(),
				email,
				user_id: signupResult.user.id,
				valid: true
			});
	});

	after(async () => {
		await User
			.query()
			.where({ id: signupResult.user.id })
			.del();

		await UndoEmailChangeToken
			.query()
			.where({ id: undoToken.id })
			.del();
	});

	it('should be able to undo email change with valid token', async () => {
		const res = await undoEmailChange(null, { token: undoToken.token });

		const dbUser = await User
			.query()
			.where({ id: signupResult.user.id })
			.first();

		expect(dbUser.email).to.equal(undoToken.email);
		expect(res.message).to.eq(messages.EMAIL_UNDO_SUCCESSFUL);
		expect(res.token).to.exist;
	});

	it('should throw an error if token is invalid', async () => {
		try {
			await undoEmailChange(null, { token: uuid() });
		} catch (error) {
			expect(error).to.exist;
			expect(error).to.be.an.instanceof(AuthenticationError);
			expect(error.message).to.eq(messages.EMAIL_UNDO_TOKEN_NOT_FOUND);
		}
	});
});
