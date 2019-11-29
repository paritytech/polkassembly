import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie'
import AuthService from '../../services/auth'
import { Context } from '../../types'

export default async (_, args, ctx: Context) => {
	const username = args.username
	const password = args.password
	const authServiceInstance = new AuthService()
	const { user, token, refreshToken } = await authServiceInstance.Login(username, password)
	setRefreshTokenCookie(ctx.res, refreshToken)

	return { user, token }
}