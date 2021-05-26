// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default (address: string) => {
	if (!address || address.length < 8) {
		return address;
	}

	return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
};
