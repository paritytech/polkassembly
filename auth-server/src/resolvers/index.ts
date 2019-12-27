import user from './query/user'
import users from './query/users'
import token from './query/token'
import profile from './query/profile'
import login from './mutation/login'
import logout from './mutation/logout'
import signup from './mutation/signup'
import changeUsername from './mutation/changeUsername'
import changeEmail from './mutation/changeEmail'
import changePassword from './mutation/changePassword'
import changeName from './mutation/changeName'
import requestResetPassword from './mutation/requestResetPassword'
import resetPassword from './mutation/resetPassword'
import verifyEmail from './mutation/verifyEmail'

export default {
	Query: {
		user,
		users,
		token,
		profile
	},
	Mutation: {
		login,
		logout,
		signup,
		changeUsername,
		changeEmail,
		changePassword,
		changeName,
		requestResetPassword,
		resetPassword,
		verifyEmail
	}
}
