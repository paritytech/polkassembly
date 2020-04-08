// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { Context, SignUpResultType } from '../../types';
import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie';

interface argsType {
	address: string
	signature: string
}

export default async (parent, { address, signature }: argsType, ctx: Context): Promise<SignUpResultType>  => {
	const authServiceInstance = new AuthService();

	const { user, token, refreshToken } = await authServiceInstance.AddressLogin(address, signature);
	setRefreshTokenCookie(ctx.res, refreshToken);

	return { user, token };
};
