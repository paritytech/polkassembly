// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React from 'react';
import { Popup } from 'semantic-ui-react';
import { useBlockTime } from 'src/hooks';
import useCurrentBlock from 'src/hooks/useCurrentBlock';
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
	const currentBlock = useCurrentBlock() || ZERO;
	const blocksRemaining = endBlock - currentBlock.toNumber();
	const { blocktime } = useBlockTime();

	return (
		<Popup
			className={className}
			trigger={<div className='blockCountdown'>{blocksRemaining !== endBlock ? blockToTime(blocksRemaining, blocktime) : `#${endBlock}`}</div>}
			content={<DivContent>{`#${endBlock}`}</DivContent>}
			hoverable={true}
			position='top left'
		/>
	);
};

export default BlockCountdown;
