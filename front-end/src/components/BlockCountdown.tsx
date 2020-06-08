// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromiseContext } from '@substrate/context';
import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React, { useContext, useEffect, useState } from 'react';
import { Popup } from 'semantic-ui-react';
import { BlockTimeContext } from 'src/context/BlockTimeContext';
import blockToTime from 'src/util/blockToTime';

interface Props {
	className?: string
	endBlock: number;
}

const DivContent = styled.div`
	font-size: xs;
	color: black_text;
`;

const BlockCountdown = ({ className, endBlock }:Props ) => {
	const ZERO = new BN(0);
	const { api, isApiReady } = useContext(ApiPromiseContext);
	const [currentBlock, setCurrentBlock] = useState(ZERO);
	const blocksRemaining = endBlock - currentBlock.toNumber();
	const { blocktime } = useContext(BlockTimeContext);

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

	return (
		<Popup
			className={className}
			trigger={<div>{blocksRemaining !== endBlock ? blockToTime(blocksRemaining, blocktime) : `#${endBlock}`}</div>}
			content={<DivContent>{`#${endBlock}`}</DivContent>}
			hoverable={true}
			position='top left'
		/>
	);
};

export default BlockCountdown;
