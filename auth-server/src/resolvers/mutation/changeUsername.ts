import getTokenFromReq from '../../utils/getTokenFromReq'
import AuthService from '../../services/auth'
import { Context } from '../../types'
import messages from '../../utils/messages'

export default async (_, args, ctx: Context) => {
	let token = getTokenFromReq(ctx.req)
	const { username } = args
	const authServiceInstance = new AuthService()
	token = await authServiceInstance.ChangeUsername(token, username)

	return { message: messages.USERNAME_CHANGE_SUCCESSFUL, token }
}