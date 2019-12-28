import AuthService from '../../services/auth'
import { Context } from '../../types'
import messages from '../../utils/messages'
import getTokenFromReq from '../../utils/getTokenFromReq'

interface argsType {
	newName: string
}

export default async ({ newName }: argsType, ctx: Context) => {
	let token = getTokenFromReq(ctx.req)
	const authServiceInstance = new AuthService()
	token = await authServiceInstance.ChangeName(token, newName)

	return { message: messages.NAME_CHANGED_SUCCESSFULLY, token }
}