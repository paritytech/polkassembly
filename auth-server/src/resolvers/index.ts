import addressLinkConfirm from './mutation/addressLinkConfirm';
import addressLinkStart from './mutation/addressLinkStart';
import addressUnlink from './mutation/addressUnlink';
import changeUsername from './mutation/changeUsername';
import changeEmail from './mutation/changeEmail';
import changePassword from './mutation/changePassword';
import changeName from './mutation/changeName';
import login from './mutation/login';
import logout from './mutation/logout';
import postSubscribe from './mutation/postSubscribe';
import postUnsubscribe from './mutation/postUnsubscribe';
import requestResetPassword from './mutation/requestResetPassword';
import resendVerifyEmailToken from './mutation/resendVerifyEmailToken';
import resetPassword from './mutation/resetPassword';
import signup from './mutation/signup';
import undoEmailChange from './mutation/undoEmailChange';
import updateNotification from './mutation/updateNotification';
import verifyEmail from './mutation/verifyEmail';
import subscription from './query/subscription';
import token from './query/token';
import user from './query/user';
import users from './query/users';

export default {
	Query: {
		subscription,
		token,
		user,
		users
	},
	Mutation: {
		addressLinkConfirm,
		addressLinkStart,
		addressUnlink,
		login,
		logout,
		signup,
		changeUsername,
		changeEmail,
		changePassword,
		changeName,
		postSubscribe,
		postUnsubscribe,
		requestResetPassword,
		resendVerifyEmailToken,
		resetPassword,
		undoEmailChange,
		updateNotification,
		verifyEmail
	}
};
