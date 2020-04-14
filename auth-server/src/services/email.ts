// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import sgMail from '@sendgrid/mail';
import ejs from 'ejs';

import EmailVerificationToken from '../model/EmailVerificationToken';
import UndoEmailChangeToken from '../model/UndoEmailChangeToken';
import User from '../model/User';
import { CommentType } from '../types';
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
	sgMail.setApiKey(apiKey);
}

export const sendVerificationEmail = (user: User, token: EmailVerificationToken): void => {
	if (!apiKey) {
		console.warn('Verification Email not sent due to missing API key');
		return;
	}

	const verifyUrl = `${DOMAIN}/verify-email/${token.token}`;
	const text = ejs.render(verificationEmailTemplate, { username: user.name || '', verifyUrl });
	const msg = {
		from: FROM,
		html: text,
		subject: 'Verify your email address',
		text,
		to: user.email
	};

	sgMail.send(msg).catch(e =>
		console.error('Verification Email not sent', e));
};

export const sendResetPasswordEmail = (user: User, token: string): void => {
	if (!apiKey) {
		console.warn('Password reset Email not sent due to missing API key');
		return;
	}

	const resetUrl = `${DOMAIN}/reset-password/${token}?user_id=${user.id}`;
	const text = ejs.render(resetPasswordEmailTemplate, { resetUrl, username: user.name || '' });

	const msg = {
		from: FROM,
		html: text,
		subject: 'Reset Your Password',
		text,
		to: user.email
	};

	sgMail.send(msg).catch(e =>
		console.error('Password reset email not sent', e));
};

export const sendPostSubscriptionMail = (user: User, author: User, comment: CommentType): void => {
	if (!apiKey) {
		console.warn('There is a new comment on the post you are subscribed to');
		return;
	}

	if (!user.email_verified) {
		return;
	}

	const text = ejs.render(postSubscriptionMailTemplate, {
		authorUsername: author.username,
		content: comment.content,
		domain: DOMAIN,
		postId: comment.post_id,
		username: user.name || ''
	});

	const msg = {
		from: FROM,
		html: text,
		subject: 'Update on post you are subscribed to',
		text,
		to: user.email
	};

	sgMail.send(msg).catch(e =>
		console.error('Post subscription email not sent', e));
};

export const sendUndoEmailChangeEmail = (user: User, undoToken: UndoEmailChangeToken): void => {
	if (!apiKey) {
		console.warn('Email undo token email not sent due to missing API key');
		return;
	}

	const undoUrl = `${DOMAIN}/undo-email-change/${undoToken.token}`;
	const text = ejs.render(undoEmailChangeEmailTemplate, {
		undoEmail: undoToken.email,
		undoUrl,
		userEmail: user.email,
		username: user.name || ''
	});
	const msg = {
		from: FROM,
		html: text,
		subject: 'Your Polkassembly email was changed',
		text,
		to: undoToken.email
	};

	sgMail.send(msg).catch(e =>
		console.error('Email undo email not sent', e));
};

export const sendOwnProposalCreatedEmail = (user: User, type: string, postId: number): void => {
	if (!apiKey) {
		console.warn('Own Proposal Created Email not sent due to missing API key');
		return;
	}

	if (!user.email_verified) {
		return;
	}

	const postUrl = `${DOMAIN}/${type}/${postId}`;
	const text = ejs.render(ownProposalCreatedEmailTemplate, {
		domain: DOMAIN,
		postUrl,
		username: user.name || ''
	});
	const msg = {
		from: FROM,
		html: text,
		subject: 'You have submitted a motion/proposal on chain',
		text,
		to: user.email
	};

	sgMail.send(msg).catch(e =>
		console.error('Proposal Created Email not sent', e));
};

export const sendNewProposalCreatedEmail = (user: User, type: string, postId: number): void => {
	if (!apiKey) {
		console.warn('New Proposal Created Email not sent due to missing API key');
		return;
	}

	if (!user.email_verified) {
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
		from: FROM,
		html: text,
		subject: `New ${type} created on chain`,
		text,
		to: user.email
	};

	sgMail.send(msg).catch(e =>
		console.error('Proposal Created Email not sent', e));
};

export const sendReportContentEmail = (username: string, network: string, type: string, contentId: string, reason: string, comments: string): void => {
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
		from: FROM,
		html: text,
		subject: 'Content reported',
		text,
		to: REPORT
	};

	sgMail.send(msg).catch(e =>
		console.error('Report Content Email not sent', e));
};
