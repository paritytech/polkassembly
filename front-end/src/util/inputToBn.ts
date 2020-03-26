import BN from 'bn.js';
import { chainProperties } from 'src/global/networkConstants';
import getNetwork from './getNetwork';

const BITLENGTH = 128;
const ZERO = new BN(0);
const TWO = new BN(2);
const TEN = new BN(10);
const currentNetwork = getNetwork();
const tokenDecimal = chainProperties[currentNetwork].tokenDecimals;
const tokenDecimalBN = new BN(tokenDecimal);

function getGlobalMaxValue (): BN {
	return TWO
		.pow(new BN(BITLENGTH))
		.subn(1);
}

function isValidNumber (bn: BN, { isZeroable }: Props): boolean {
	if (
	// cannot be negative
		bn.lt(ZERO) ||
        // cannot be > than allowed max
        !bn.lt(getGlobalMaxValue()) ||
        // check if 0 and it should be a value
        (!isZeroable && bn.eq(ZERO)) ||
        // check that the bitlengths fit
        bn.bitLength() > BITLENGTH
	) {
		return false;
	}

	return true;
}

interface Props{
    isZeroable: boolean
}

export function inputToBn (input: string, { isZeroable } : Props): [BN, boolean] {
	const isDecimalValue = input.match(/^(\d+)\.(\d+)$/);

	let result;

	if (isDecimalValue) {
		// return -1 if the amount of decimal is higher that the one supported
		if (isDecimalValue[2].length < tokenDecimal) {
			result = new BN(-1);
		}

		//get what is before the point and replace what isn't a number
		const div = new BN(isDecimalValue[1]);
		//get what is after the point  and replace what isn't a number
		const modString = isDecimalValue[2];
		console.log('div',div.toString());
		console.log('modString',modString);
		// make it BN
		const mod = new BN(modString);

		result = div
			.mul(TEN.pow(tokenDecimalBN))
			.add(mod.mul(TEN.pow(new BN(tokenDecimal - modString.length))));

	} else {
		result = new BN(input.replace(/[^\d]/g, ''))
			.mul(TEN.pow(tokenDecimalBN));
	}

	console.log('Input result',result.toString());
	return [
		result,
		isValidNumber(result, { isZeroable })
	];
}