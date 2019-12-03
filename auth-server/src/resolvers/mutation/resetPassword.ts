import AuthService from '../../services/auth'
import { UserInputError } from 'apollo-server'

export default async (_, args) => {
	const { token, newPassword } = args

	if (newPassword.length < 6) {
		throw new UserInputError('Your password must be at least 6 characters long.')
	}

	const authServiceInstance = new AuthService()
	await authServiceInstance.ResetPassword(token, newPassword)

	return { message: 'Password successfully reset.' }
}