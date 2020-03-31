// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import { Progress } from 'semantic-ui-react';
import React from 'react';

interface Props {
	ayePercent: number,
	className?: string,
	isPassing: boolean,
	passingThreshold: number
}

const VoteProgress = ({ ayePercent, className, isPassing, passingThreshold }: Props) => {
	return (
		<div className={className}>
			<div className='voteNumbers'>Aye: {ayePercent}%</div>
			<div
				className='voteNumbers'
				style={{ left: ayePercent + '%', position: 'absolute' }}
			>
				Nay: {(100-ayePercent).toString()}%
			</div>
			<Progress
				className={isPassing? 'passing': '' }
				percent={ayePercent}
			>
			</Progress>
			<div
				id='passingThreshold'
				style={{ left: passingThreshold + '%', position: 'absolute' }}
			>
				<hr/>
				Threashold: {passingThreshold}%
			</div>
		</div>
	);
};

export default styled(VoteProgress)`
	width: 100%;
	margin: 1rem 0 2.4rem 0;

	hr {
		width: 0.1rem;
		height: 0.8rem;
		border: none;
		background-color: grey_secondary;
		margin: 0;
	}

	.voteNumbers {
		display: inline-block;
		color: grey_primary;
		font-size: xs;
		margin-bottom: -1rem;
	}

	#passingThreshold {
		display: inline-block;
		color: grey_secondary;
		font-size: xs;
		margin-top: -1rem;
	}

    .ui.progress {
		height: 0.8rem;
		margin: 0.2rem 0;
		background-color: grey_light;
        .bar {
			height: 0.8rem;
		}
	}
	
	.passing {
		.bar {
			background-color: green_primary;
		}
	}
`;