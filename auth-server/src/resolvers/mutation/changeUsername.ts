// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { ChangeResponseType, Context } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';
import validateUsername from '../../utils/validateUsername';

interface argsType {
	username: string
}

export default async (parent, { username }: argsType, ctx: Context): Promise<ChangeResponseType> => {
	const token = getTokenFromReq(ctx.req);

	validateUsername(username);

	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.ChangeUsername(token, username);

	return { message: messages.USERNAME_CHANGE_SUCCESSFUL, token: updatedJWT };
};
