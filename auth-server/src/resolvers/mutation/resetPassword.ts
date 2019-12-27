import { UserInputError } from 'apollo-server'

import AuthService from '../../services/auth'
import messages from '../../utils/messages'

export default async (_, args : {token: string, newPassword: string}) => {
	const { token, newPassword } = args

	if (newPassword.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR)
	}

	const authServiceInstance = new AuthService()
	await authServiceInstance.ResetPassword(token, newPassword)

	return { message: messages.PASSWORD_RESET_SUCCESSFUL }
}