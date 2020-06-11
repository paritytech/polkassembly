// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromiseContext } from '@substrate/context';
import BN from 'bn.js';
import { useContext, useEffect,useMemo, useState } from 'react';

export default function ()  {
	const [currentBlock, setCurrentBlock] = useState<BN | undefined>(undefined);
	const { api, isApiReady } = useContext(ApiPromiseContext);

	useEffect(() => {
		if (!isApiReady) {
			return;
		}

		let unsubscribe: () => void;

		api.derive.chain.bestNumber((number) => {
			setCurrentBlock(number);
		})
			.then(unsub => {unsubscribe = unsub;})
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();
	}, [api, isApiReady]);

	return useMemo(() => {
		return currentBlock;
	}, [currentBlock]);
}
