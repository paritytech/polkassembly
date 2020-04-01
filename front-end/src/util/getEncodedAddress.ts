// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Keyring } from '@polkadot/api';

import getNetwork from 'src/util/getNetwork';
import { chainProperties } from 'src/global/networkConstants';

/**
 * Return an address encoded for the current network
 *
 * @param address An address
 *
 */

export default function (address: string): string|null {
	const network = getNetwork();
	const ss58Format = chainProperties?.[network]?.ss58Format;
	if (!network || !ss58Format) {
		return null;
	}

	const keyring = new Keyring({ type: 'sr25519' });

	return keyring.encodeAddress(
		keyring.decodeAddress(address),
		chainProperties[network].ss58Format);
}