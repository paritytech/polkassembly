// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keyring } from '@polkadot/api';
import { schnorrkelVerify } from '@polkadot/util-crypto';

const keyring = new Keyring({ type: 'sr25519' });

export default (message: string, address: string, signature: string) => {
	const publicKey = keyring.decodeAddress(address);

	return schnorrkelVerify(message, signature, publicKey);
};
