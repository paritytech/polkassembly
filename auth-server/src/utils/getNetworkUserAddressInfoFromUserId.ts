// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { NetworkEnum, NetworkUserAddressInfo } from '../types';
import getAllAddressesFromUserId from './getAllAddressesFromUserId';

/**
 * Get verified addresses from userId for a given network
 */
export default async (userId: number): Promise<NetworkUserAddressInfo> => {
	const allAddresses = await getAllAddressesFromUserId(userId);

	const kusamaAddressses: string[] = [];
	const polkadotAddressses: string[] = [];

	let kusamaDefault = '';
	let polkadotDefault = '';

	allAddresses.forEach(addressInfo => {
		switch (addressInfo.network) {
		case NetworkEnum.KUSAMA:
			if (addressInfo.verified) {
				kusamaAddressses.push(addressInfo.address);
				if (addressInfo.default) {
					kusamaDefault = addressInfo.address;
				}
			}
			break;

		case NetworkEnum.POLKADOT:
			if (addressInfo.verified) {
				polkadotAddressses.push(addressInfo.address);
				if (addressInfo.default) {
					polkadotDefault = addressInfo.address;
				}
			}
			break;
		default:
			break;
		}
	});

	const result = {
		[NetworkEnum.KUSAMA]: {
			addresses: kusamaAddressses,
			default: kusamaDefault
		},
		[NetworkEnum.POLKADOT]: {
			addresses: polkadotAddressses,
			default: polkadotDefault
		}
	} as unknown as NetworkUserAddressInfo;

	return result;
};

