// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { AddressSignupConfirmArgs, Context, SignUpResultType } from '../../types';
import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie';

export default async (parent: void, { address, network, signature }: AddressSignupConfirmArgs, ctx: Context): Promise<SignUpResultType> => {
	const authServiceInstance = new AuthService();
	const { user, token, refreshToken } = await authServiceInstance.AddressSignupConfirm(network, address, signature);
	setRefreshTokenCookie(ctx.res, refreshToken);
	return { token, user };
};
