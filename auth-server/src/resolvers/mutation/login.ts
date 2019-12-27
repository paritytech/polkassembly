import AuthService from '../../services/auth'
import { Context } from '../../types'
import setRefreshTokenCookie from '../../utils/setRefreshTokenCookie'

interface LoginArgsType{
	username: string,
	password: string
}

export default async (_, { username, password }:LoginArgsType, ctx: Context) => {
	const authServiceInstance = new AuthService()
	const { user, token, refreshToken } = await authServiceInstance.Login(username, password)
	setRefreshTokenCookie(ctx.res, refreshToken)

	return { user, token }
}