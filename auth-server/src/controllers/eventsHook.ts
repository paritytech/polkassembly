import { Request, Response } from 'express';

import Address from '../model/Address';
import Notification from '../model/Notification';
import PostSubscription from '../model/PostSubscription';
import User from '../model/User';
import { sendPostSubscriptionMail, sendOwnProposalCreatedEmail, sendNewProposalCreatedEmail } from '../services/email';
import getUserFromUserId from '../utils/getUserFromUserId';
import messages from '../utils/messages';
import { MessageType } from '../types';

const sendPostCommentSubscription = async (comment): Promise<MessageType> => {
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

const sendOwnProposalCreated = async (onchainLink): Promise<MessageType> => {
	const {
		proposer_address,
		post_id,
		onchain_motion_id,
		onchain_proposal_id,
		onchain_referendum_id,
		onchain_treasury_proposal_id
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

	if (onchain_treasury_proposal_id === 0 || onchain_treasury_proposal_id) {
		link = 'treasury';
	}

	link += `/${post_id}`;

	sendOwnProposalCreatedEmail(user, link);

	return { message: messages.EVENT_PROPOSAL_CREATED_MAIL_SENT };
};

const sendNewProposalCreated = async (onchainLink) => {
	const {
		post_id,
		onchain_motion_id,
		onchain_proposal_id,
		onchain_referendum_id,
		onchain_treasury_proposal_id
	} = onchainLink;

	if (!post_id) {
		return { message: messages.EVENT_POST_ID_NOT_FOUND } ;
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

		let type = '';

		if (onchain_motion_id === 0 || onchain_motion_id) {
			type = 'motion';
		}

		if (onchain_proposal_id === 0 || onchain_proposal_id) {
			type = 'proposal';
		}

		if (onchain_referendum_id === 0 || onchain_referendum_id) {
			type = 'referendum';
		}

		if (onchain_treasury_proposal_id === 0 || onchain_treasury_proposal_id) {
			type = 'treasury';
		}

		sendNewProposalCreatedEmail(user, type, post_id);
	});

	Promise.all(promises).catch(error => console.error(error));
};

export const commentCreateHook = async (req: Request, res: Response) => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_event_secret) {
		return res.status(403).json({ message: messages.UNAUTHORISED });
	}

	const comment = req.body?.event?.data?.new || {};

	const result = await sendPostCommentSubscription(comment);

	res.json(result);
};

export const onchainLinksCreateHook = async (req: Request, res: Response) => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_event_secret) {
		return res.status(403).json({ message: messages.UNAUTHORISED });
	}

	const onchainLink = req.body?.event?.data?.new || {};

	const result = await sendOwnProposalCreated(onchainLink);

	// Doing this in background as several emails needs to be sent
	sendNewProposalCreated(onchainLink);

	res.json(result);
};
