// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Address from '../model/Address';

/**
 * Get the default address from an array of addresses, if there is any
 */

export default async (userId: number): Promise<Address[]> => {
	return Address
		.query()
		.where('user_id', userId);
};

