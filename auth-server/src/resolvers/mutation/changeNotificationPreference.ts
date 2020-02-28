import getTokenFromReq from '../../utils/getTokenFromReq';
import AuthService from '../../services/auth';
import { Context, MessageType, NotificationPreferencesType } from '../../types';
import messages from '../../utils/messages';

export default async (parent, { postParticipated, postCreated, newProposal, ownProposal }: NotificationPreferencesType, ctx: Context): Promise<MessageType> => {
	const token = getTokenFromReq(ctx.req);

	const authServiceInstance = new AuthService();
	await authServiceInstance.ChangeNotificationPreference(
		token,
		{
			postParticipated,
			postCreated,
			newProposal,
			ownProposal
		}
	);

	return { message: messages.NOTIFICATION_PREFERENCE_CHANGE_SUCCESSFUL };
};
