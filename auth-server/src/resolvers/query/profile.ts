import AuthService from '../../services/auth'
import { Context } from '../../types'
import getTokenFromReq from '../../utils/getTokenFromReq'

export default async (_, args, ctx: Context) => {
	const token = getTokenFromReq(ctx.req)

	const authServiceInstance = new AuthService()
	return authServiceInstance.GetUserProfile(token)
}