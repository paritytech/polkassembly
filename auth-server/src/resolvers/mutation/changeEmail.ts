import getTokenFromReq from '../../utils/getTokenFromReq'
import AuthService from '../../services/auth'
import { Context } from '../../types'

export default async (_, args, ctx: Context) => {
	const token = getTokenFromReq(ctx.req)
	const { email } = args
	const authServiceInstance = new AuthService()
	await authServiceInstance.ChangeEmail(token, email)

	return { message: 'Email changed. Verification request sent to your email address.' }
}