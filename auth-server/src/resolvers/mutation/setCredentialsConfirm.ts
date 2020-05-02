// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserInputError } from 'apollo-server';

import AuthService from '../../services/auth';
import { ChangeResponseType, SetCredentialsConfirmArgs } from '../../types';
import messages from '../../utils/messages';
import validateUsername from '../../utils/validateUsername';

export default async (parent: void, { address, password, signature, username }: SetCredentialsConfirmArgs): Promise<ChangeResponseType> => {
	const authServiceInstance = new AuthService();

	validateUsername(username);
	if (password.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR);
	}

	const updatedJWT = await authServiceInstance.SetCredentialsConfirm(address, password, signature, username);

	return { message: messages.CREDENTIALS_CHANGE_SUCCESSFUL, token: updatedJWT };
};
