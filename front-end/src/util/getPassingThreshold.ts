// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// import findRoot from 'newton-raphson-method';

// export function getPassingThreshold(){
// 	function f(x: number) {
// 		// return x * x - 2;
// 		return x*x*x + (450 * x * x) - (450*450*1500);
// 	  }
// 	  function fprime(x: number) {
// 		// return 2 * x;
// 		return (3 * x * x) + (2 * 450 * x) ;
// 	  }
// 	  const initialGuess = 400;

// 	return findRoot(f, fprime, initialGuess);
// }

// -------------------------

// import newtonRaphson from 'newton-raphson-method';
// import Big from 'big.js';

// function f(y : Big) {
// 	// return x.minus(1).mul(x.plus(2));
// 	const x = Big(y);
// 	return (x.pow(3)).plus(Big(450).mul(x.pow(2))).minus(Big(450).pow(2).mul(Big(1500)));
// }
// function fp(y : Big) {
// 	const x = Big(y);
// 	// return x.minus(1).plus(x).plus(2);
// 	return (Big(3).mul(x.pow(2))).plus(Big(2).mul(Big(450)).mul(x));
// }

// export function getPassingThreshold(){
// 	const initialGuess = 1;
// 	let result: Big | boolean = false;
// 	let i = 1;

// 	while (!result || i > 1000000000000){
// 		result = newtonRaphson(f, initialGuess*i, fp);
// 		console.log('i, result', i, result);
// 		i++;
// 	}

// 	return result;
// }

import { newtonRaphson } from './newton-raphson';
import BN from 'bn.js';

export function getPassingThreshold(nays: BN, electorate: BN){
	const ONE = new BN(1);
	const TWO = new BN(2);
	const THREE = new BN(3);
	const TEN = new BN(10);

	console.log(nays.toString(), electorate.toString());
	if (nays.isZero()){
		// there is no vote agains, any number of aye>0 would work
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