// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import BN from 'bn.js';
import React from 'react';
import { Popup } from 'semantic-ui-react';
import blockToTime from 'src/util/blockToTime';

interface Props {
	blocks: number | BN;
	className?: string
}

const BlocksToTime = ({ blocks, className }:Props ) => {
	const popupStyle = {
		fontSize: '1.2rem'
	};

	return (
		<div className={className}>
			<Popup
				className={className}
				trigger={<div>{blockToTime(blocks)}</div>}
				content={`${blocks} blocks`}
				hoverable={true}
				position='top left'
				style={popupStyle}
			/>
		</div>
	);
};

export default BlocksToTime;