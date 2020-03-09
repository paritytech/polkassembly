// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import PostSubscription from '../../model/PostSubscription';
import AuthService from '../../services/auth';
import { Context, Subscription  } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';

interface argsType {
	post_id: number
}

export default async (parent, { post_id }: argsType, ctx: Context): Promise<Subscription> => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	const subscription = await PostSubscription
		.query()
		.where({
			user_id: user.id,
			post_id: post_id
		})
		.first();

	return { subscribed: !!subscription };
};
