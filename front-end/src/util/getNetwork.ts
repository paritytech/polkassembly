// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Network } from '../types';
import { network as networkConstants } from '../global/networkConstants';
/**
 * Return the current network
 *
 */

export default function (): Network {
	const network = process.env.REACT_APP_NETWORK || 'kusama';

	if (!network) {
		throw Error('Please set the REACT_APP_NETWORK environment variable');
	}

	const possibleNetworks = Object.values(networkConstants);

	if (!possibleNetworks.includes(network)) {
		throw Error(`REACT_APP_NETWORK environment variable must be one of ${possibleNetworks} `);
	}

	return network;
}
