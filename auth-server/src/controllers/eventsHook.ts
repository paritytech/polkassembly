// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Request, Response } from 'express';

import Address from '../model/Address';
import Notification from '../model/Notification';
import PostSubscription from '../model/PostSubscription';
import User from '../model/User';
import { sendNewProposalCreatedEmail, sendOwnProposalCreatedEmail, sendPostSubscriptionMail } from '../services/email';
import { CommentCreationHookDataType, MessageType, OnchainLinkType, PostTypeEnum } from '../types';
import getPostCommentLink from '../utils/getPostCommentLink';
import getPostId from '../utils/getPostId';
import getPostLink from '../utils/getPostLink';
import getPostType from '../utils/getPostType';
import getUserFromUserId from '../utils/getUserFromUserId';
import messages from '../utils/messages';

const sendPostCommentSubscription = async (data: CommentCreationHookDataType): Promise<MessageType> => {
	const { post_id, author_id } = data;

	if (!post_id) {
		return { message: messages.EVENT_POST_ID_NOT_FOUND };
	}

	if (!author_id) {
		return { message: messages.EVENT_AUTHOR_ID_NOT_FOUND };
	}

	const subscriptions = await PostSubscription
		.query()
		.where({
			post_id: post_id
		});

	const author = await getUserFromUserId(author_id);

	if (!author) {
		return { message: messages.EVENT_AUTHOR_NOT_FOUND };
	}

	if (Array.isArray(subscriptions)) {
		subscriptions.forEach(subscription => {
			// users shouldn't be notified for their own comments
			if (subscription.user_id === author_id) {
				return;
			}

			getUserFromUserId(subscription.user_id)
				.then((user) => {
					const url = getPostCommentLink(PostTypeEnum.POST, data);
					sendPostSubscriptionMail(user, author, data, url);
				})
				.catch((error) => console.error(error));
		});
	}

	return { message: messages.EVENT_POST_SUBSCRIPTION_MAIL_SENT };
};

const sendOwnProposalCreated = async (onchainLink: OnchainLinkType): Promise<MessageType> => {
	const {
		proposer_address,
		post_id
	} = onchainLink;

	if (!proposer_address) {
		return { message: messages.EVENT_PROPOSER_ADDRESS_NOT_FOUND };
	}

	if (!post_id) {
		return { message: messages.EVENT_POST_ID_NOT_FOUND };
	}

	const address = await Address
		.query()
		.where({
			address: proposer_address
		})
		.first();

	if (!address) {
		return { message: messages.EVENT_ADDRESS_NOT_FOUND };
	}

	if (!address.verified) {
		return { message: messages.EVENT_ADDRESS_NOT_VERIFIED };
	}

	const user = await User
		.query()
		.findById(address.user_id);

	if (!user) {
		return { message: messages.EVENT_USER_NOT_FOUND };
	}

	if (!user.email) {
		return { message: messages.EVENT_USER_EMAIL_NOT_FOUND };
	}

	if (!user.email_verified) {
		return { message: messages.EVENT_USER_EMAIL_NOT_VERIFIED };
	}

	const notification = await Notification
		.query()
		.where({
			user_id: user.id
		})
		.first();

	if (!notification || !notification.own_proposal) {
		return { message: messages.EVENT_USER_NOTIFICATION_PREFERENCE_FALSE };
	}

	const type = getPostType(onchainLink);
	const id = getPostId(type, onchainLink);
	const url = getPostLink(type, id);

	sendOwnProposalCreatedEmail(user, type, url, id);

	return { message: messages.EVENT_PROPOSAL_CREATED_MAIL_SENT };
};

const sendNewProposalCreated = async (onchainLink: OnchainLinkType): Promise<MessageType> => {
	const {
		post_id
	} = onchainLink;

	if (!post_id) {
		return { message: messages.EVENT_POST_ID_NOT_FOUND };
	}

	const notifications = await Notification
		.query()
		.where({
			new_proposal: true
		});

	const promises = notifications.map(async notification => {
		const user = await User
			.query()
			.findById(notification.user_id);

		if (!user) {
			return { message: messages.EVENT_USER_NOT_FOUND };
		}

		if (!user.email) {
			return { message: messages.EVENT_USER_EMAIL_NOT_FOUND };
		}

		if (!user.email_verified) {
			return { message: messages.EVENT_USER_EMAIL_NOT_VERIFIED };
		}

		const type = getPostType(onchainLink);
		const id = getPostId(type, onchainLink);
		const url = getPostLink(type, id);

		sendNewProposalCreatedEmail(user, type, url, id);
	});

	await Promise.all(promises).catch(error => console.error(error));

	return { message: messages.NEW_PROPOSAL_CREATED_MAIL_SENT };
};

export const commentCreateHook = async (req: Request, res: Response): Promise<void> => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_event_secret) {
		res.status(403).json({ message: messages.UNAUTHORISED });
		return;
	}

	const comment = req.body?.event?.data?.new || {};

	const result = await sendPostCommentSubscription(comment);

	res.json(result);
};

export const onchainLinksCreateHook = async (req: Request, res: Response): Promise<void> => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_event_secret) {
		res.status(403).json({ message: messages.UNAUTHORISED });
		return;
	}

	const onchainLink = req.body?.event?.data?.new || {};

	const result = await sendOwnProposalCreated(onchainLink);

	if (result.message === messages.EVENT_PROPOSAL_CREATED_MAIL_SENT) {
		res.json(result);
		return;
	}
	// Doing this in background as several emails needs to be sent
	sendNewProposalCreated(onchainLink);

	res.json(result);
};
