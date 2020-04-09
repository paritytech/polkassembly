// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserInputError } from 'apollo-server';

import AuthService from '../../services/auth';
import { MessageType } from '../../types';
import messages from '../../utils/messages';

interface argsType {
	newPassword: string,
	token: string
	userId: number
}

export default async (parent, { token, userId, newPassword }: argsType): Promise<MessageType> => {

	if (newPassword.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR);
	}

	const authServiceInstance = new AuthService();
	await authServiceInstance.ResetPassword(token, userId, newPassword);

	return { message: messages.PASSWORD_RESET_SUCCESSFUL };
};
