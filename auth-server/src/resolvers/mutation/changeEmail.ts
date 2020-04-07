// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserInputError } from 'apollo-server';

import AuthService from '../../services/auth';
import { ChangeResponseType, Context } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';
import validateEmail from '../../utils/validateEmail';

interface ArgumentsType {
	email: string;
}

export default async (parent: any, { email }: ArgumentsType, ctx: Context): Promise<ChangeResponseType> => {
	const token = getTokenFromReq(ctx.req);

	if (!validateEmail(email)) {
		throw new UserInputError(messages.INVALID_EMAIL);
	}

	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.ChangeEmail(token, email);

	return { message: messages.EMAIL_CHANGE_REQUEST_SUCCESSFUL, token: updatedJWT };
};
