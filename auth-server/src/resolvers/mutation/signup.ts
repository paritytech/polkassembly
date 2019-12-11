import { UserInputError } from 'apollo-server'

import validateEmail from '../../utils/validateEmail'
import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie'
import AuthService from '../../services/auth'
import { Context } from '../../types'

export default async (_, args, ctx: Context) => {
	const { email, password, username, name } = args

	if (!validateEmail(email)) {
		throw new UserInputError('Please enter a valid email.')
	}

	if (username.length < 3) {
		throw new UserInputError('Your Username must be at least 3 characters long.')
	}

	if (password.length < 6) {
		throw new UserInputError('Your password must be at least 6 characters long.')
	}

	const authServiceInstance = new AuthService()
	const { user, token, refreshToken } = await authServiceInstance.SignUp(email, password, username, name)
	setRefreshTokenCookie(ctx.res, refreshToken)
	return { user, token }
}