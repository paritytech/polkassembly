import * as jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';

import messages from './messages';
import { JWTPayploadType } from '../types';

/**
 * Get User id from JWT
 */
export default async (token: string, publicKey: string) => {
	// verify a token asymmetric - synchronous
	let decoded: JWTPayploadType;
	try {
		decoded = jwt.verify(token, publicKey);
	} catch (e){
		throw new AuthenticationError(messages.INVALID_JWT);
	}

	if (!decoded.sub) {
		throw new AuthenticationError(messages.INVALID_USER_ID_IN_JWT);
	}

	return Number(decoded.sub);
};