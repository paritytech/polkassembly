// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
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

const SpanContent = styled.span`
	font-size: xs;
	color: black_text;
`;

const BlockCountdown = ({ className, endBlock }:Props ) => {
	const ZERO = new BN(0);
	const currentBlock = useCurrentBlock() || ZERO;
	const blocksRemaining = endBlock - currentBlock.toNumber();
	const { blocktime } = useBlockTime();

	return (
		blocksRemaining !== endBlock && blocksRemaining > 0
			?(
				<Popup
					className={className}
					trigger={<span className='blockCountdown'>{ blockToTime(blocksRemaining, blocktime)}</span>}
					content={<SpanContent>{`#${endBlock}`}</SpanContent>}
					hoverable={true}
					position='top left'
				/>
			)
			: <>#{endBlock}</>
	);
};

export default BlockCountdown;
