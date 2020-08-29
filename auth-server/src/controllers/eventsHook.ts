// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Request, Response } from 'express';

import Address from '../model/Address';
import Notification from '../model/Notification';
import PostSubscription from '../model/PostSubscription';
import User from '../model/User';
import { sendCommentMentionMail, sendNewProposalCreatedEmail, sendOwnProposalCreatedEmail, sendPostSubscriptionMail } from '../services/email';
import { CommentCreationHookDataType, HookResponseMessageType, MessageType, OnchainLinkType, PostTypeEnum } from '../types';
import getPostCommentLink from '../utils/getPostCommentLink';
import getPostId from '../utils/getPostId';
import getPostLink from '../utils/getPostLink';
import getPostType from '../utils/getPostType';
import getPublicKey from '../utils/getPublicKey';
import getUserFromUserId from '../utils/getUserFromUserId';
import getUserFromUsername from '../utils/getUserFromUsername';
import messages from '../utils/messages';

const onlyUnique = (value: string, index: number, self: string[]): boolean => {
	return self.indexOf(value) === index;
};

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

	const mentions: string[] = data.content.split(' ').filter(w => w.startsWith('@'));

	mentions.filter(onlyUnique).forEach(mention => {
		const username = mention.substring(1);

		getUserFromUsername(username)
			.then((user) => {
				if (!user) {
					return;
				}

				const url = getPostCommentLink(PostTypeEnum.POST, data);
				sendCommentMentionMail(user, author, data, url);
			})
			.catch((error) => console.error(error));
	});

	return { message: messages.EVENT_POST_SUBSCRIPTION_MAIL_SENT };
};

const sendOwnProposalCreated = async (onchainLink: OnchainLinkType): Promise<HookResponseMessageType> => {
	const {
		proposer_address,
		post_id
	} = onchainLink;

	if (!proposer_address) {
		return { sendOwnProposalCreatedMessage: messages.EVENT_PROPOSER_ADDRESS_NOT_FOUND };
	}

	if (!post_id) {
		return { sendOwnProposalCreatedMessage: messages.EVENT_POST_ID_NOT_FOUND };
	}

	const address = await Address
		.query()
		.where({
			public_key: getPublicKey(proposer_address)
		})
		.first();

	if (!address) {
		return { sendOwnProposalCreatedMessage: messages.EVENT_ADDRESS_NOT_FOUND };
	}

	if (!address.verified) {
		return { sendOwnProposalCreatedMessage: messages.EVENT_ADDRESS_NOT_VERIFIED };
	}

	const user = await User
		.query()
		.findById(address.user_id);

	if (!user) {
		return { sendOwnProposalCreatedMessage: messages.EVENT_USER_NOT_FOUND };
	}

	if (!user.email) {
		return { sendOwnProposalCreatedMessage: messages.EVENT_USER_EMAIL_NOT_FOUND };
	}

	if (!user.email_verified) {
		return { sendOwnProposalCreatedMessage: messages.EVENT_USER_EMAIL_NOT_VERIFIED };
	}

	const notification = await Notification
		.query()
		.where({
			user_id: user.id
		})
		.first();

	if (!notification || !notification.own_proposal) {
		return { sendOwnProposalCreatedMessage: messages.EVENT_USER_NOTIFICATION_PREFERENCE_FALSE };
	}

	const type = getPostType(onchainLink);
	const id = getPostId(type, onchainLink);
	const url = getPostLink(type, id);

	sendOwnProposalCreatedEmail(user, type, url, id);

	return { sendOwnProposalCreatedMessage: messages.EVENT_PROPOSAL_CREATED_MAIL_SENT };
};

const sendNewProposalCreated = async (onchainLink: OnchainLinkType, responseMessage: HookResponseMessageType): Promise<HookResponseMessageType> => {
	const {
		post_id,
		proposer_address
	} = onchainLink;

	if (!post_id) {
		return { ...responseMessage, sendNewProposalCreatedMessage: messages.EVENT_POST_ID_NOT_FOUND };
	}

	if (!proposer_address) {
		return { ...responseMessage, sendNewProposalCreatedMessage: messages.EVENT_PROPOSER_ADDRESS_NOT_FOUND };
	}

	const notifications = await Notification
		.query()
		.where({
			new_proposal: true
		});

	const proposerAddress = await Address
		.query()
		.where({
			public_key: getPublicKey(proposer_address)
		})
		.first();

	const proposerUser = proposerAddress
		? await User
			.query()
			.findById(proposerAddress.user_id)
		: undefined;

	// cicle through all users that want to be notified about
	// new on chain event. This may include the proposer
	const promises = notifications.map(async notification => {
		const user = await User
			.query()
			.findById(notification.user_id);

		if (!user) {
			console.error('sendNewProposalCreated - Unexpected empty user in notifications table');
			return;
		}

		// if the user is the proposer and they have received
		// a "sendOwnProposalCreated" email already. Let's not spam them.
		if (user.id === proposerUser?.id && notification.own_proposal === true) {
			// aborting for this user in the promise
			// not logging anything to prevent spamming the logs
			return;
		}

		if (!user.email) {
			// aborting for this user in the promise
			// not logging anything to prevent spamming the logs
			return;
		}

		if (!user.email_verified) {
			// aborting for this user in the promise
			// not logging anything to prevent spamming the logs
			return;
		}

		const type = getPostType(onchainLink);
		const id = getPostId(type, onchainLink);
		const url = getPostLink(type, id);

		sendNewProposalCreatedEmail(user, type, url, id);
	});

	await Promise.all(promises).catch(error => console.error(error));

	return { ...responseMessage, sendNewProposalCreatedMessage: messages.NEW_PROPOSAL_CREATED_MAIL_SENT };
};

export const commentCreateHook = async (req: Request, res: Response): Promise<void> => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_event_secret) {
		console.error("comment create hook failed, secrets don't match");
		res.status(403).json({ message: messages.UNAUTHORISED });
		return;
	}

	const comment = req.body?.event?.data?.new || {};

	const result = await sendPostCommentSubscription(comment);

	res.json(result);
};

export const onchainLinksCreateHook = async (req: Request, res: Response): Promise<void> => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_event_secret) {
		console.error("onchainlink create hook failed, secrets don't match");
		res.status(403).json({ message: messages.UNAUTHORISED });
		return;
	}

	const onchainLink = req.body?.event?.data?.new || {};
	let response = await sendOwnProposalCreated(onchainLink);

	// Doing this in background as several emails need to be sent
	response = await sendNewProposalCreated(onchainLink, response);

	// this response goes to hasura
	if (response.sendNewProposalCreatedMessage !== messages.NEW_PROPOSAL_CREATED_MAIL_SENT) {
		res.status(400).json(response);
	} else {
		res.json(response);
	}
};
