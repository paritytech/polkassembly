// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromiseContext } from '@substrate/context';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { chainProperties } from 'src/global/networkConstants';
import getNetwork from 'src/util/getNetwork';

import { BlockTimeContextType } from '../types';

const network = getNetwork();
const DEFAULT_TIME = chainProperties?.[network]?.blockTime;

const initialBlockTimeContext: BlockTimeContextType = {
	blocktime: DEFAULT_TIME
};

export const BlockTimeContext = createContext(initialBlockTimeContext);

export const BlockTimeProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const { api, isApiReady } = useContext(ApiPromiseContext);
	const [blocktime, setBlocktime] = useState(DEFAULT_TIME);

	useEffect(() => {
		if (!isApiReady) {
			return;
		}

		setBlocktime(api.consts.babe?.expectedBlockTime.toNumber());
	}, [api, isApiReady]);

	return (
		<BlockTimeContext.Provider value={{ blocktime }}>
			{children}
		</BlockTimeContext.Provider>
	);
};
