import AuthService from '../../services/auth'

export default async (_, args) => {
	const { token } = args
	const authServiceInstance = new AuthService()
	await authServiceInstance.VerifyEmail(token)

	return { message: 'Thank you for verifying your account' }
}