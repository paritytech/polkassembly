import { Request, Response } from 'express'

import PostSubscription from '../model/PostSubscription'
import { sendPostSubscriptionMail } from '../services/email'
import getUserFromUserId from '../utils/getUserFromUserId'
import messages from '../utils/messages'

export default async (req: Request, res: Response) => {
	if (process.env.HASURA_POST_SUBSCRIPTION_SECRET !== req.headers.hasura_post_subscription_secret) {
		return res.status(403).json({ message: messages.UNAUTHORISED })
	}

	const comment = req.body?.event?.data?.new || {}

	const { post_id, author_id } = comment

	if (!post_id) {
		return res.status(400).json({ message: messages.EVENT_POST_ID_NOT_FOUND })
	}

	const subscriptions = await PostSubscription
		.query()
		.where({
			post_id: post_id
		})

	const author = await getUserFromUserId(author_id)

	if (!author) {
		return res.status(404).json({ message: messages.EVENT_AUTHOR_NOT_FOUND })
	}

	if (Array.isArray(subscriptions)) {
		subscriptions.forEach(async subscription => {
			if (subscription.user_id === author_id) {
				return
			}

			const user = await getUserFromUserId(subscription.user_id)

			sendPostSubscriptionMail(user, author, comment)
		})
	}

	res.json({ status: messages.SUCCESS })
}

