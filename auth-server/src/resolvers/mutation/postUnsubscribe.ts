// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import PostSubscription from '../../model/PostSubscription';
import AuthService from '../../services/auth';
import { Context, MessageType, PostUnsubscribeArgs } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

export default async (parent: void, { post_id }: PostUnsubscribeArgs, ctx: Context): Promise<MessageType> => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	const dbSubscription = await PostSubscription
		.query()
		.where({
			post_id: post_id,
			user_id: user.id
		})
		.first();

	if (!dbSubscription) {
		return { message: messages.SUBSCRIPTION_DOES_NOT_EXIST };
	}

	await PostSubscription
		.query()
		.where({
			post_id,
			user_id: user.id
		})
		.del();

	return { message: messages.SUBSCRIPTION_REMOVE_SUCCESSFUL };
};
