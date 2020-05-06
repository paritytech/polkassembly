// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Network } from 'src/types';

import Address from '../model/Address';

/**
 * Get verified addresses from userId for a given network
 */
export default async (userId: number, network: Network): Promise<Address[]> => {
	const allAddresses = await Address
		.query()
		.where('user_id', userId);

	const verifiedNetworkAddresses = allAddresses.filter(address =>
		address.network === network && address.verified
	);

	return verifiedNetworkAddresses;
};

