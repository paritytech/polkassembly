import { gql } from 'apollo-server-express'

import userType from './type/user'
import tokenType from './type/token'
import messageType from './type/message'
import loginResponseType from './type/loginResponse'
import userQuery from './query/user'
import usersQuery from './query/users'
import tokenQuery from './query/token'
import loginMutation from './mutation/login'
import signupMutation from './mutation/signup'
import changeEmailMutation from './mutation/changeEmail'
import changePasswordMutation from './mutation/changePassword'
import changeNameMutation from './mutation/changeName'

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
		${signupMutation}
		${changeEmailMutation}
		${changePasswordMutation}
		${changeNameMutation}
	}
`
