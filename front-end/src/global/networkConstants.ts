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
		ss58Format: 2,
		tokenDecimals: 12,
		tokenSymbol: tokenSymbol.KSM
	},
	[network.POLKADOT]: {
		ss58Format: 1,
		tokenDecimals: 18,
		tokenSymbol: tokenSymbol.DOT
	}
};