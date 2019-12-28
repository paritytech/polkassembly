import AuthService from '../../services/auth'
import { Context } from '../../types'

export default async (ctx: Context) => {
	const refreshToken = ctx.req.cookies.refresh_token

	if (!refreshToken) {
		throw new Error('Refresh token not found')
	}

	const authServiceInstance = new AuthService()
	const token = await authServiceInstance.RefreshToken(refreshToken)

	return { token }
}