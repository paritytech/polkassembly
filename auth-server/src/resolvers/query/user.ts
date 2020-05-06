// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AuthenticationError } from 'apollo-server';

import User from '../../model/User';
import { NetworkEnum, PublicUser, UserArgs } from '../../types';
import getDefaultAddressFromAddressArray from '../../utils/getDefaultAddressFromAddressArray';
import getVerifiedNetworkAddressesFromUserId from '../../utils/getVerifiedNetworkAddressesFromUserId';
import messages from '../../utils/messages';

export default async (parent: void, { id }: UserArgs): Promise<PublicUser | null> => {
	const user = await User
		.query()
		.where('id', id)
		.first();

	if (!user) {
		throw new AuthenticationError(messages.USER_NOT_FOUND);
	}

	const kusamaAddresses = await getVerifiedNetworkAddressesFromUserId(id, NetworkEnum.KUSAMA);
	const kusamaDefault = getDefaultAddressFromAddressArray(kusamaAddresses);

	const polkadotAddresses = await getVerifiedNetworkAddressesFromUserId(id, NetworkEnum.POLKADOT);
	const polkadotDefault = getDefaultAddressFromAddressArray(polkadotAddresses);

	return {
		id: user.id,
		kusama_default_address: kusamaDefault,
		name: user.name,
		polkadot_default_address: polkadotDefault,
		username: user.username
	};
};
