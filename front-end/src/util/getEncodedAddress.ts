// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keyring } from '@polkadot/api';
import { chainProperties } from 'src/global/networkConstants';
import getNetwork from 'src/util/getNetwork';

/**
 * Return an address encoded for the current network
 *
 * @param address An address
 *
 */

export default function (address: string): string|null {
	const network = getNetwork();
	const ss58Format = chainProperties?.[network]?.ss58Format;

	if (!network || ss58Format === undefined) {
		return null;
	}

	try{
		const keyring = new Keyring({ ss58Format, type: 'sr25519' });
		const addressEncoded = keyring.encodeAddress(address, ss58Format);

		return addressEncoded;
	} catch(e) {
		console.error('getEncodedAddress error', e);
		return null;
	}
}