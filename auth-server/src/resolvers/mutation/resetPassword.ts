// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserInputError } from 'apollo-server';

import AuthService from '../../services/auth';
import { MessageType, ResetPasswordArgs } from '../../types';
import messages from '../../utils/messages';

export default async (parent: void, { token, newPassword }: ResetPasswordArgs): Promise<MessageType> => {
	if (newPassword.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR);
	}

	const authServiceInstance = new AuthService();
	await authServiceInstance.ResetPassword(token, newPassword);

	return { message: messages.PASSWORD_RESET_SUCCESSFUL };
};
