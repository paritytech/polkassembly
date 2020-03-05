import { UserInputError } from 'apollo-server';

import AuthService from '../../services/auth';
import { ChangeResponseType, Context } from '../../types';
import messages from '../../utils/messages';
import getTokenFromReq from '../../utils/getTokenFromReq';
import validateName from '../../utils/validateName';

interface argsType {
	newName: string
}

export default async (parent, { newName }: argsType, ctx: Context): Promise<ChangeResponseType> => {
	const token = getTokenFromReq(ctx.req);
	
	validateName(newName);

	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.ChangeName(token, newName);

	return { message: messages.NAME_CHANGED_SUCCESSFULLY, token: updatedJWT };
};