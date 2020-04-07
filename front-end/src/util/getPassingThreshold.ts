// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { VoteThreshold,VoteThresholdEnum } from 'src/types';

import { newtonRaphson } from './newton-raphson';
import solveQuadraticEquation from './solveQuadraticEquation';

export function getPassingThreshold(nays: BN, electorate: BN, totalVotes: BN, threshold: VoteThreshold){
	const ONE = new BN(1);
	const TWO = new BN(2);
	const THREE = new BN(3);
	const TEN = new BN(10);

	if (nays.isZero()){
		// there is no vote against, any number of aye>0 would work
		return ONE;
	}

	if (threshold === VoteThresholdEnum.Simplemajority){
		return totalVotes.div(TWO);
	}

	let result: BN | boolean = false;

	if (threshold === VoteThresholdEnum.Supermajorityapproval){
		const f = (x: BN) => {
			return x.pow(THREE).add(nays.mul(x.pow(TWO))).sub(nays.pow(TWO).mul(electorate));
		};

		const fp = (x: BN) => {
			return THREE.mul(x.pow(TWO)).add(TWO.mul(nays).mul(x));
		};
		const initialGuess = ONE;

		let i = 1;

		while (!result || i > 20){
			result = newtonRaphson(f, fp, initialGuess.mul(TEN).pow(new BN(i)));
			i++;
		}
	} else {
		const res = solveQuadraticEquation(electorate.neg(), nays.pow(TWO), nays.pow(THREE));
		result = BN.max(res[0],res[1]);
	}

	return result;
}