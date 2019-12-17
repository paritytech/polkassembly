import * as jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server'

import messages from './messages'

/**
 * Get User id from JWT
 */
export default async (token: string, publicKey: string) => {
	// verify a token asymmetric - synchronous
	const decoded = jwt.verify(token, publicKey)

	if (isNaN(decoded.sub)) {
		throw new AuthenticationError(messages.INVALID_USER_ID_IN_JWT)
	}

	return parseInt(decoded.sub)
}