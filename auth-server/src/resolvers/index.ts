// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import addressLinkConfirm from './mutation/addressLinkConfirm';
import addressLinkStart from './mutation/addressLinkStart';
import addressLogin from './mutation/addressLogin';
import addressUnlink from './mutation/addressUnlink';
import changeUsername from './mutation/changeUsername';
import changeEmail from './mutation/changeEmail';
import changeNotificationPreference from './mutation/changeNotificationPreference';
import changePassword from './mutation/changePassword';
import changeName from './mutation/changeName';
import login from './mutation/login';
import logout from './mutation/logout';
import postSubscribe from './mutation/postSubscribe';
import postUnsubscribe from './mutation/postUnsubscribe';
import reportContent from './mutation/reportContent';
import requestResetPassword from './mutation/requestResetPassword';
import resendVerifyEmailToken from './mutation/resendVerifyEmailToken';
import resetPassword from './mutation/resetPassword';
import signup from './mutation/signup';
import undoEmailChange from './mutation/undoEmailChange';
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
		addressLogin,
		addressUnlink,
		login,
		logout,
		signup,
		changeUsername,
		changeEmail,
		changeNotificationPreference,
		changePassword,
		changeName,
		postSubscribe,
		postUnsubscribe,
		reportContent,
		requestResetPassword,
		resendVerifyEmailToken,
		resetPassword,
		undoEmailChange,
		verifyEmail
	}
};
