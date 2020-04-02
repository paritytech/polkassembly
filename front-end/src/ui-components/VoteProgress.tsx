// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { formatBalance } from '@polkadot/util';
import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import { Progress } from 'semantic-ui-react';
import React from 'react';

import { chainProperties } from 'src/global/networkConstants';
import getNetwork from 'src/util/getNetwork';

interface Props {
	ayeVotes: BN,
	className?: string,
	nayVotes: BN,
	passingThreshold: BN,
	totalVotes: BN,
}

const bnToIntBalance = function (bn: BN): number{
	return  Number(formatBalance(bn, { withSi:false, withUnit:false }));
};

const VoteProgress = ({ ayeVotes, className, nayVotes, passingThreshold, totalVotes }: Props) => {
	const network = getNetwork();
	const tokenSymbol = chainProperties[network].tokenSymbol;

	const nayVotesNumber = bnToIntBalance(nayVotes);
	const passingThresholdNumber = bnToIntBalance(passingThreshold);
	const isPassing = passingThreshold.lt(ayeVotes);
	const ayeVotesNumber = bnToIntBalance(ayeVotes);
	const totalVotesNumber = bnToIntBalance(totalVotes);
	const passingThresholdPercent = isPassing
		? (passingThresholdNumber/totalVotesNumber)*100
		: ((passingThresholdNumber)/(passingThresholdNumber+nayVotesNumber))*100;
	const ayePercent = (ayeVotesNumber/totalVotesNumber)*100;
	console.log('nayVotes',formatBalance(nayVotes, { withSi:false, withUnit:false }), 'nayVotesNumber',nayVotesNumber, 'totalVotes', totalVotes.toString(), 'passingThresholdNumber', passingThresholdNumber, 'isPassing',isPassing, 'ayeNumber',ayeVotesNumber , 'totalVotesNumber',totalVotesNumber, 'ayePercent',ayePercent);

	return (
		<div className={className}>
			<div className='voteNumbers'>Aye: {ayeVotesNumber} {tokenSymbol}</div>
			<div
				className='voteNumbers'
				style={{ left: ayePercent + '%', position: 'absolute' }}
			>
				Nay: {nayVotesNumber} {tokenSymbol}
			</div>
			<Progress
				className={isPassing? 'passing': '' }
				percent={ayePercent}
			/>
			<div
				id='passingThreshold'
				style={{ left: passingThresholdPercent + '%', position: 'absolute' }}
			>
				<hr/>
				Threshold: {passingThresholdNumber} {tokenSymbol}
			</div>
		</div>
	);
};

export default styled(VoteProgress)`
	width: 100%;
	margin: 1rem 0 2.4rem 0;

	hr {
		width: 0.2rem;
		height: 1.5rem;
		border: none;
		background-color: grey_secondary;
		margin: -0.2rem 0 0 0;
	}

	.voteNumbers {
		display: inline-block;
		color: grey_primary;
		font-size: s;
		margin-bottom: -1rem;
	}

	#passingThreshold {
		display: inline-block;
		color: grey_primary;
		font-size: s;
		margin-top: -1rem;
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