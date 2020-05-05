// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Address from 'src/model/Address';

/**
 * Get the default address from an array of addresses, if there is any
 */

export default (addresses: Address[]): string|undefined => {
	let defaultAddress;
	// it will iterate through all accounts
	addresses.some(address => {
		if (address.default) {
			defaultAddress = address.address;
			// this breaks the loop as soon as we find a matching address
			return true;
		}
		return false;
	});

	return defaultAddress;
};

