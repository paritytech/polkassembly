import getTokenFromReq from '../../utils/getTokenFromReq'
import AuthService from '../../services/auth'
import { Context } from '../../types'

export default async (_, args, ctx: Context) => {
	const token = getTokenFromReq(ctx.req)
	const { oldPassword, newPassword } = args
	const authServiceInstance = new AuthService()
	await authServiceInstance.ChangePassword(token, oldPassword, newPassword)

	return { message: 'Password succefully changed' }
}