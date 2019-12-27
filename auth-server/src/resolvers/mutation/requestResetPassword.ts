import { UserInputError } from 'apollo-server'

import AuthService from '../../services/auth'
import validateEmail from '../../utils/validateEmail'
import messages from '../../utils/messages'

export default async (_, args) => {
	const { email } : {email : string} = args
	const authServiceInstance = new AuthService()

	if (!validateEmail(email)) {
		throw new UserInputError(messages.INVALID_EMAIL)
	}

	await authServiceInstance.RequestResetPassword(email)
	return { message: messages.RESET_PASSWORD_RETURN_MESSAGE }
}
