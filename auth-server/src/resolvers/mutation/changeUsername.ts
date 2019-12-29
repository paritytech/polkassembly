import AuthService from '../../services/auth'
import { Context } from '../../types'
import getTokenFromReq from '../../utils/getTokenFromReq'
import messages from '../../utils/messages'

interface argsType {
	username: string
}

export default async (parent, { username }: argsType, ctx: Context) => {
	let token = getTokenFromReq(ctx.req)

	const authServiceInstance = new AuthService()
	token = await authServiceInstance.ChangeUsername(token, username)

	return { message: messages.USERNAME_CHANGE_SUCCESSFUL, token }
}