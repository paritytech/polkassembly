// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { ChangeResponseType, VerifyEmailArgs } from '../../types';
import messages from '../../utils/messages';

export default async (parent: void, { token }: VerifyEmailArgs): Promise<ChangeResponseType> => {
	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.VerifyEmail(token);

	return { message: messages.EMAIL_VERIFICATION_SUCCESSFUL, token: updatedJWT };
};
