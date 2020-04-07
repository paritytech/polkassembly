// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { Context, MessageType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

export default async (parent: any, args: any, ctx: Context): Promise<MessageType> => {
	const token = getTokenFromReq(ctx.req);
	const refreshToken = ctx.req.cookies.refresh_token;

	ctx.res.cookie('refresh_token', '', { maxAge: 0 });

	const authServiceInstance = new AuthService();
	await authServiceInstance.Logout(token, refreshToken);

	return { message: messages.LOGOUT_SUCCESSFUL };
};
