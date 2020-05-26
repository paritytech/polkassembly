// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Progress } from 'semantic-ui-react';

interface Props {
	className?: string
	ayeSignals: number
	naySignals: number
}

const OffChainSignalBar = ({ ayeSignals, className, naySignals }: Props) => {
	let percent = 0;
	const total = ayeSignals + naySignals;
	if (total > 0) {
		percent = ayeSignals/total*100;
	}

	return (
		<div className={className}>
			<div className='ayes'>{ayeSignals === 1 ? '1 Aye' : `${ayeSignals} Ayes`}</div>
			<div className='nays'>{naySignals === 1 ? '1 Nay' : `${naySignals} Nays`}</div>
			<Progress
				className={'passing'}
				percent={percent}
			/>
		</div>
	);
};

export default styled(OffChainSignalBar)`
	position: relative;
	.signal-bar {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		width: 100%;
		height: 0.8rem;
		border-radius: 3px;
		overflow: hidden;
	}
	.ayes, .nays {
		display: inline-flex;
		margin-bottom: -1rem;
	}
	.nays {
		position: absolute;
		right: 0;
	}
	.ui.progress {
		height: 1rem;
		margin: 0.2rem 0;
		background-color: grey_light;
        .bar {
			height: 1rem;
		}
	}

	.passing {
		.bar {
			background-color: green_primary;
		}
	}
`;
