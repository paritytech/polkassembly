import AuthService from '../../services/auth'

export default async (_, args) => {
	const { email } = args
	const authServiceInstance = new AuthService()
	await authServiceInstance.RequestResetPassword(email)

	return { message: 'The reset password link was sent to this email, if it exists in our database.' }
}
