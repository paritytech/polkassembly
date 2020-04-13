// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// forked from https://github.com/scijs/newton-raphson-method

import BN from 'bn.js';

interface Options{
    tolerance: BN
    epsilon: BN
    maxIterations: number
    h: BN
    verbose: boolean
}

export default function newtonRaphson (f: (x: BN) => BN, fp: (x: BN) => BN, x0: BN, options?: Options) {
	let x1: BN, y: BN, yp: BN, tol: BN, maxIter: number, iter: number, verbose: boolean, eps: BN;

	tol = options?.tolerance === undefined ? new BN(1e-7) : options.tolerance;
	eps = options?.epsilon === undefined ? new BN(2.220446049250313e-16) : options.epsilon;
	maxIter = options?.maxIterations === undefined ? 20 : options.maxIterations;
	verbose = options?.verbose === undefined ? false : options.verbose;

	iter = 0;
	while (iter++ < maxIter) {
		// Compute the value of the function:
		y = f(x0);
		yp = fp(x0);

		if (yp.abs().lte(eps.mul(y.abs()))) {
			if (verbose) {
				console.log('Newton-Raphson: failed to converged due to nearly zero first derivative');
			}
			return false;
		}

		// Update the guess:
		x1 = x0.sub(y.div(yp));

		// Check for convergence:
		if (x1.sub(x0).abs().lte(tol.mul(x1.abs()))) {
			if (verbose) {
				console.log('Newton-Raphson: converged to x = ' + x1.toString() + ' after ' + iter + ' iterations');
			}
			return x1;
		}

		// Transfer update to the new guess:
		x0 = x1;
	}

	if (verbose) {
		console.log('Newton-Raphson: Maximum iterations reached (' + maxIter + ')');
	}

	return false;
}