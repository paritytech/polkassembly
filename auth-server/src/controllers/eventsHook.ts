import { Request, Response } from 'express';

import Address from '../model/Address';
import Notification from '../model/Notification';
import PostSubscription from '../model/PostSubscription';
import User from '../model/User';
import { sendPostSubscriptionMail, sendProposalCreatedEmail } from '../services/email';
import getUserFromUserId from '../utils/getUserFromUserId';
import messages from '../utils/messages';
import { MessageType } from '../types';

const sendPostCommentSubscriptionMail = async (comment): Promise<MessageType> => {
	const { post_id, author_id } = comment;

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
		subscriptions.forEach(async subscription => {
			// users shouldn't be notified for their own comments
			if (subscription.user_id === author_id) {
				return;
			}

			const user = await getUserFromUserId(subscription.user_id);

			sendPostSubscriptionMail(user, author, comment);
		});
	}

	return { message: messages.EVENT_POST_SUBSCRIPTION_MAIL_SENT };
};

const sendProposalCreatedMail = async (onchainLink): Promise<MessageType> => {
	const {
		proposer_address,
		post_id,
		onchain_motion_id,
		onchain_proposal_id,
		onchain_referendum_id
	} = onchainLink;

	if (!proposer_address) {
		return { message: messages.EVENT_PROPOSER_ADDRESS_NOT_FOUND } ;
	}

	if (!post_id) {
		return { message: messages.EVENT_POST_ID_NOT_FOUND } ;
	}

	const address = await Address
		.query()
		.where({
			address: proposer_address
		})
		.first();

	if (!address) {
		return { message: messages.EVENT_ADDRESS_NOT_FOUND } ;
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

	let link = '';

	if (onchain_motion_id === 0 || onchain_motion_id) {
		link = 'motion';
	}

	if (onchain_proposal_id === 0 || onchain_proposal_id) {
		link = 'proposal';
	}

	if (onchain_referendum_id === 0 || onchain_referendum_id) {
		link = 'referendum';
	}

	link += `/${post_id}`;

	sendProposalCreatedEmail(user, link);

	return { message: messages.EVENT_PROPOSAL_CREATED_MAIL_SENT };
};

export const commentCreateHook = async (req: Request, res: Response) => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_event_secret) {
		return res.status(403).json({ message: messages.UNAUTHORISED });
	}

	const comment = req.body?.event?.data?.new || {};

	const result = await sendPostCommentSubscriptionMail(comment);

	res.json(result);
};

export const onchainLinksCreateHook = async (req: Request, res: Response) => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_event_secret) {
		return res.status(403).json({ message: messages.UNAUTHORISED });
	}

	const onchainLink = req.body?.event?.data?.new || {};

	const result = await sendProposalCreatedMail(onchainLink);

	res.json(result);
};
