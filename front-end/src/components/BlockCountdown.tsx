// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import React, { useContext, useEffect, useState } from 'react';
import { Popup } from 'semantic-ui-react';
import { ApiContext } from 'src/context/ApiContext';
import blockToTime from 'src/util/blockToTime';

interface Props {
	className?: string
	endBlock: number;
}

const BlockCountdown = ({ className, endBlock }:Props ) => {
	const ZERO = new BN(0);
	const { api, apiReady } = useContext(ApiContext);
	const [currentBlock, setCurrentBlock] = useState(ZERO);
	const blocksRemaining = endBlock - currentBlock.toNumber();

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

		api?.derive.chain.bestNumber((number) => {
			setCurrentBlock(number);
		})
			.then(unsub => {unsubscribe = unsub;})
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();
	}, [api, apiReady, blocksRemaining]);

	const popupStyle = {
		fontSize: '1.2rem'
	};

	return (
		<Popup
			className={className}
			trigger={<div>{blockToTime(blocksRemaining)}</div>}
			content={`#${endBlock}`}
			hoverable={true}
			position='top left'
			style={popupStyle}
		/>
	);
};

export default BlockCountdown;