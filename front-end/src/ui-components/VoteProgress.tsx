// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React from 'react';
import { Progress } from 'semantic-ui-react';
import formatBnBalance from 'src/util/formatBnBalance';

interface Props {
	ayeVotes: BN,
	className?: string,
	isPassing: boolean,
	nayVotes: BN,
	threshold: BN,
}

const bnToIntBalance = function (bn: BN): number{
	return  Number(formatBnBalance(bn, { numberAfterComma: 2, withThousandDelimitor: false }));
};

const bnToStringBalanceDelimitor = function (bn: BN): string{
	return  formatBnBalance(bn, { numberAfterComma: 2, withThousandDelimitor: true });
};

const VoteProgress = ({ ayeVotes, className, isPassing, nayVotes, threshold }: Props) => {

	const thresholdNumber = bnToIntBalance(threshold);
	const ayeVotesNumber = bnToIntBalance(ayeVotes);
	const totalVotesNumber = bnToIntBalance(ayeVotes.add(nayVotes));
	const totalVotesNumberDivider = isPassing
		? bnToIntBalance(ayeVotes.add(threshold))
		: bnToIntBalance(nayVotes.add(threshold)) || 1;
	const thresholdPercent = isPassing
		? (1-thresholdNumber/totalVotesNumberDivider)*100
		: thresholdNumber / totalVotesNumberDivider*100;
	const ayePercent = ayeVotesNumber/totalVotesNumber*100;

	return (
		<div className={className}>
			<div className='voteNumbers'>Aye: {bnToStringBalanceDelimitor(ayeVotes)}</div>
			<div
				className='voteNumbers nay'
			>
				Nay: {bnToStringBalanceDelimitor(nayVotes)}
			</div>
			<Progress
				className={isPassing? 'passing': '' }
				percent={ayePercent}
			/>
			{
				// don't show the threshold if it's not been calculated yet
				thresholdPercent > 0 &&  <div
					id='passingThreshold'
					style={{ left: thresholdPercent + '%' }}
				>
					<hr/>
					<div
						className={ thresholdPercent < 50 ? 'threshold-left' : 'threshold-right'}
					>
						{isPassing ? 'Failing' : 'Passing'} threshold: {bnToStringBalanceDelimitor(threshold)}
					</div>
				</div>
			}
		</div>
	);
};

export default styled(VoteProgress)`
	position: relative;
	width: 100%;
	margin: 1rem 0 2.4rem 0;

	hr {
		width: 0.2rem;
		height: 2rem;
		border: none;
		background-color: grey_secondary;
		margin: -0.2rem 0 0 0;
	}

	.voteNumbers {
		display: inline-block;
		color: grey_primary;
		font-size: sm;
		margin-bottom: -1rem;
	}

	.nay {
		position: absolute;
		right: 0;
	}

	#passingThreshold {
		display: inline-block;
		position: absolute;
		white-space: nowrap;
		color: grey_primary;
		font-size: sm;
		margin-top: -1rem;
	}

	.threshold-left {
		position: absolute;
		left: 0;
	}

	.threshold-right {
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