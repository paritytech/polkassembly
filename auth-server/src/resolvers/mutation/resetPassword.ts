// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { MessageType, ResetPasswordArgs } from '../../types';
import messages from '../../utils/messages';
import validatePassword from '../../utils/validatePassword';

export default async (parent: void, { token, userId, newPassword }: ResetPasswordArgs): Promise<MessageType> => {
	validatePassword(newPassword);

	const authServiceInstance = new AuthService();
	await authServiceInstance.ResetPassword(token, userId, newPassword);

	return { message: messages.PASSWORD_RESET_SUCCESSFUL };
};
