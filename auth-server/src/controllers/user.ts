import errorHandler from '../model/errors'
import AuthService from '../services/auth'

/**
 * POST /login
 * Sign in using username and password.
 */
export const postLogin = async (req, res) => {
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
		res.cookie(
			'refresh_token',
			refreshToken,
			{
				httpOnly: true,
				maxAge: 6 * 30 * 24 * 60 * 60 * 1000 // 6 months
			}
		)
		return res.status(200).json({ user, token }).end()
	} catch (err) {
		return errorHandler(err, res)
	}
}

/**
 * POST /logout
 * Logout user.
 */
export const postLogout = async (req, res) => {
	res.cookie('refresh_token', '', {
		maxAge: 0,
		overwrite: true
	})

	res.status(200).json({ message: 'successfully logged out' }).end()
}

/**
 * POST /signup
 * Create a new local account.
 */
export const postSignup = async (req, res) => {
	req.assert('email', 'Your email can\'t be empty.').notEmpty()
	req.assert('password', 'Your password must be at least 6 characters long.').len(6)
	req.assert('username', 'Your username can\'t be empty.').notEmpty()

	const errors = req.validationErrors()

	if (errors) {
		return res.status(400).json({ errors })
	}

	try {
		const { email, password, username, name } = req.body
		const authServiceInstance = new AuthService()
		const { user, token, refreshToken } = await authServiceInstance.SignUp(email, password, username, name)
		res.cookie(
			'refresh_token',
			refreshToken,
			{
				httpOnly: true,
				maxAge: 6 * 30 * 24 * 60 * 60 * 1000, // 6 months
				sameSite: 'strict'
			}
		)
		return res.status(200).json({ user, token }).end()
	} catch (err) {
		return errorHandler(err, res)
	}
}

/**
 * POST /token
 * Get access token from refresh token.
 */
export const postToken = async (req, res) => {
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
