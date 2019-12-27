import User from '../../model/User'

export default async () => {
	const users = await User.query()

	return users ? users.map(user => ({
		id: user.id,
		username: user.username,
		name: user.name
	})) : []
}