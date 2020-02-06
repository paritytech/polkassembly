import AuthService from '../../services/auth';
import { ChangeResponseType, Context } from '../../types';
import messages from '../../utils/messages';
import getTokenFromReq from '../../utils/getTokenFromReq';

interface argsType {
	newName: string
}

export default async (parent, { newName }: argsType, ctx: Context): Promise<ChangeResponseType> => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.ChangeName(token, newName);

	return { message: messages.NAME_CHANGED_SUCCESSFULLY, token: updatedJWT };
};