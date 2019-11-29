import userQuery from './query/user'
import usersQuery from './query/users'
import loginMutation from './mutation/login'

export default {
	Query: {
		user: userQuery,
		users: usersQuery
	},
	Mutation: {
		login: loginMutation
	}
}
