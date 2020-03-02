import Notification from '../../model/Notification';
import AuthService from '../../services/auth';
import { Context, NotificationPreferencesType  } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';

export default async (parent, args, ctx: Context): Promise<NotificationPreferencesType> => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	const notification = await Notification
		.query()
		.where({
			user_id: user.id
		})
		.first();

	return {
		postParticipated: notification.post_participated,
		postCreated: notification.post_created,
		newProposal: notification.new_proposal,
		ownProposal: notification.own_proposal
	};
};
