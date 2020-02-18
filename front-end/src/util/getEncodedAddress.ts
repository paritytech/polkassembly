import { Keyring } from '@polkadot/api';

import getNetwork from './getNetwork';
import { chainProperties } from '../global/networkConstants';

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