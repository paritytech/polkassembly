import { UserInputError } from 'apollo-server';

import AuthService from '../../services/auth';
import { ChangeResponseType, Context } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';
import validateUsername from '../../utils/validateUsername';

interface argsType {
	username: string
}

export default async (parent, { username }: argsType, ctx: Context): Promise<ChangeResponseType> => {
	const token = getTokenFromReq(ctx.req);

	if (username.length < 3) {
		throw new UserInputError(messages.USERNAME_LENGTH_ERROR);
	}

	if (!validateUsername(username)) {
		throw new UserInputError(messages.USERNAME_INVALID_ERROR);
	}

	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.ChangeUsername(token, username);

	return { message: messages.USERNAME_CHANGE_SUCCESSFUL, token: updatedJWT };
};
