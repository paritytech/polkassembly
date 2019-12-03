import AuthService from '../../services/auth'

export default async (_, args) => {
	const { email } = args
	const authServiceInstance = new AuthService()
	await authServiceInstance.RequestResetPassword(email)

	return { message: 'Reset Password link sent to your email.' }
}