// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import sgMail from '@sendgrid/mail';
import ejs from 'ejs';
import MarkdownIt from 'markdown-it';

import UndoEmailChangeToken from '../model/UndoEmailChangeToken';
import User from '../model/User';
import { CommentCreationHookDataType, PostType } from '../types';
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

export const sendVerificationEmail = (user: User, token: string): void => {
	if (!apiKey) {
		console.warn('Verification Email not sent due to missing API key');
		return;
	}

	const verifyUrl = `${DOMAIN}/verify-email/${token}`;
	const text = ejs.render(verificationEmailTemplate, { username: user.username || '', verifyUrl });
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

	const resetUrl = `${DOMAIN}/reset-password?token=${token}&userId=${user.id}`;
	const text = ejs.render(resetPasswordEmailTemplate, { resetUrl, username: user.username || '' });

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

export const sendPostSubscriptionMail = (user: User, author: User, comment: CommentCreationHookDataType, postUrl: string): void => {
	if (!apiKey) {
		console.warn('Post Subscription Email not sent due to missing API key');
		return;
	}

	if (!user.email_verified) {
		return;
	}

	const md = new MarkdownIt();
	const text = ejs.render(postSubscriptionMailTemplate, {
		authorUsername: author.username,
		content: md.render(comment.content),
		domain: DOMAIN,
		postUrl,
		username: user.username || ''
	});

	const msg = {
		from: FROM,
		html: text,
		subject: `Update on post #${comment.post_id} you are subscribed to`,
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
		username: user.username || ''
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

export const sendOwnProposalCreatedEmail = (user: User, type: PostType, url: string, id: number): void => {
	if (!apiKey) {
		console.warn('Own proposal created email not sent due to missing API key');
		return;
	}

	if (!user.email_verified) {
		return;
	}

	const text = ejs.render(ownProposalCreatedEmailTemplate, {
		domain: DOMAIN,
		postUrl: url,
		type,
		username: user.username || ''
	});
	const msg = {
		from: FROM,
		html: text,
		subject: `You have submitted a new ${type} #${id} on chain`,
		text,
		to: user.email
	};

	sgMail.send(msg).catch(e =>
		console.error('Proposal created email not sent', e));
};

export const sendNewProposalCreatedEmail = (user: User, type: PostType, url: string, id: number): void => {
	if (!apiKey) {
		console.warn('New proposal created email not sent due to missing API key');
		return;
	}

	if (!user.email_verified) {
		return;
	}

	const text = ejs.render(newProposalCreatedEmailTemplate, {
		domain: DOMAIN,
		postUrl: url,
		type,
		username: user.username || ''
	});

	const msg = {
		from: FROM,
		html: text,
		subject: `New ${type} #${id} created on chain`,
		text,
		to: user.email
	};

	sgMail.send(msg).catch(e =>
		console.error('Proposal created email not sent', e));
};

export const sendReportContentEmail = (username: string, network: string, reportType: string, contentId: string, reason: string, comments: string): void => {
	if (!apiKey) {
		console.warn('Report Content Email not sent due to missing API key');
		return;
	}

	const text = ejs.render(reportContentEmailTemplate, {
		comments,
		contentId,
		network,
		reason,
		reportType,
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
