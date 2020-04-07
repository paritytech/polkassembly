// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserInputError } from 'apollo-server';

import ContentReport from '../../model/ContentReport';
import AuthService from '../../services/auth';
import { sendReportContentEmail } from '../../services/email';
import { Context, MessageType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface ArgumentsType {
	network: string;
	type: string;
	content_id: string;
	reason: string;
	comments: string;
}

export default async (parent: any, { network, type, content_id, reason, comments }: ArgumentsType, ctx: Context): Promise<MessageType> => {
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
		.allowInsert('[network, type, content_id, user_id, reason, comments, resolved]')
		.insert({
			comments,
			content_id,
			network,
			reason,
			resolved: false,
			type,
			user_id: user.id
		});

	sendReportContentEmail(user.name, network, type, content_id, reason, comments);

	return { message: messages.CONTENT_REPORT_SUCCESSFUL };
};
