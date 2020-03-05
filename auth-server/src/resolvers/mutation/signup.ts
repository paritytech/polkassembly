import { UserInputError } from 'apollo-server';

import validateEmail from '../../utils/validateEmail';
import validateName from '../../utils/validateName';
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

	validateUsername(username);
	validateName(name);

	if (password.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR);
	}

	const authServiceInstance = new AuthService();
	const { user, token, refreshToken } = await authServiceInstance.SignUp(email, password, username, name);
	setRefreshTokenCookie(ctx.res, refreshToken);
	return { user, token };
};
