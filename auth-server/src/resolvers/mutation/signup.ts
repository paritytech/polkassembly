// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserInputError } from 'apollo-server';

import AuthService from '../../services/auth';
import { Context, SignUpResultType } from '../../types';
import messages from '../../utils/messages';
import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie';
import validateEmail from '../../utils/validateEmail';
import validateName from '../../utils/validateName';
import validateUsername from '../../utils/validateUsername';

interface ArgumentsType {
	email: string;
	name: string;
	password: string;
	username: string;
}

export default async (parent: any, { email, password, username, name }: ArgumentsType, ctx: Context): Promise<SignUpResultType> => {
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
	return { token, user };
};
