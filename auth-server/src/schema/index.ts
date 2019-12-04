import { gql } from 'apollo-server-express'

import userType from './type/user'
import tokenType from './type/token'
import messageType from './type/message'
import loginResponseType from './type/loginResponse'
import userQuery from './query/user'
import usersQuery from './query/users'
import tokenQuery from './query/token'
import loginMutation from './mutation/login'
import logoutMutation from './mutation/logout'
import signupMutation from './mutation/signup'
import changeEmailMutation from './mutation/changeEmail'
import changePasswordMutation from './mutation/changePassword'
import changeNameMutation from './mutation/changeName'
import requestResetPassword from './mutation/requestResetPassword'
import resetPassword from './mutation/resetPassword'
import verifyEmail from './mutation/verifyEmail'

export default gql`
	${userType}
	${tokenType}
	${loginResponseType}
	${messageType}

	type Query {
		${userQuery}
		${usersQuery}
		${tokenQuery}
	}

	type Mutation {
		${loginMutation}
		${logoutMutation}
		${signupMutation}
		${changeEmailMutation}
		${changePasswordMutation}
		${changeNameMutation}
		${requestResetPassword}
		${resetPassword}
		${verifyEmail}
	}
`
