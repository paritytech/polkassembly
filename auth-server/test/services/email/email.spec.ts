import 'mocha';
import { expect } from 'chai';

import rewiremock from 'rewiremock';
import EmailVerificationToken from '../../../src/model/EmailVerificationToken';
import PasswordResetToken from '../../../src/model/PasswordResetToken';
import User from '../../../src/model/User';

const noop = () => {};

describe('Email Service', () => {
	const email = 'test@email.com';
	const password = 'testpass';
	const username = 'testuser';
	const name = 'test name';
	const salt = 'testsalt';

	it('should send verification email', async () => {
		const user = await User
			.query()
			.allowInsert('[email, password, username, name]')
			.insert({
				email,
				password,
				salt,
				username,
				name
			})
			.returning('*');
		const token = await EmailVerificationToken
			.query()
			.allowInsert('[token, user_id, valid]')
			.insert({
				token: 'test-token',
				user_id: user.id,
				valid: true
			});

		let message: any;

		rewiremock('@sendgrid/mail').with({
			setApiKey: noop,
			send: (msg) => {
				message = msg;
				return Promise.resolve();
			}
		});
		rewiremock.enable();
		const { sendVerificationEmail } = require('../../../src/services/email');
		rewiremock.disable();

		sendVerificationEmail(user, token);

		expect(message.to).to.equals('test@email.com');
		expect(message.from).to.equals('noreply@polkassembly.io');
		expect(message.subject).to.equals('Verify your email address');
		expect(message.html).to.contains(`verify-email/${token.token}`);

		await User
			.query()
			.where({ id: user.id })
			.del();

		await EmailVerificationToken
			.query()
			.where({ id: token.id })
			.del();
	});

	it('should send password reset email', async () => {
		const user = await User
			.query()
			.allowInsert('[email, password, username, name]')
			.insert({
				email,
				password,
				salt,
				username,
				name
			})
			.returning('*');
		const token = await PasswordResetToken
			.query()
			.allowInsert('[token, user_id, valid, expires]')
			.insert({
				token: 'test-token',
				user_id: user.id,
				valid: true,
				expires: new Date().toISOString()
			});

		let message: any;

		rewiremock('@sendgrid/mail').with({
			setApiKey: noop,
			send: (msg) => {
				message = msg;
				return Promise.resolve();
			}
		});
		rewiremock.enable();
		const { sendResetPasswordEmail } = require('../../../src/services/email');
		rewiremock.disable();

		sendResetPasswordEmail(user, token);

		expect(message.to).to.equals('test@email.com');
		expect(message.from).to.equals('noreply@polkassembly.io');
		expect(message.subject).to.equals('Reset Your Password');
		expect(message.html).to.contains(`reset-password?token=${token.token}`);

		await User
			.query()
			.where({ id: user.id })
			.del();

		await PasswordResetToken
			.query()
			.where({ id: token.id })
			.del();
	});
});
