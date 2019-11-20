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
		const { user, token } = await authServiceInstance.Login(username, password)
		return res.status(200).json({ user, token }).end()
	} catch (err) {
		return errorHandler(err, res)
	}
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
		const { user, token } = await authServiceInstance.SignUp(email, password, username, name)
		return res.json({ user, token }).status(200).end()
	} catch (err) {
		return errorHandler(err, res)
	}
}
