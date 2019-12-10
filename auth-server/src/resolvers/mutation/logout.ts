import { Context } from '../../types'
import AuthService from '../../services/auth'
import getTokenFromReq from '../../utils/getTokenFromReq'

export default async (_, args, ctx: Context) => {
	const token = getTokenFromReq(ctx.req)
	const refreshToken = ctx.req.cookies.refresh_token

	ctx.res.cookie('refresh_token', '', { maxAge: 0 })

	const authServiceInstance = new AuthService()
	await authServiceInstance.Logout(token, refreshToken)

	return { message: 'successfully logged out' }
}