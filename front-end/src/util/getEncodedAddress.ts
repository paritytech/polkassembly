// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { u8aToHex } from '@polkadot/util';
// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { decodeAddress,encodeAddress } from '@polkadot/util-crypto';
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
		const addressEncoded = encodeAddress(address, ss58Format);
		console.log('decodeAddress', u8aToHex(decodeAddress(address)));
		console.log('encodeAddress 2', encodeAddress('HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', 2));
		console.log('encodeAddress 42', encodeAddress('HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', 42));
		console.log('encodeAddress 1', encodeAddress('HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F', 1));

		return addressEncoded;
	} catch(e) {
		console.error('getEncodedAddress error', e);
		return null;
	}
}