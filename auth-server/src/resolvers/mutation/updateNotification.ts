import getTokenFromReq from '../../utils/getTokenFromReq';
import AuthService from '../../services/auth';
import { Context, MessageType } from '../../types';
import messages from '../../utils/messages';

interface argsType {
    post_participated: boolean
    post_created: boolean
    new_proposal: boolean
    own_proposal: boolean
}

export default async (parent, { post_participated, post_created, new_proposal, own_proposal }: argsType, ctx: Context): Promise<MessageType> => {
	const token = getTokenFromReq(ctx.req);

	const authServiceInstance = new AuthService();
	await authServiceInstance.ChangeNotificationPrefrence(token, post_participated, post_created, new_proposal, own_proposal);

	return { message: messages.NOTIFICATION_PREFRENCE_CHANGE_SUCCESSFUL };
};
