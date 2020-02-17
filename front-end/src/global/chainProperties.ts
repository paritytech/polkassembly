import { ChainPropType } from '../types';

export const chainProperties: ChainPropType  = {
	'kusama': {
		'ss58Format': 2,
		'tokenDecimals': 12,
		'tokenSymbol': 'KSM'
	},
	'polkadot': {
		'ss58Format': 1,
		'tokenDecimals': 18,
		'tokenSymbol': 'DOT'
	}
};