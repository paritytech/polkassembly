// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import BN from 'bn.js';
import { chainProperties } from 'src/global/networkConstants';

import getNetwork from './getNetwork';

type Time = [number, number, number, number];

const HRS = 60 * 60;
const DAY = HRS * 24;

function addTime (a: Time, b: Time): Time {
	return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]];
}

function extractTime (value?: number): Time {
	if (!value) {
		return [0, 0, 0, 0];
	} else if (value < 60) {
		return [0, 0, 0, value];
	}

	const mins = value / 60;

	if (mins < 60) {
		const round = Math.floor(mins);

		return addTime([0, 0, round, 0], extractTime(value - round * 60));
	}

	const hrs = mins / 60;

	if (hrs < 24) {
		const round = Math.floor(hrs);

		return addTime([0, round, 0, 0], extractTime(value - round * HRS));
	}

	const round = Math.floor(hrs / 24);

	return addTime([round, 0, 0, 0], extractTime(value - round * DAY));
}

export default function blockToTime (blocks: BN |  number, blocktime?: BN | number ): string {
	const network = getNetwork();

	if (!blocktime) {
		blocktime = chainProperties?.[network]?.blockTime / 1000;
	} else {
		blocktime = parseInt(blocktime.toString()) / 1000;
	}

	if (typeof blocks !== 'number') {
		blocks = parseInt(blocks.toString());
	}

	const time = extractTime(blocks * blocktime);

	return time[0].toString() + 'd ' + time[1].toString() + 'h ' + time[2].toString() + 'm ';
}