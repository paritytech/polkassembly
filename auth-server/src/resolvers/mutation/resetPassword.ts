import AuthService from '../../services/auth'
import { Context } from '../../types'

export default async (_, args, ctx: Context) => {
	const { token, newPassword } = args
	const authServiceInstance = new AuthService()
	await authServiceInstance.ResetPassword(token, newPassword)

	return { message: 'Password successfully reset.' }
}