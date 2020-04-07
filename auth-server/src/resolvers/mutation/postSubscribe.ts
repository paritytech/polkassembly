// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import PostSubscription from '../../model/PostSubscription';
import AuthService from '../../services/auth';
import { Context, MessageType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface ArgsType {
	post_id: number;
}

export default async (partent: any, { post_id }: ArgsType, ctx: Context): Promise<MessageType> => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	const dbSubscription = await PostSubscription
		.query()
		.where({
			user_id: user.id,
			post_id: post_id
		})
		.first();

	if (dbSubscription) {
		return { message: messages.SUBSCRIPTION_ALREADY_EXISTS };
	}

	await PostSubscription
		.query()
		.allowInsert('[user_id, post_id]')
		.insert({
			user_id: user.id,
			post_id
		});

	return { message: messages.SUBSCRIPTION_SUCCESSFUL };
};
