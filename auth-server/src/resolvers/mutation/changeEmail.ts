// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserInputError } from 'apollo-server';

import AuthService from '../../services/auth';
import { ChangeEmailArgs, ChangeResponseType, Context } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';
import validateEmail from '../../utils/validateEmail';

export default async (parent: void, { email, password }: ChangeEmailArgs, ctx: Context): Promise<ChangeResponseType> => {
	const token = getTokenFromReq(ctx.req);

	if (email !== '' && !validateEmail(email)) {
		throw new UserInputError(messages.INVALID_EMAIL);
	}

	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.ChangeEmail(token, email, password);

	return { message: email ? messages.EMAIL_CHANGE_REQUEST_SUCCESSFUL : messages.EMAIL_REMOVE_SUCCESSFUL, token: updatedJWT };
};
