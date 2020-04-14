// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { Context, LoginArgs, SignUpResultType } from '../../types';
import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie';

export default async (parent: void, { username, password }: LoginArgs, ctx: Context): Promise<SignUpResultType> => {
	const authServiceInstance = new AuthService();
	const { user, token, refreshToken } = await authServiceInstance.Login(username, password);
	setRefreshTokenCookie(ctx.res, refreshToken);

	return { token, user };
};
