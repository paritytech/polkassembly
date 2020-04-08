// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { Context, TokenType } from '../../types';

export default async (parent: void, args: void, ctx: Context): Promise<TokenType> => {
	const refreshToken = ctx.req.cookies.refresh_token;

	if (!refreshToken) {
		throw new Error('Refresh token not found');
	}

	const authServiceInstance = new AuthService();
	const token = await authServiceInstance.RefreshToken(refreshToken);

	return { token };
};
