// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import { chainProperties } from 'src/global/networkConstants';
import getNetwork from './getNetwork';

export  default function (value: BN | string, numberAfterComma?: number): string {
	const network = getNetwork();
	const tokenDecimals = chainProperties[network].tokenDecimals;
	const valueString = value.toString();

	let suffix = '';
	let prefix = '';

	if (valueString.length>tokenDecimals){
		suffix = valueString.slice(-tokenDecimals);
		prefix = valueString.slice(0, valueString.length-tokenDecimals);
		console.log('prefix', prefix, 'suffix', suffix);
	}
	else {
		prefix = '0';
		suffix = valueString.padStart(11, '0');
	}

	let comma = '.';

	if ((numberAfterComma && numberAfterComma < 0) || numberAfterComma === 0){
		comma = '';
		suffix = '';

	} else if (numberAfterComma && numberAfterComma > 0){
		suffix = suffix.slice(0,numberAfterComma);
	}

	return `${prefix}${comma}${suffix}`;
}

