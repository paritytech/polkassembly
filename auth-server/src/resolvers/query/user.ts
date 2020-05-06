// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AuthenticationError } from 'apollo-server';

import User from '../../model/User';
import { PublicUser, UserArgs } from '../../types';
import getNetworkUserAddressInfoFromUserId from '../../utils/getNetworkUserAddressInfoFromUserId';
import messages from '../../utils/messages';

export default async (parent: void, { id }: UserArgs): Promise<PublicUser | null> => {
	const user = await User
		.query()
		.where('id', id)
		.first();

	if (!user) {
		throw new AuthenticationError(messages.USER_NOT_FOUND);
	}

	const networkUserAddressInfo = await getNetworkUserAddressInfoFromUserId(id);

	return {
		id: user.id,
		kusama_default_address: networkUserAddressInfo.kusama.default,
		name: user.name,
		polkadot_default_address: networkUserAddressInfo.polkadot.default,
		username: user.username
	};
};
