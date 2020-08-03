// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { ChangePasswordArgs, Context, MessageType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';
import validatePassword from '../../utils/validatePassword';

export default async (parent: void, { oldPassword, newPassword }: ChangePasswordArgs, ctx: Context): Promise<MessageType> => {
	const token = getTokenFromReq(ctx.req);

	validatePassword(newPassword);

	const authServiceInstance = new AuthService();
	await authServiceInstance.ChangePassword(token, oldPassword, newPassword);

	return { message: messages.PASSWORD_CHANGE_SUCCESSFUL };
};
