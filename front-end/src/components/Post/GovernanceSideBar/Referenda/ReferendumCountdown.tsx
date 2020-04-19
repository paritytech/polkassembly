// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { formatNumber } from '@polkadot/util';
import BN from 'bn.js';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ApiContext } from 'src/context/ApiContext';
import Card from 'src/ui-components/Card';
import blockToTime from 'src/util/blockToTime';

interface Props {
	className?: string
	referendumId: number
}

const ReferendumCountdown = ({ className, referendumId }: Props) => {
	const ZERO = new BN(0);
	const { api, apiReady } = useContext(ApiContext);
	const [referendumEndBlock, setReferendumEndBlock] = useState(ZERO);
	const [currentBlock, setCurrentBlock] = useState(ZERO);
	const blocksRemaining = referendumEndBlock.sub(currentBlock);

	const updateBestBlock = useCallback(() => {
		api?.derive.chain.bestNumber((number) => {
			setCurrentBlock(number);
		});
	}, [api]);

	useEffect(() => {
		if (!api) {
			console.error('polkadot/api not set');
			return;
		}

		if (!apiReady) {
			console.error('api not ready');
			return;
		}

		let unsubscribe: () => void;

		api.query.democracy.referendumInfoOf(referendumId, (info) => {
			const _info = info.unwrapOr(null);

			if (_info?.isOngoing){
				console.log(_info?.asOngoing.end);
				setReferendumEndBlock(_info?.asOngoing.end);
			}
		})
			.then( unsub => {unsubscribe = unsub;})
			.catch(console.error);

		updateBestBlock();

		return () => unsubscribe && unsubscribe();
	}, [api, apiReady, referendumId, updateBestBlock]);

	return (
		<Card className={className}>
			<h4>Referendum ending in:</h4>
			<div>{blockToTime(blocksRemaining)}</div>
			<div>Referendum ends: {formatNumber(referendumEndBlock)}</div>
			<div>Current Block: {formatNumber(currentBlock)}</div>
			<div>Remaining Blocks: {formatNumber(blocksRemaining)}</div>
		</Card>
	);
};

export default ReferendumCountdown;