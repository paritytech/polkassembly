import { UserInputError } from 'apollo-server'

import validateEmail from '../../utils/validateEmail'
import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie'
import AuthService from '../../services/auth'
import { Context } from '../../types'
import messages from '../../utils/messages'

export default async (_, args, ctx: Context) => {
	const { email, password, username, name } = args

	if (!validateEmail(email)) {
		throw new UserInputError(messages.INVALID_EMAIL)
	}

	if (username.length < 3) {
		throw new UserInputError(messages.USERNAME_LENGTH_ERROR)
	}

	if (password.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR)
	}

	const authServiceInstance = new AuthService()
	const { user, token, refreshToken } = await authServiceInstance.SignUp(email, password, username, name)
	setRefreshTokenCookie(ctx.res, refreshToken)
	return { user, token }
}