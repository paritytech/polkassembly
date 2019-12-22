import getTokenFromReq from '../../utils/getTokenFromReq'
import AuthService from '../../services/auth'
import { Context } from '../../types'

export default async (_, args, ctx: Context) => {
	const token = getTokenFromReq(ctx.req)
	const { username } = args
	const authServiceInstance = new AuthService()
	await authServiceInstance.ChangeUsername(token, username)

	return { message: 'Username changed.' }
}