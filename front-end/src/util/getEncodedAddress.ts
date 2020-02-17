import { Keyring } from '@polkadot/api';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import getNetwork from './getNetwork';
import { chainProperties } from '../global/chainProperties';

/**
 * Return an address encoded for the current network
 *
 * @param address An address
 *
 */

export default function(address: InjectedAccountWithMeta['address']) {

	const network = getNetwork();

	if (!network || !chainProperties?.[network]?.ss58Format) {
		return null;
	}

	const keyring = new Keyring({ type: 'sr25519' });

	return chainProperties?.[network]?.ss58Format
		? keyring.encodeAddress(
			keyring.decodeAddress(address),
			chainProperties[network].ss58Format as number)
		: null;
}