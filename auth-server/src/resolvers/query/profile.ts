// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AuthenticationError } from 'apollo-server';

import User from '../../model/User';
import { ProfileArgs, PublicUser } from '../../types';
import getNetworkUserAddressInfoFromUserId from '../../utils/getNetworkUserAddressInfoFromUserId';
import messages from '../../utils/messages';

export default async (parent: void, { username }: ProfileArgs): Promise<PublicUser | null> => {
	const user = await User
		.query()
		.where('username', username)
		.first();

	if (!user) {
		throw new AuthenticationError(messages.USER_NOT_FOUND);
	}

	const networkUserAddressInfo = await getNetworkUserAddressInfoFromUserId(user.id);

	return {
		id: user.id,
		kusama_default_address: networkUserAddressInfo.kusama.default,
		polkadot_default_address: networkUserAddressInfo.polkadot.default,
		username: user.username
	};
};
