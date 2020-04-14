// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Response } from 'express';

/**
 * setRefrestTokenCookie
 * @param res http response
 * @param refreshToken refres token string
 */
export default (res: Response, refreshToken: string): void => {
	res.cookie(
		'refresh_token',
		refreshToken,
		{
			httpOnly: true,
			maxAge: 6 * 30 * 24 * 60 * 60 * 1000, // 6 months
			sameSite: 'strict'
		}
	);
};
