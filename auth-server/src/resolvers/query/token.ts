import AuthService from '../../services/auth'
import { Context, TokenType } from '../../types'

export default async (parent, args, ctx: Context): Promise<TokenType> => {
	const refreshToken = ctx.req.cookies.refresh_token

	if (!refreshToken) {
		throw new Error('Refresh token not found')
	}

	const authServiceInstance = new AuthService()
	const token = await authServiceInstance.RefreshToken(refreshToken)

	return { token }
}