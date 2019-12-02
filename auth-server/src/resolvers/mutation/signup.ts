import { UserInputError } from 'apollo-server'

import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie'
import AuthService from '../../services/auth'
import { Context } from '../../types'

export default async (_, args, ctx: Context) => {
	const { email, password, username, name } = args

	if (password.length < 6) {
		throw new UserInputError('Your password must be at least 6 characters long.')
	}

	const authServiceInstance = new AuthService()
	const { user, token, refreshToken } = await authServiceInstance.SignUp(email, password, username, name)
	setRefreshTokenCookie(ctx.res, refreshToken)
	return { user, token }
}