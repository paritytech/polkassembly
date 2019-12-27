import User from '../../model/User'

export default async (_, args) => {
	const user = await User
		.query()
		.where('id', args.id)
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