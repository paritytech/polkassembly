// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as sgMail from '@sendgrid/mail';
import * as ejs from 'ejs';

import User from '../model/User';
import EmailVerificationToken from '../model/EmailVerificationToken';
import UndoEmailChangeToken from '../model/UndoEmailChangeToken';
import PasswordResetToken from '../model/PasswordResetToken';
import {
	newProposalCreatedEmailTemplate,
	ownProposalCreatedEmailTemplate,
	postSubscriptionMailTemplate,
	reportContentEmailTemplate,
	resetPasswordEmailTemplate,
	undoEmailChangeEmailTemplate,
	verificationEmailTemplate
} from '../utils/emailTemplates';

const apiKey = process.env.SENDGRID_API_KEY;
const FROM = 'noreply@polkassembly.io';
const REPORT = 'polkassembly@parity.io';
const DOMAIN = process.env.DOMAIN_NAME && process.env.DOMAIN_PROTOCOL ? `${process.env.DOMAIN_PROTOCOL}${process.env.DOMAIN_NAME}` : 'https://test.polkassembly.io';

if (apiKey) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export const sendVerificationEmail = (user: User, token: EmailVerificationToken) => {
	if (!apiKey) {
		console.warn('Verification Email not sent due to missing API key');
		return;
	}

	const verifyUrl = `${DOMAIN}/verify-email/${token.token}`;
	const text = ejs.render(verificationEmailTemplate, { username: user.name || '', verifyUrl });
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
	const text = ejs.render(resetPasswordEmailTemplate, { username: user.name || '', resetUrl });

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

	const text = ejs.render(postSubscriptionMailTemplate, {
		username: user.name || '',
		authorUsername: author.username,
		domain: DOMAIN,
		postId: comment.post_id,
		content: comment.content
	});

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

export const sendUndoEmailChangeEmail = (user: User, undoToken: UndoEmailChangeToken) => {
	if (!apiKey) {
		console.warn('Email undo token email not sent due to missing API key');
		return;
	}

	const undoUrl = `${DOMAIN}/undo-email-change/${undoToken.token}`;
	const text = ejs.render(undoEmailChangeEmailTemplate, {
		username: user.name || '',
		userEmail: user.email,
		undoEmail: undoToken.email,
		undoUrl
	});
	const msg = {
		to: undoToken.email,
		from: FROM,
		subject: 'Your Polkassembly email was changed',
		text,
		html: text
	};

	sgMail.send(msg).catch(e =>
		console.error('Email undo email not sent', e));
};

export const sendOwnProposalCreatedEmail = (user: User, type: string, postId: number) => {
	if (!apiKey) {
		console.warn('Own Proposal Created Email not sent due to missing API key');
		return;
	}

	const postUrl = `${DOMAIN}/${type}/${postId}`;
	const text = ejs.render(ownProposalCreatedEmailTemplate, {
		domain: DOMAIN,
		postUrl,
		username: user.name || ''
	});
	const msg = {
		to: user.email,
		from: FROM,
		subject: 'You have submitted a motion/proposal on chain',
		text,
		html: text
	};

	sgMail.send(msg).catch(e =>
		console.error('Proposal Created Email not sent', e));
};

export const sendNewProposalCreatedEmail = (user: User, type: string, postId: number) => {
	if (!apiKey) {
		console.warn('New Proposal Created Email not sent due to missing API key');
		return;
	}

	const postUrl = `${DOMAIN}/${type}/${postId}`;
	const text = ejs.render(newProposalCreatedEmailTemplate, {
		domain: DOMAIN,
		postUrl,
		type,
		username: user.name || ''
	});

	const msg = {
		to: user.email,
		from: FROM,
		subject: `New ${type} created on chain`,
		text,
		html: text
	};

	sgMail.send(msg).catch(e =>
		console.error('Proposal Created Email not sent', e));
};

export const sendReportContentEmail = (username: string, network: string, type: string, contentId: string, reason: string, comments: string) => {
	if (!apiKey) {
		console.warn('Report Content Email not sent due to missing API key');
		return;
	}

	const text = ejs.render(reportContentEmailTemplate, {
		comments,
		contentId,
		network,
		reason,
		type,
		username
	});
	const msg = {
		to: REPORT,
		from: FROM,
		subject: 'Content reported',
		text,
		html: text
	};

	sgMail.send(msg).catch(e =>
		console.error('Report Content Email not sent', e));
};
