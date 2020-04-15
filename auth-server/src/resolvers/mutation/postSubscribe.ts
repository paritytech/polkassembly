// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import PostSubscription from '../../model/PostSubscription';
import AuthService from '../../services/auth';
import { Context, MessageType, PostSubscribeArgs } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

export default async (parent: void, { post_id }: PostSubscribeArgs, ctx: Context): Promise<MessageType> => {
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

	if (dbSubscription) {
		return { message: messages.SUBSCRIPTION_ALREADY_EXISTS };
	}

	await PostSubscription
		.query()
		.allowInsert('[user_id, post_id]')
		.insert({
			post_id,
			user_id: user.id
		});

	return { message: messages.SUBSCRIPTION_SUCCESSFUL };
};
