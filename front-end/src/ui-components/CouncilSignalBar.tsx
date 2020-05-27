// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';

interface Props {
	className?: string
	ayeSignals: number
	naySignals: number
	councilSize: number
}

const CouncilSignalBar = ({ ayeSignals, className, councilSize, naySignals }: Props) => {
	const notSignaled = councilSize - ayeSignals - naySignals;

	return (
		<div className={className}>
			<div className='ayes'>{ayeSignals === 1 ? '1 Aye' : `${ayeSignals} Ayes`}</div>
			<div className='nays'>{naySignals === 1 ? '1 Nay' : `${naySignals} Nays`}</div>
			<div className='threshold'/>
			<div className='signal-bar'>
				{[...Array(ayeSignals)].map((e, i) => <div className='aye' key={i}/>)}
				{[...Array(notSignaled)].map((e, i) => <div className='not-signaled' key={i}/>)}
				{[...Array(naySignals)].map((e, i) => <div className='nay' key={i}/>)}
			</div>
		</div>
	);
};

export default styled(CouncilSignalBar)`
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
	.aye, .nay, .not-signaled {
		display: inline-flex;
		margin-right: 1px;
		width: 100%;
	}
	.aye {
		background-color: green_primary;
	}
	.nay {
		background-color: red_primary;
	}
	.not-signaled {
		background-color: grey_light;
	}
	.threshold {
		display: inline-flex;
		position: absolute;
		left: 50%;
		width: 0.1rem;
		height: 2rem;
		background-color: grey_secondary;
		margin-top: 1.3rem;
	}
`;
