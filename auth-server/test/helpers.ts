// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import jwt from 'jsonwebtoken';

import { Context, ContextUserId } from '../src/types';
import signup from '../src/resolvers/mutation/signup';

export const getNewUserCtx = async (email: string, password: string, username: string, name: string): Promise<ContextUserId> => {
    const ctx: Context = {
		req: {
			cookies: {},
			headers: {}
		},
		res: {
			// shortcuting the cookie function, any cookie that is
			// set by the server, will be set in the header,
			// so that we can read it later on.
			cookie: function (name: string, value: any): void {
				this.header[name] = value;
			},
			header: { refresh_token: '' } as any
		}
	} as any;
    const result = await signup(undefined, { email, password, username, name }, ctx);
    const token: any = jwt.decode(result.token);
    const userId = Number(token.sub);

    ctx.req.headers.authorization = `Bearer ${result.token}`;

    return { ctx, userId };
}
