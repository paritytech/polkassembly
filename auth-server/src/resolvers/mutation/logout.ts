import { Context } from '../../types'

export default async (_, args, ctx: Context) => {
	ctx.res.cookie('refresh_token', '', { maxAge: 0 })

	return { message: 'successfully logged out' }
}