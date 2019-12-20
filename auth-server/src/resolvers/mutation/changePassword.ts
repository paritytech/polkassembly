import { UserInputError } from 'apollo-server'

import getTokenFromReq from '../../utils/getTokenFromReq'
import AuthService from '../../services/auth'
import { Context } from '../../types'
import messages from '../../utils/messages'

export default async (_, args, ctx: Context) => {
	const token = getTokenFromReq(ctx.req)
	const { oldPassword, newPassword } = args

	if (newPassword.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR)
	}

	const authServiceInstance = new AuthService()
	await authServiceInstance.ChangePassword(token, oldPassword, newPassword)

	return { message: messages.PASSWORD_CHANGE_SUCCESSFUL }
}