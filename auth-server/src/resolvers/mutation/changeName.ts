import AuthService from '../../services/auth'
import { Context } from '../../types'
import getTokenFromReq from '../../utils/getTokenFromReq'
import messages from '../../utils/messages'

export default async (_, args, ctx: Context) => {
	let token = getTokenFromReq(ctx.req)
	const { newName } = args
	const authServiceInstance = new AuthService()
	token = await authServiceInstance.ChangeName(token, newName)

	return { message: messages.NAME_CHANGED_SUCCESSFULLY, token }
}