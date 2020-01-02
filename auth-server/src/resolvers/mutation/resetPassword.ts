import { UserInputError } from 'apollo-server'

import AuthService from '../../services/auth'
import { MessageType } from '../../types'
import messages from '../../utils/messages'

interface argsType {
	newPassword: string,
	token: string
}

export default async (parent, { token, newPassword }: argsType): Promise<MessageType> => {

	if (newPassword.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR)
	}

	const authServiceInstance = new AuthService()
	await authServiceInstance.ResetPassword(token, newPassword)

	return { message: messages.PASSWORD_RESET_SUCCESSFUL }
}