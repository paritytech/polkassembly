// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { UserInputError } from 'apollo-server';

import AuthService from '../../services/auth';
import { AddressSignupConfirmArgs, Context, SignUpResultType } from '../../types';
import messages from '../../utils/messages';
import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie';
import validateEmail from '../../utils/validateEmail';
import validateName from '../../utils/validateName';
import validateUsername from '../../utils/validateUsername';

export default async (
	parent: void,
	{
		address,
		email,
		name,
		network,
		password,
		signature,
		username
	}: AddressSignupConfirmArgs,
	ctx: Context
): Promise<SignUpResultType> => {
	if (email && !validateEmail(email)) {
		throw new UserInputError(messages.INVALID_EMAIL);
	}

	validateUsername(username);
	validateName(name);

	if (password && password.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR);
	}

	const authServiceInstance = new AuthService();
	const { user, token, refreshToken } = await authServiceInstance.AddressSignupConfirm(network, address, signature, email, password, username, name);
	setRefreshTokenCookie(ctx.res, refreshToken);
	return { token, user };
};
