// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import PostSubscription from '../../model/PostSubscription';
import AuthService from '../../services/auth';
import { Context, Subscription, SubscriptionArgs } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';

export default async (parent: void, { post_id }: SubscriptionArgs, ctx: Context): Promise<Subscription> => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	const subscription = await PostSubscription
		.query()
		.where({
			post_id: post_id,
			user_id: user.id
		})
		.first();

	return { subscribed: !!subscription };
};
