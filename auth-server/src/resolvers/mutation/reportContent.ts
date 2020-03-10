import { UserInputError } from 'apollo-server';

import ContentReport from '../../model/ContentReport';
import AuthService from '../../services/auth';
import { sendReportContentEmail } from '../../services/email';
import { Context, MessageType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface argsType {
	type: string
	content_id: number
	reason: string
	comments: string
}

export default async (parent, { type, content_id, reason, comments }: argsType, ctx: Context): Promise<MessageType>  => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	if (['post', 'comment'].includes(type) === false) {
		throw new UserInputError(messages.REPORT_TYPE_INVALID);
	}

	if (!reason) {
		throw new UserInputError(messages.REPORT_REASON_REQUIRED);
	}

	if (comments.length > 300) {
		throw new UserInputError(messages.REPORT_COMMENTS_LENGTH_EXCEDEED);
	}

	await ContentReport
		.query()
		.allowInsert('[type, content_id, user_id, reason, comments, resolved]')
		.insert({
			type,
			content_id,
			user_id: user.id,
			reason,
			comments,
			resolved: false
		});

	sendReportContentEmail(user.name, type, content_id, reason, comments);

	return { message: messages.CONTENT_REPORT_SUCCESSFUL };
};
