// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { useMemo } from 'react';

import useBlockTime from './useBlockTime';
import useCurrentBlock from './useCurrentBlock';

const TWO_WEEKS = 2 * 7 * 24 * 60 * 60 * 1000;

export default function ()  {
	const { blocktime } = useBlockTime();
	const currenBlockNumber = useCurrentBlock()?.toNumber();
	const blockEnd = (currenBlockNumber || 0) + Math.floor(TWO_WEEKS / blocktime);

	return useMemo(() => {
		return blockEnd;
	}, [blockEnd]);
}
