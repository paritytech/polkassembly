// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { newtonRaphson } from './newton-raphson';
import BN from 'bn.js';

export function getPassingThreshold(nays: BN, electorate: BN){
	const ONE = new BN(1);
	const TWO = new BN(2);
	const THREE = new BN(3);
	const TEN = new BN(10);

	if (nays.isZero()){
		// there is no vote against, any number of aye>0 would work
		return ONE;
	}

	const f = function(x: BN) {
		return (x.pow(THREE)).add(nays.mul(x.pow(TWO))).sub(nays.pow(TWO).mul(electorate));
	};

	const fp = function(x: BN) {
		return (THREE.mul(x.pow(TWO))).add(TWO.mul(nays).mul(x));
	};

	const initialGuess = new BN(10000000000);
	let result: BN | boolean = false;
	let i = 1;

	while (!result || i > 10000){
		result = newtonRaphson(f, fp, initialGuess.mul(TEN).pow(new BN(i)));
		console.log('i, result', i, result.toString());
		i++;
	}

	return result;
}