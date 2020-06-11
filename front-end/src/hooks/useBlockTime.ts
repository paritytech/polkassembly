// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromiseContext } from '@substrate/context';
import { useContext, useMemo } from 'react';
import { chainProperties } from 'src/global/networkConstants';
import getNetwork from 'src/util/getNetwork';

const network = getNetwork();
const DEFAULT_TIME = chainProperties?.[network]?.blockTime;

export default function ()  {
	const { api, isApiReady } = useContext(ApiPromiseContext);

	return useMemo(() => {
		if (!isApiReady) {
			return {
				blocktime: DEFAULT_TIME
			};
		}

		return {
			blocktime: api.consts.babe?.expectedBlockTime.toNumber()
		};
	}, [api, isApiReady]);
}
