// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { UserInputError } from 'apollo-server';
import uid from 'uid';

import AuthService from '../../services/auth';
import { AddressSignupConfirmArgs, Context, SignUpResultType } from '../../types';
import messages from '../../utils/messages';
import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie';
import validateEmail from '../../utils/validateEmail';

export default async (
	parent: void,
	{
		address,
		email,
		name,
		network,
		signature,
		username
	}: AddressSignupConfirmArgs,
	ctx: Context
): Promise<SignUpResultType> => {
	if (email && !validateEmail(email)) {
		throw new UserInputError(messages.INVALID_EMAIL);
	}

	username = username || uid(25);

	const authServiceInstance = new AuthService();
	const { user, token, refreshToken } = await authServiceInstance.AddressSignupConfirm(network, address, signature, email, username, name);
	setRefreshTokenCookie(ctx.res, refreshToken);
	return { token, user };
};
