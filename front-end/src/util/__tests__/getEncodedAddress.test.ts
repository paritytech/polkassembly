// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import getEncodedAddress from '../getEncodedAddress';

jest.mock('../getNetwork', () => jest.fn(() => {return 'polkadot';}));
const getNetwork = require('../getNetwork');

describe('Verify address is encoded', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	const address1 = 'FqfW96FuXRH7pRy9njeNSxu4CNoBM1hKnVAmNRrFrU2izwj';

	it('for Kusama', () => {
		getNetwork.mockImplementation(() => 'kusama');
		expect(getEncodedAddress(address1)).toBe('FqfW96FuXRH7pRy9njeNSxu4CNoBM1hKnVAmNRrFrU2izwj');
		expect(getEncodedAddress(address1)).not.toBe('A41F9YrXEYYxm2WFFrczYhUQiEW8APB8qw39gnYnzsYSZ9M');
	});

	it('for Polkadot', () => {
		getNetwork.mockImplementation(() => 'polkadot');
		expect(getEncodedAddress(address1)).not.toBe('FqfW96FuXRH7pRy9njeNSxu4CNoBM1hKnVAmNRrFrU2izwj');
		expect(getEncodedAddress(address1)).toBe('A41F9YrXEYYxm2WFFrczYhUQiEW8APB8qw39gnYnzsYSZ9M');
	});
});