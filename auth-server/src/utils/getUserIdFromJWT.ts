// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AuthenticationError, ForbiddenError } from 'apollo-server';
import * as jwt from 'jsonwebtoken';

import { JWTPayploadType } from '../types';
import messages from './messages';

/**
 * Get User id from JWT
 */
export default (token: string, publicKey: string | undefined): number => {
	if (!publicKey) {
		const key = process.env.NODE_ENV === 'test' ? 'JWT_PUBLIC_KEY_TEST' : 'JWT_PUBLIC_KEY';
		throw new ForbiddenError(`${key} not set. Aborting.`);
	}

	// verify a token asymmetric - synchronous
	let decoded: JWTPayploadType;
	try {
		decoded = jwt.verify(token, publicKey) as JWTPayploadType;
	} catch (e) {
		throw new AuthenticationError(messages.INVALID_JWT);
	}

	if (!decoded.sub) {
		throw new AuthenticationError(messages.INVALID_USER_ID_IN_JWT);
	}

	return Number(decoded.sub);
};
