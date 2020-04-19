// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { formatNumber } from '@polkadot/util';
import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Popup } from 'semantic-ui-react';
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
				setReferendumEndBlock(_info?.asOngoing.end);
			}
		})
			.then( unsub => {unsubscribe = unsub;})
			.catch(console.error);

		updateBestBlock();

		return () => unsubscribe && unsubscribe();
	}, [api, apiReady, referendumId, updateBestBlock]);

	const popupStyle = {
		fontSize: '1.2rem',
		marginLeft: '-1rem'
	};

	const popupContent = <div>
		<div>Ends at Block <span style={{ fontWeight: 500 }}>#{formatNumber(referendumEndBlock)}</span></div>
		<div>Current Block <span style={{ fontWeight: 500 }}>#{formatNumber(currentBlock)}</span></div>
		<div>Remaining Blocks <span style={{ fontWeight: 500 }}>#{formatNumber(blocksRemaining)}</span></div>
	</div>;

	return (
		<Card className={className}>
			<h5>Referendum Ending In</h5>
			<Popup
				className={className}
				trigger={<h3>{blockToTime(blocksRemaining)}</h3>}
				content={popupContent}
				hoverable={true}
				position='top left'
				style={popupStyle}
			/>
		</Card>
	);
};

export default styled(ReferendumCountdown)`
	h3 {
		margin-bottom: 0;
	}

	h5 {
		margin-bottom: 1rem;
	}
`;