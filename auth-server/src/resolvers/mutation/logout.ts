import { Context } from '../../types'
import AuthService from '../../services/auth'

export default async (_, args, ctx: Context) => {
	const token = ctx.req.cookies.refresh_token
	ctx.res.cookie('refresh_token', '', { maxAge: 0 })

	const authServiceInstance = new AuthService()
	await authServiceInstance.Logout(token)

	return { message: 'successfully logged out' }
}