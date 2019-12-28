import User from '../../model/User'

interface argsType {
	id: number
}
export default async ({ id }: argsType) => {
	const user = await User
		.query()
		.where('id', id)
		.first()

	if (!user) {
		return null
	}

	return {
		id: user.id,
		username: user.username,
		name: user.name
	}
}