import { Request, Response } from 'express';

import PostSubscription from '../model/PostSubscription';
import { sendPostSubscriptionMail } from '../services/email';
import getUserFromUserId from '../utils/getUserFromUserId';
import messages from '../utils/messages';

export const postCreateHook = async (req: Request, res: Response) => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_post_subscription_secret) {
		return res.status(403).json({ message: messages.UNAUTHORISED });
	}

	const post = req.body?.event?.data?.new || {};

	const { id, author_id } = post;

	if (!id || !author_id) {
		console.error('[postAuthorSubscriptionHook] author_id not found', JSON.stringify(req.body, null, 2));
		// sending success so that hasura don't retries
		// retry will not help here
		return res.json({ status: messages.SUCCESS });
	}

	const dbSubscription = await PostSubscription
		.query()
		.where({
			user_id: author_id,
			post_id: id
		})
		.first();

	if (dbSubscription) {
		return { message: messages.SUBSCRIPTION_ALREADY_EXISTS };
	}

	await PostSubscription
		.query()
		.allowInsert('[user_id, post_id]')
		.insert({
			user_id: author_id,
			post_id: id
		});

	res.json({ status: messages.SUCCESS });
};

export const commentCreateHook = async (req: Request, res: Response) => {
	if (process.env.HASURA_EVENT_SECRET !== req.headers.hasura_post_subscription_secret) {
		return res.status(403).json({ message: messages.UNAUTHORISED });
	}

	const comment = req.body?.event?.data?.new || {};

	const { post_id, author_id } = comment;

	if (!post_id) {
		return res.status(400).json({ message: messages.EVENT_POST_ID_NOT_FOUND });
	}

	const subscriptions = await PostSubscription
		.query()
		.where({
			post_id: post_id
		});

	const author = await getUserFromUserId(author_id);

	if (!author) {
		return res.status(404).json({ message: messages.EVENT_AUTHOR_NOT_FOUND });
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

	res.json({ status: messages.SUCCESS });
};
