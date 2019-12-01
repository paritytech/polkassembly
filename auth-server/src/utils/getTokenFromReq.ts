import { Request } from 'express'
import { AuthenticationError, ForbiddenError } from 'apollo-server'

/**
 * Get Token from request
 */
export default (req: Request): string => {
	// Authorization header is of format:
	// Authorization: Bearer $asdnkjadj32j23kj@#adslkads
	const authHeader = req.headers.authorization

	if (!authHeader) {
		throw new AuthenticationError('Authorization header missing')
	}

	const token = `${authHeader}`.split(' ')[1]

	if (!token) {
		throw new ForbiddenError('token missing')
	}

	return token
}