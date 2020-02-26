import Notification from '../../model/Notification';
import AuthService from '../../services/auth';
import { Context  } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';

export default async (parent, args, ctx: Context): Promise<Notification> => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	const notification = await Notification
		.query()
		.where({
			user_id: user.id
		})
		.first();

	return notification;
};
