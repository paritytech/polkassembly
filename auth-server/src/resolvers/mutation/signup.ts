import { UserInputError } from 'apollo-server';

import validateEmail from '../../utils/validateEmail';
import validateUsername from '../../utils/validateUsername';
import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie';
import AuthService from '../../services/auth';
import { Context, SignUpResultType } from '../../types';
import messages from '../../utils/messages';

interface argsType {
	email: string,
	name: string,
	password: string,
	username: string
}

export default async (parent, { email, password, username, name }: argsType, ctx: Context): Promise<SignUpResultType> => {

	if (email && !validateEmail(email)) {
		throw new UserInputError(messages.INVALID_EMAIL);
	}

	if (username.length < 3) {
		throw new UserInputError(messages.USERNAME_LENGTH_ERROR);
	}

	if (!validateUsername(username)) {
		throw new UserInputError(messages.USERNAME_INVALID_ERROR);
	}

	if (password.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR);
	}

	if (name && name.length > 255) {
		throw new UserInputError(messages.NAME_LENGTH_ERROR);
	}

	const authServiceInstance = new AuthService();
	const { user, token, refreshToken } = await authServiceInstance.SignUp(email, password, username, name);
	setRefreshTokenCookie(ctx.res, refreshToken);
	return { user, token };
};
