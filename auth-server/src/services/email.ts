import * as sgMail from '@sendgrid/mail';

import User from '../model/User';
import EmailVerificationToken from '../model/EmailVerificationToken';
import EmailUndoToken from '../model/EmailUndoToken';

import PasswordResetToken from '../model/PasswordResetToken';

const apiKey = process.env.SENDGRID_API_KEY;
const FROM = 'noreply@polkassembly.io';
const DOMAIN = 'http://polkassembly.io';

if (apiKey) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export const sendVerificationEmail = (user: User, token: EmailVerificationToken) => {
	if (!apiKey) {
		console.warn('Verification Email not sent due to missing API key');
		return;
	}

	const verifyUrl = `${DOMAIN}/verify-email/${token.token}`;
	const text = `
		<p>
			Welcome aboard ${user.name || ''}!<br/><br/>

			For security purposes, please confirm your email address here - <a target="_blank" href=${verifyUrl}>verify your account</a><br/><br/>

			See you soon,<br/><br/>
			Polkassembly Team
		</p>
	`;

	const msg = {
		to: user.email,
		from: FROM,
		subject: 'Verify your email address',
		text,
		html: text
	};

	sgMail.send(msg).catch(e =>
		console.error('Verification Email not sent', e));
};

export const sendResetPasswordEmail = (user: User, token: PasswordResetToken) => {
	if (!apiKey) {
		console.warn('Password reset Email not sent due to missing API key');
		return;
	}

	const resetUrl = `${DOMAIN}/reset-password/${token.token}`;
	const text = `
		<p>
			Hi ${user.name || ''}!<br/><br/>

			It looks like you need to reset your password.<br />
			Your secret is safe with us, and this will be a breeze.<br /><br />

			Go ahead and follow the link to reset your password:<br /><br />
			<a href="${resetUrl}">Reset Your Password</a><br /><br />

			Just a heads up, to make sure your information is safe and secure, the link will expire after 24 hours.<br /><br />

			If you didn't request a password change, then just ignore this message.<br /><br />

			Polkassembly Team
		</p>
	`;

	const msg = {
		to: user.email,
		from: FROM,
		subject: 'Reset Your Password',
		text,
		html: text
	};

	sgMail.send(msg).catch(e =>
		console.error('Password reset email not sent', e));
};

export const sendPostSubscriptionMail = (user: User, author: User, comment) => {
	if (!apiKey) {
		console.warn('There is a new comment on the post you are subscribed to');
		return;
	}

	const text = `
		<p>
			Hi ${user.name || ''}!<br/><br/>

			<br />
			${author.username} has commented on a <a href="${DOMAIN}/post/${comment.post_id}">post you subscribed to</a>.<br /><br />

			comment: ${comment.content}<br />

			Polkassembly Team
		</p>
	`;

	const msg = {
		to: user.email,
		from: FROM,
		subject: 'Update on post you are subscribed to',
		text,
		html: text
	};

	sgMail.send(msg).catch(e =>
		console.error('Post subscription email not sent', e));
};

export const sendEmailUndoEmail = (user: User, undoToken: EmailUndoToken) => {
	if (!apiKey) {
		console.warn('Email undo token email not sent due to missing API key');
		return;
	}

	const undoUrl = `${DOMAIN}/undo-email/${undoToken.token}`;
	const text = `
		<p>
			Hi ${user.name || ''}!<br/><br/>

			It looks like someone has changed your email at polkassembly.<br />
			If its you then its ok.<br /><br />

			If its not you then here is a recovery email link. Use it to change your account email back to this email:<br /><br />
			<a href="${undoUrl}">Recover Your Email</a><br /><br />

			Just a heads up, to make sure your information is safe and secure, the link will expire after 24 hours.<br /><br />

			If you did change your email, then just ignore this message.<br /><br />

			Polkassembly Team
		</p>
	`;

	const msg = {
		to: undoToken.email,
		from: FROM,
		subject: 'Your Email was changed at polkassembly',
		text,
		html: text
	};

	sgMail.send(msg).catch(e =>
		console.error('Email undo email not sent', e));
};
