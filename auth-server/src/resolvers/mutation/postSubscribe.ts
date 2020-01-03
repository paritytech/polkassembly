import PostSubscription from '../../model/PostSubscription';
import AuthService from '../../services/auth';
import { Context  } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface argsType {
	post_id: number
}

export default async (parent, { post_id }: argsType, ctx: Context)  => {
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
