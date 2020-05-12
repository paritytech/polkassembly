// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import formatBnBalance from '../formatBnBalance';

jest.mock('../getNetwork', () => jest.fn(() => {return 'polkadot';}));
const getNetwork = require('../getNetwork');

describe('Formatting BN Balances', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	const formattedBalance1 = '1.00';
	const formattedBalance2 = '1 000';
	const formattedBalance3 = '53.0 KSM';
	const formattedBalance4 = '53.0 DOT';

	it('in Kusama', () => {
		getNetwork.mockImplementation(() => 'kusama');
		expect(formatBnBalance('1000000000000', { numberAfterComma: 2 } )).toEqual(formattedBalance1);
		expect(formatBnBalance('1000000000000000000', { numberAfterComma: 2 } )).not.toEqual(formattedBalance1);
		expect(formatBnBalance('1000000000000000', { withThousandDelimitor: true } )).not.toEqual(formattedBalance2);
		expect(formatBnBalance('1000000000000000', { numberAfterComma: 0, withThousandDelimitor: true } )).toEqual(formattedBalance2);
		expect(formatBnBalance('53000000000000', { numberAfterComma: 1, withUnit: true } )).toEqual(formattedBalance3);
		expect(formatBnBalance('53000000000000000000', { numberAfterComma: 1, withUnit: true } )).not.toEqual(formattedBalance4);
	});

	it('in Polkadot', () => {
		getNetwork.mockImplementation(() => 'polkadot');
		expect(formatBnBalance('1000000000000', { numberAfterComma: 2 } )).not.toEqual(formattedBalance1);
		expect(formatBnBalance('1000000000000000000', { numberAfterComma: 2 } )).toEqual(formattedBalance1);
		expect(formatBnBalance('1000000000000', { withThousandDelimitor: true } )).not.toEqual(formattedBalance2);
		expect(formatBnBalance('1000000000000000000000', { numberAfterComma: 0, withThousandDelimitor: true } )).toEqual(formattedBalance2);
		expect(formatBnBalance('53000000000000', { numberAfterComma: 1, withUnit: true } )).not.toEqual(formattedBalance3);
		expect(formatBnBalance('53000000000000000000', { numberAfterComma: 1, withUnit: true } )).toEqual(formattedBalance4);
	});
});