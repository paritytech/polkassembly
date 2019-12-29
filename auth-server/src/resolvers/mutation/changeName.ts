import AuthService from '../../services/auth'
import { Context } from '../../types'
import messages from '../../utils/messages'
import getTokenFromReq from '../../utils/getTokenFromReq'

interface argsType {
	newName: string
}

export default async (parent, { newName }: argsType, ctx: Context) => {
	const token = getTokenFromReq(ctx.req)
	const authServiceInstance = new AuthService()
	await authServiceInstance.ChangeName(token, newName)

	return { message: messages.NAME_CHANGED_SUCCESSFULLY }
}