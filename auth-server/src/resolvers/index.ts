// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import addressLinkConfirm from './mutation/addressLinkConfirm';
import addressLinkStart from './mutation/addressLinkStart';
import addressLogin from './mutation/addressLogin';
import addressLoginStart from './mutation/addressLoginStart';
import addressUnlink from './mutation/addressUnlink';
import changeEmail from './mutation/changeEmail';
import changeName from './mutation/changeName';
import changeNotificationPreference from './mutation/changeNotificationPreference';
import changePassword from './mutation/changePassword';
import changeUsername from './mutation/changeUsername';
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

/* eslint-disable sort-keys */
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
		addressLoginStart,
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
