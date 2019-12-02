import errorHandler from '../model/errors'
import AuthService from '../services/auth'
import { Request, Response } from 'express'

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
		// TODO: change to res.redirect('/email-verify route from frontend')
		return res.status(200).end('<p>Thank you for verifying your account</p>')
	} catch (err) {
		return errorHandler(err, res)
	}
}