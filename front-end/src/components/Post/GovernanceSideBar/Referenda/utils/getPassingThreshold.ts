// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { newtonRaphson, NewtonRaphsonResult } from './newton-raphson';
import { solveQuadraticEquation } from './solveQuadraticEquation';
import { PassingThresholdResult,VoteThreshold,VoteThresholdEnum } from './types';

export function test (){
	console.log('hop');
}

/**
 * @name getPassingThreshold
 * @summary Calculates amount of aye needed for a referendum to pass
 * @param nays The amount of nay votes, including the mutliplication factors
 * @param naysWithoutConviction The amount of nay votes, without the conviction mutliplication factors
 * @param totalIssuance The total issuance of token in the network
 * @param threshold The type of bias of the vote
 **/

export function getPassingThreshold(nays: BN, naysWithoutConviction: BN, totalIssuance: BN, threshold: VoteThreshold ): PassingThresholdResult {

	console.log('nays', nays.toString());
	console.log('naysWithoutConviction',naysWithoutConviction.toString());
	console.log('totalIssuance',totalIssuance.toString());
	console.log('threshold',threshold.toString());

	const ONE = new BN(1);
	const TWO = new BN(2);
	const THREE = new BN(3);
	const TEN = new BN(10);
	const MAX_ITERATIONS = 20;

	if (nays.isZero() || naysWithoutConviction.isZero()){
		// there is no vote against, any number of aye>0 would work
		return {
			isValid: true,
			passingThreshold: ONE
		};
	}

	if (threshold === VoteThresholdEnum.Simplemajority){
		return {
			isValid: true,
			passingThreshold: nays
		};
	}

	let result: NewtonRaphsonResult = { foundRoot: false };

	if (threshold === VoteThresholdEnum.Supermajorityapproval){
		const f = (x: BN) => {
			return x.pow(THREE).add(naysWithoutConviction.mul(x.pow(TWO))).sub(nays.pow(TWO).mul(totalIssuance));
		};

		const fp = (x: BN) => {
			return THREE.mul(x.pow(TWO)).add(TWO.mul(naysWithoutConviction).mul(x));
		};

		const initialGuess = ONE;

		let i = 1;

		while (!result.foundRoot && i < MAX_ITERATIONS){
			result = newtonRaphson(f, fp, initialGuess.mul(TEN).pow(new BN(i)));
			console.log('initialGuess.mul(TEN).pow(new BN(i))',initialGuess.mul(TEN).pow(new BN(i)).toString());
			console.log('i',i);
			console.log('res',result.foundRoot, result.result?.toString());
			i++;
		}

		return result.foundRoot
			? {
				isValid: true,
				passingThreshold: result.result as BN
			}
			: {
				isValid: false
			};
	} else {
		const res = solveQuadraticEquation(totalIssuance.neg(), naysWithoutConviction.pow(TWO), nays.pow(TWO).mul(naysWithoutConviction));
		return {
			isValid: true,
			passingThreshold: BN.max(res[0],res[1])
		} ;
	}
}