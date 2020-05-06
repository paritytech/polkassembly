// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React, { useContext, useEffect, useState } from 'react';
import { Popup } from 'semantic-ui-react';
import { ApiContext } from 'src/context/ApiContext';
import { chainProperties } from 'src/global/networkConstants';
import blockToTime from 'src/util/blockToTime';
import getNetwork from 'src/util/getNetwork';

interface Props {
	className?: string
	endBlock: number;
}

const DivContent = styled.div`
	font-size: xs;
	color: black_text;
`;

const BlockCountdown = ({ className, endBlock }:Props ) => {
	const network = getNetwork();
	const ZERO = new BN(0);
	const { api, apiReady } = useContext(ApiContext);
	const [currentBlock, setCurrentBlock] = useState(ZERO);
	const blocksRemaining = endBlock - currentBlock.toNumber();
	const DEFAULT_TIME = chainProperties?.[network]?.blockTime;
	const [blocktime, setBlocktime] = useState(DEFAULT_TIME);

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

		setBlocktime(api.consts.babe?.expectedBlockTime.toNumber());

		api.derive.chain.bestNumber((number) => {
			setCurrentBlock(number);
		})
			.then(unsub => {unsubscribe = unsub;})
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();
	}, [api, apiReady]);

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