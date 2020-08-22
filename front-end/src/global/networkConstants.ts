// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ChainPropType } from '../types';

export const network = {
	KUSAMA: 'kusama',
	POLKADOT: 'polkadot'
};

export const tokenSymbol = {
	DOT: 'DOT',
	KSM: 'KSM'
};

export const chainProperties: ChainPropType = {
	[network.KUSAMA]: {
		blockTime: 6000,
		ss58Format: 2,
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.KSM
	},
	[network.POLKADOT]: {
		blockTime: 6000,
		ss58Format: 0,
		tokenDecimals: 10,
		tokenSymbol: tokenSymbol.DOT
	}
};
