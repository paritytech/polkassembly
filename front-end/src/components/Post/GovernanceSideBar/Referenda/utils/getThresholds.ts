// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { newtonRaphson, NewtonRaphsonResult } from './newton-raphson';
import { solveQuadraticEquation } from './solveQuadraticEquation';
import { FaillingThresholdResult, PassingThresholdResult, VoteThreshold,VoteThresholdEnum } from './types';

interface ThresholdBase {
	totalIssuance: BN;
	threshold: VoteThreshold;
}

interface getPassingThresholdParamsType extends ThresholdBase {
	nays: BN;
	naysWithoutConviction: BN;
}

interface getFailingThresholdParamsType extends ThresholdBase {
	ayes: BN;
	ayesWithoutConviction: BN;
}

const ONE = new BN(1);
const TWO = new BN(2);
const THREE = new BN(3);
const TEN = new BN(10);
const MAX_ITERATIONS = 20;

interface FAndFpParamsTypes {
	totalIssuance: BN;
	votes: BN;
	votesWithoutConviction: BN;
}

type PolynomialFunction = (x: BN) => BN
interface FandFpType{
	f: PolynomialFunction;
	fp: PolynomialFunction
}

const getFAndFp = function ({ votes, votesWithoutConviction, totalIssuance } : FAndFpParamsTypes ): FandFpType {
	return {
		f: (x: BN) => {
			return x.pow(THREE).add(votesWithoutConviction.mul(x.pow(TWO))).sub(votes.pow(TWO).mul(totalIssuance));
		},
		fp: (x: BN) => {
			return THREE.mul(x.pow(TWO)).add(TWO.mul(votesWithoutConviction).mul(x));
		}
	};
};

const raphsonIterations = function (f: PolynomialFunction, fp: PolynomialFunction): NewtonRaphsonResult{
	const initialGuess = ONE;
	let result: NewtonRaphsonResult = { foundRoot: false };
	let i = 1;

	while (!result.foundRoot && i < MAX_ITERATIONS){
		result = newtonRaphson(f, fp, initialGuess.mul(TEN).pow(new BN(i)));
		i++;
	}

	return result;
};

/**
 * @name getFailingThreshold
 * @summary Calculates amount of nays needed for a referendum to fail
 **/
export function getFailingThreshold({ ayes, ayesWithoutConviction, totalIssuance, threshold }: getFailingThresholdParamsType): FaillingThresholdResult {
	// console.log('nays', nays.toString());
	// console.log('naysWithoutConviction',naysWithoutConviction.toString());
	// console.log('totalIssuance',totalIssuance.toString());
	// console.log('threshold',threshold.toString());

	if (ayes.isZero() || ayesWithoutConviction.isZero()){
		// there is no vote against, any number of aye>0 would work
		return {
			faillingThreshold: ONE,
			isValid: true
		};
	}

	if (threshold === VoteThresholdEnum.Simplemajority){
		return {
			faillingThreshold: ayes,
			isValid: true
		};
	}

	if (threshold === VoteThresholdEnum.Supermajorityrejection){

		const { f, fp } = getFAndFp({ totalIssuance, votes: ayes, votesWithoutConviction: ayesWithoutConviction });
		const result = raphsonIterations(f, fp);
		return result.foundRoot
			? {
				faillingThreshold: result.result as BN,
				isValid: true
			}
			: {
				isValid: false
			};
	} else {
		const res = solveQuadraticEquation(totalIssuance.neg(), ayesWithoutConviction.pow(TWO), ayes.pow(TWO).mul(ayesWithoutConviction));
		return {
			faillingThreshold: BN.max(res[0],res[1]),
			isValid: true
		} ;
	}
}

/**
 * @name getPassingThreshold
 * @summary Calculates amount of ayes needed for a referendum to pass
 **/

export function getPassingThreshold({ nays, naysWithoutConviction, totalIssuance, threshold }: getPassingThresholdParamsType): PassingThresholdResult {

	// console.log('nays', nays.toString());
	// console.log('naysWithoutConviction',naysWithoutConviction.toString());
	// console.log('totalIssuance',totalIssuance.toString());
	// console.log('threshold',threshold.toString());

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

	if (threshold === VoteThresholdEnum.Supermajorityapproval){

		const { f, fp } = getFAndFp({ totalIssuance, votes: nays, votesWithoutConviction: naysWithoutConviction });
		const result = raphsonIterations(f, fp);
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