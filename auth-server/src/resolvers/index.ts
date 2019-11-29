import user from './query/user'
import users from './query/users'
import token from './query/token'
import login from './mutation/login'
import signup from './mutation/signup'
import changeEmail from './mutation/changeEmail'
import changePassword from './mutation/changePassword'
import changeName from './mutation/changeName'

export default {
	Query: {
		user,
		users,
		token
	},
	Mutation: {
		login,
		signup,
		changeEmail,
		changePassword,
		changeName
	}
}
