// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import formatBnBalance from '../formatBnBalance';

test('formatting BN Balances', () => {
	const formattedBalance1 = '100.00 ';
	const formattedBalance2 = '9 453.0 KSM' || '9 453.0 DOT';
	const formattedBalance3 = '10 000.0 ';

	expect(formatBnBalance('100000000000000', { numberAfterComma: 2 } )).toEqual(formattedBalance1);
	expect(formatBnBalance('9453000000000000', { numberAfterComma: 1, withUnit: true } )).toEqual(formattedBalance2);
	expect(formatBnBalance('10000000000000000', { numberAfterComma: 1, withThousandDelimitor: true } )).toEqual(formattedBalance3);
});