import AuthService from '../../services/auth'
import { Context } from '../../types'
import getTokenFromReq from '../../utils/getTokenFromReq'
import messages from '../../utils/messages'

interface argsType {
	post_id: number
}

export default async (parent, { post_id }: argsType, ctx: Context) => {
	const token = getTokenFromReq(ctx.req)

	const authServiceInstance = new AuthService()
    await authServiceInstance.GetUser(token)

	return { message: messages.USERNAME_CHANGE_SUCCESSFUL, token }
}