// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { MessageType, Context } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

export default async (parent, args, ctx: Context): Promise<MessageType> => {
	const token = getTokenFromReq(ctx.req);

	const authServiceInstance = new AuthService();
	await authServiceInstance.resendVerifyEmailToken(token);

	return { message: messages.RESEND_VERIFY_EMAIL_TOKEN_REQUEST_SUCCESSFUL };
};
