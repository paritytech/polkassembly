// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { ChangeResponseType, ChangeUsernameArgs, Context } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';
import validateUsername from '../../utils/validateUsername';

export default async (parent: void, { username }: ChangeUsernameArgs, ctx: Context): Promise<ChangeResponseType> => {
	const token = getTokenFromReq(ctx.req);

	validateUsername(username);

	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.ChangeUsername(token, username);

	return { message: messages.USERNAME_CHANGE_SUCCESSFUL, token: updatedJWT };
};
