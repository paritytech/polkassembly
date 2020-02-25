import { Request, Response } from 'express';

import Address from '../model/Address';
import PostSubscription from '../model/PostSubscription';
import User from '../model/User';
import { sendPostSubscriptionMail, sendProposalCreatedEmail } from '../services/email';
import getUserFromUserId from '../utils/getUserFromUserId';
import messages from '../utils/messages';

const sendSubscriptionMail = async (comment) => {
	const { post_id, author_id } = comment;

	if (!post_id) {
		return;
	}

	const subscriptions = await PostSubscription
		.query()
		.where({
			post_id: post_id
		});

	const author = await getUserFromUserId(author_id);

	if (!author) {
		return;
	}

	if (Array.isArray(subscriptions)) {
		subscriptions.forEach(async subscription => {
			if (subscription.user_id === author_id) {
				return;
			}

			const user = await getUserFromUserId(subscription.user_id);

			sendPostSubscriptionMail(user, author, comment);
		});
	}
};

const sendProposalCreatedMail = async (onchainLink) => {
	const {
		proposer_address,
		post_id,
		onchain_motion_id,
		onchain_proposal_id,
		onchain_referendum_id
	} = onchainLink;

	if (!proposer_address || !post_id) {
		return;
	}

	const address = await Address
		.query()
		.where({
			address: proposer_address
		})
		.first();

	if (!address) {
		return;
	}

	if (!address.verified) {
		return;
	}

	const user = await User
		.query()
		.findById(address.user_id);

	if (!user) {
		return;
	}

	if (!user.email) {
		return;
	}

	if (!user.email_verified) {
		return;
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
};

export const commentCreateHook = async (req: Request, res: Response) => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_event_secret) {
		return res.status(403).json({ message: messages.UNAUTHORISED });
	}

	const comment = req.body?.event?.data?.new || {};

	await sendSubscriptionMail(comment);

	res.json({ status: messages.SUCCESS });
};

export const onchainLinksCreateHook = async (req: Request, res: Response) => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_event_secret) {
		return res.status(403).json({ message: messages.UNAUTHORISED });
	}

	const onchainLink = req.body?.event?.data?.new || {};

	await sendProposalCreatedMail(onchainLink);

	res.json({ status: messages.SUCCESS });
};
