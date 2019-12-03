import AuthService from '../../services/auth'
import { Context } from '../../types'

export default async (_, args, ctx: Context) => {
	const { email } = args
	const authServiceInstance = new AuthService()
	await authServiceInstance.RequestResetPassword(email)

	return { message: 'Reset Password link sent to your email.' }
}