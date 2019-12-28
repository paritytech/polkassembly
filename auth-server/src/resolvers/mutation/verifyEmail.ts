import AuthService from '../../services/auth'
import messages from '../../utils/messages'

export default async (_, args) => {
	const { token } = args
	const authServiceInstance = new AuthService()
	await authServiceInstance.VerifyEmail(token)

	return { message: messages.EMAIL_VERIFICATION_SUCCESSFUL }
}