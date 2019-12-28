import AuthService from '../../services/auth'
import messages from '../../utils/messages'

interface argsType {
	token: string
}

export default async ({ token }: argsType) => {
	const authServiceInstance = new AuthService()
	await authServiceInstance.VerifyEmail(token)

	return { message: messages.EMAIL_VERIFICATION_SUCCESSFUL }
}