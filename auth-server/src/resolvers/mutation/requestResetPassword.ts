import { UserInputError } from 'apollo-server'

import AuthService from '../../services/auth'
import { MessageType } from '../../types'
import messages from '../../utils/messages'
import validateEmail from '../../utils/validateEmail'

interface argsType {
	email: string
}

export default async (parent, { email }: argsType): Promise<MessageType> => {
	const authServiceInstance = new AuthService()

	if (!validateEmail(email)) {
		throw new UserInputError(messages.INVALID_EMAIL)
	}

	await authServiceInstance.RequestResetPassword(email)
	return { message: messages.RESET_PASSWORD_RETURN_MESSAGE }
}
