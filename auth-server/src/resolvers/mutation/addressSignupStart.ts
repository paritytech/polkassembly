// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { AddressArgs, ChallengeMessage } from '../../types';
import messages from '../../utils/messages';

export default async (parent: void, { address }: AddressArgs): Promise<ChallengeMessage> => {
	const authServiceInstance = new AuthService();

	return {
		message: messages.ADDRESS_SIGNUP_STARTED,
		signMessage: await authServiceInstance.AddressSignupStart(address)
	};
};
