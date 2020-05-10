// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import blockToTime from '../blockToTime';

test('blocknumber to time format', () => {
	const time1 = '1d 12h 40m ';
	const time2 = '0d 0h 0m ';
	const time3 = '0d 0h 1m ';

	expect(blockToTime(22000, 6000)).toEqual(time1);
	expect(blockToTime(22000)).toEqual(time1);
	expect(blockToTime(5)).toEqual(time2);
	expect(blockToTime(30, 2000)).toEqual(time3);
});