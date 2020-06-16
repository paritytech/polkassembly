// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keyring } from '@polkadot/api';

export default (address: string): string => {
	const keyring = new Keyring({ type: 'sr25519' });
	const publicKey = keyring.decodeAddress(address);

	return Buffer.from(publicKey).toString('hex');
};
