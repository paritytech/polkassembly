// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserInputError } from 'apollo-server';

import AuthService from '../../services/auth';
import { MessageType, RequestResetPasswordArgs } from '../../types';
import messages from '../../utils/messages';
import validateEmail from '../../utils/validateEmail';

export default async (parent: void, { email }: RequestResetPasswordArgs): Promise<MessageType> => {
	const authServiceInstance = new AuthService();

	if (!validateEmail(email)) {
		throw new UserInputError(messages.INVALID_EMAIL);
	}

	await authServiceInstance.RequestResetPassword(email);
	return { message: messages.RESET_PASSWORD_RETURN_MESSAGE };
};
