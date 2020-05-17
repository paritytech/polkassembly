// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import * as React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import Address from '../../../ui-components/Address';
import Card from '../../../ui-components/Card';
import CouncilSignalBar from '../../../ui-components/CouncilSignalBar';

interface Props {
	className?: string
}

const CouncilSignals = ({ className }: Props) => {
	const addresses = [
		'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F',
		'FoQJpPyadYccjavVdTWxpxU7rUEaYhfLCPwXgkfD6Zat9QP',
		'JKspFU6ohf1Grg3Phdzj2pSgWvsYWzSfKghhfzMbdhNBWs5',
		'Fr4NzY1udSFFLzb2R3qxVQkwz9cZraWkyfH4h3mVVk7BK7P'
	];

	return (
		<Card className={className}>
			<h3>Council Signals</h3>
			<CouncilSignalBar
				ayeSignals={3}
				naySignals={4}
			/>
			<Grid className='council-votes'>
				{addresses.map(address =>
					<Grid.Row key={address}>
						<Grid.Column width={12}>
							<div className='item'>
								<Address address={address} />
							</div>
						</Grid.Column>
						<Grid.Column width={4}>
							{address === 'HNZata7iMYWmk5RvZRTiAsSDhV8366zq2YGb3tLH5Upf74F' ? <>
								<div className='thumbs up'>
									<Icon name='thumbs up' />
								</div>
								<span> Aye</span>
							</> : <>
								<div className='thumbs down'>
									<Icon name='thumbs down' />
								</div>
								<span> Nay</span>
							</>}
						</Grid.Column>
					</Grid.Row>
				)}
			</Grid>
		</Card>
	);
};

export default styled(CouncilSignals)`
	.council-votes {
		margin-top: 2em;
	}
	.thumbs {
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		color: white;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		font-size: 1rem;
	}

	.thumbs.up {
		background-color: green_primary;
	}

	.thumbs.down {
		background-color: red_primary;
	}
`;
