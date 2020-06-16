// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import BN from 'bn.js';
import { chainProperties } from 'src/global/networkConstants';
import getNetwork from 'src/util/getNetwork';

function secondsToDhm(seconds: number) {
	seconds = Number(seconds);
	const d = Math.floor(seconds / (3600*24));
	const h = Math.floor(seconds % (3600*24) / 3600);
	const m = seconds < 60 ? 1 : Math.floor(seconds % 3600 / 60);

	const dDisplay = d + 'd ';
	const hDisplay = h + 'h ';
	const mDisplay = m + 'm';

	return dDisplay + hDisplay + mDisplay;
}

export default function blockToTime (blocks: BN |  number, blocktime?: number ): string {
	const network = getNetwork();

	if (!blocktime) {
		blocktime = chainProperties?.[network]?.blockTime / 1000;
	} else {
		blocktime = blocktime / 1000;
	}

	if (typeof blocks !== 'number') {
		blocks = blocks.toNumber();
	}

	const time = secondsToDhm(blocks * blocktime);

	return time;
}
