// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import 'mocha';
import { expect } from 'chai';
import getPublicKey from '../../../src/utils/getPublicKey';

const alicePublicKey = '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d';
const aliceEncoded2 = 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F';
const aliceEncoded42 = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const aliceEncoded1 = 'BauKu2iL4fncgfy22YSLGc1aDLpyuUUe5z8yNF2pDtLNr4E';

describe('getPublicKey util', () => {
	it('should output the right public key for encoding 2', () => {
		expect(getPublicKey(aliceEncoded2)).to.eq(alicePublicKey);
	});

	it('should output the right public key for encoding 42', () => {
		expect(getPublicKey(aliceEncoded42)).to.eq(alicePublicKey);
	});

	it('should output the right public key for encoding 1', () => {
		expect(getPublicKey(aliceEncoded1)).to.eq(alicePublicKey);
	});
});
