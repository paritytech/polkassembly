import AuthService from '../../services/auth'
import { Context } from '../../types'
import getTokenFromReq from '../../utils/getTokenFromReq'
import messages from '../../utils/messages'

export default async (_, __, ctx: Context) => {
	const token = getTokenFromReq(ctx.req)
	const refreshToken = ctx.req.cookies.refresh_token

	ctx.res.cookie('refresh_token', '', { maxAge: 0 })

	const authServiceInstance = new AuthService()
	await authServiceInstance.Logout(token, refreshToken)

	return { message: messages.LOGOUT_SUCCESSFUL }
}