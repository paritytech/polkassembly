import { gql } from 'apollo-server-express';

import userType from './type/user';
import tokenType from './type/token';
import messageType from './type/message';
import changeResponseType from './type/changeResponse';
import loginResponseType from './type/loginResponse';
import subscriptionType from './type/subscription';
import userQuery from './query/user';
import usersQuery from './query/users';
import subscription from './query/subscription';
import tokenQuery from './query/token';
import loginMutation from './mutation/login';
import logoutMutation from './mutation/logout';
import signupMutation from './mutation/signup';
import changeUsernameMutation from './mutation/changeUsername';
import changeEmailMutation from './mutation/changeEmail';
import changePasswordMutation from './mutation/changePassword';
import changeNameMutation from './mutation/changeName';
import postSubscribe from './mutation/postSubscribe';
import postUnsubscribe from './mutation/postUnsubscribe';
import requestResetPassword from './mutation/requestResetPassword';
import resetPassword from './mutation/resetPassword';
import verifyEmail from './mutation/verifyEmail';

export default gql`
	${userType}
	${tokenType}
	${changeResponseType}
	${loginResponseType}
	${messageType}
	${subscriptionType}

	type Query {
		${userQuery}
		${usersQuery}
		${subscription}
		${tokenQuery}
	}

	type Mutation {
		${loginMutation}
		${logoutMutation}
		${signupMutation}
		${changeUsernameMutation}
		${changeEmailMutation}
		${changePasswordMutation}
		${changeNameMutation}
		${postSubscribe}
		${postUnsubscribe}
		${requestResetPassword}
		${resetPassword}
		${verifyEmail}
	}
`;
