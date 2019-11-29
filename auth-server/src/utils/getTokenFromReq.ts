import { Request } from 'express'

/**
 * Get Token from request
 */
export default (req: Request): string => {
	// Authorization header is of format:
	// Authorization: Bearer $asdnkjadj32j23kj@#adslkads
	const authHeader = req.headers.authorization

	if (!authHeader) {
		throw new Error('Authorization header missing')
	}

	const token = `${authHeader}`.split(' ')[1]

	if (!token) {
		throw new Error('token missing')
	}

	return token
}