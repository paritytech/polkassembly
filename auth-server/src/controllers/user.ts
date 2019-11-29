import errorHandler from '../model/errors'
import AuthService from '../services/auth'
import { Request, Response } from 'express'

/**
 * POST /logout
 * Sign out for current user.
 */
export const postLogout = async (req: Request, res: Response) => {
	res.cookie('refresh_token', '', { maxAge: 0 })

	res.status(200).json({ message: 'successfully logged out' }).end()
}

/**
 * GET /verify-email
 * Verify user email.
 */
export const getVerifyEmail = async (req: Request, res: Response) => {
	const token = req.query.token

	if (!token) {
		return res.status(400).json({ errors: 'token required' })
	}

	try {
		const authServiceInstance = new AuthService()
		await authServiceInstance.VerifyEmail(token)
		return res.status(200).end('<p>Thankyou for verifying your account</p>')
	} catch (err) {
		return errorHandler(err, res)
	}
}