import { ForbiddenError } from 'apollo-server';

import Address from '../../model/Address';
import User from '../../model/User';
import { sendProposalCreatedEmail } from '../../services/email';
import { Context, MessageType } from '../../types';
import messages from '../../utils/messages';

interface argsType {
	proposerAddress: string
	postId: number
}

export default async (parent, { proposerAddress, postId }: argsType, ctx: Context): Promise<MessageType>  => {
	const notifyApiSecret = ctx.req.headers['notify-api-secret'];

	if (notifyApiSecret !== process.env.NOTIFY_API_SECRET) {
		throw new ForbiddenError(messages.WRONG_API_SECRET);
	}

	const address = await Address
		.query()
		.where({
			address: proposerAddress
		})
		.first();

	if (!address) {
		return { message: messages.PROPOSER_ADDRESS_NOT_EXIST };
	}

	if (!address.verified) {
		return { message: messages.PROPOSER_ADDRESS_NOT_LINKED };
	}

	const user = await User
		.query()
		.findById(address.user_id);

	if (!user) {
		return { message: messages.PROPOSER_EMAIL_NOT_EXIST };
	}

	if (!user.email) {
		return { message: messages.PROPOSER_EMAIL_NOT_EXIST };
	}

	if (!user.email_verified) {
		return { message: messages.PROPOSER_EMAIL_NOT_VERIFIED };
	}

	sendProposalCreatedEmail(user, postId);

	return { message: messages.PROPOSAL_CREATED_MAIL_SENT_SUCCESSFULLY };
};
