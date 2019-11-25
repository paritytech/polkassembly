import errorHandler from '../model/errors'
import AuthService from '../services/auth'
import { Request, Response } from 'express'

/**
 *
 * @param res http response
 * @param refreshToken refres token string
 */
const setRefreshTokenCookie = (res: Response, refreshToken: string) => {
	res.cookie(
		'refresh_token',
		refreshToken,
		{
			httpOnly: true,
			maxAge: 6 * 30 * 24 * 60 * 60 * 1000, // 6 months
			sameSite: 'strict'
		}
	)
}

/**
 * POST /login
 * Sign in using username and password.
 */
export const postLogin = async (req: Request, res: Response) => {
	req.assert('username', 'Username is not valid').notEmpty()
	req.assert('password', 'Password cannot be blank').notEmpty()

	const errors = req.validationErrors()

	if (errors) {
		return res.status(400).json({ errors })
	}

	const username = req.body.username
	const password = req.body.password
	try {
		const authServiceInstance = new AuthService()
		const { user, token, refreshToken } = await authServiceInstance.Login(username, password)
		setRefreshTokenCookie(res, refreshToken)
		return res.status(200).json({ user, token }).end()
	} catch (err) {
		return errorHandler(err, res)
	}
}

/**
 * POST /logout
 * Sign out for current user.
 */
export const postLogout = async (req: Request, res: Response) => {
	res.cookie('refresh_token', '', { maxAge: 0 })

	res.status(200).json({ message: 'successfully logged out' }).end()
}

/**
 * POST /change-password
 * Change password of user.
 */
export const postChangePassword = async (req: Request, res: Response) => {
	req.assert('userId', 'user id cannot be blank').notEmpty()
	req.assert('oldPassword', 'old password cannot be blank').notEmpty()
	req.assert('newPassword', 'new password cannot be blank').notEmpty()

	const errors = req.validationErrors()

	if (errors) {
		return res.status(400).json({ errors })
	}

	const { userId, oldPassword, newPassword } = req.body
	try {
		const authServiceInstance = new AuthService()
		await authServiceInstance.ChangePassword(userId, oldPassword, newPassword)
		return res.status(200).json({ message: 'Password succefully changed' }).end()
	} catch (err) {
		return errorHandler(err, res)
	}
}

/**
 * POST /signup
 * Create a new local account.
 */
export const postSignup = async (req: Request, res: Response) => {
	req.assert('email', 'Your email can\'t be empty.').notEmpty()
	req.assert('password', 'Your password must be at least 6 characters long.').len({ min: 6 })
	req.assert('username', 'Your username can\'t be empty.').notEmpty()

	const errors = req.validationErrors()

	if (errors) {
		return res.status(400).json({ errors })
	}

	try {
		const { email, password, username, name } = req.body
		const authServiceInstance = new AuthService()
		const { user, token, refreshToken } = await authServiceInstance.SignUp(email, password, username, name)
		setRefreshTokenCookie(res, refreshToken)
		return res.status(200).json({ user, token }).end()
	} catch (err) {
		return errorHandler(err, res)
	}
}

/**
 * POST /token
 * Get access token from refresh token.
 */
export const postToken = async (req: Request, res: Response) => {
	const refreshToken = req.cookies.refresh_token

	if (!refreshToken) {
		return res.status(400).json({ errors: 'Refresh token not found'})
	}

	try {
		const authServiceInstance = new AuthService()
		const token = await authServiceInstance.RefreshToken(refreshToken)
		return res.status(200).json({ token }).end()
	} catch (err) {
		return errorHandler(err, res)
	}
}
