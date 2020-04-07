// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserInputError } from 'apollo-server';

import AuthService from '../../services/auth';
import { Context, MessageType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface ArgumentsType {
	newPassword: string;
	oldPassword: string;
}

export default async (parent: any, { oldPassword, newPassword }: ArgumentsType, ctx: Context): Promise<MessageType> => {
	const token = getTokenFromReq(ctx.req);

	if (newPassword.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR);
	}

	const authServiceInstance = new AuthService();
	await authServiceInstance.ChangePassword(token, oldPassword, newPassword);

	return { message: messages.PASSWORD_CHANGE_SUCCESSFUL };
};
