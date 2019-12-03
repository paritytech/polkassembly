import { UserInputError } from 'apollo-server'

import getTokenFromReq from '../../utils/getTokenFromReq'
import AuthService from '../../services/auth'
import { Context } from '../../types'

export default async (_, args, ctx: Context) => {
	const token = getTokenFromReq(ctx.req)
	const { oldPassword, newPassword } = args

	if (newPassword.length < 6) {
		throw new UserInputError('Your password must be at least 6 characters long.')
	}

	const authServiceInstance = new AuthService()
	await authServiceInstance.ChangePassword(token, oldPassword, newPassword)

	return { message: 'Password succefully changed' }
}