import { gql } from 'apollo-server-express'

import userType from './type/user'
import loginResponseType from './type/loginResponse'
import userQuery from './query/user'
import usersQuery from './query/users'
import loginMutation from './mutation/login'

export default gql`
	${userType}
	${loginResponseType}

	type Query {
		${userQuery}
		${usersQuery}
	}

	type Mutation {
		${loginMutation}
	}
`
