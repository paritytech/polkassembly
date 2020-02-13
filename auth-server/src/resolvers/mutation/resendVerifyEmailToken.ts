import AuthService from '../../services/auth';
import { MessageType, Context } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

export default async (parent, args, ctx: Context): Promise<MessageType> => {
	const token = getTokenFromReq(ctx.req);

	const authServiceInstance = new AuthService();
	await authServiceInstance.resendVerifyEmailToken(token);

	return { message: messages.RESEND_VERIFY_EMAIL_TOKEN_REQUEST_SUCCESSFUL };
};
