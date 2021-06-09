// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import * as React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import { useBlockTime } from '../hooks';
import useCurrentBlock from '../hooks/useCurrentBlock';
import Card from '../ui-components/Card';
import StatusTag from '../ui-components/StatusTag';
import blockToTime from '../util/blockToTime';
import getNetwork from '../util/getNetwork';

const NETWORK = getNetwork();

interface BlockStatus {
	blockNumber: number
	status: string
}

interface Props {
	className?: string
	statuses: BlockStatus[]
}

function sortfunc(a: BlockStatus, b: BlockStatus) {
	return a.blockNumber - b.blockNumber;
}

const Timeline = ({ className, statuses }: Props) => {
	const { blocktime } = useBlockTime();
	const ZERO = new BN(0);
	const currentBlock = useCurrentBlock() || ZERO;

	return (
		<Grid className={className}>
			<Grid.Column>
				<h4>Timeline</h4>
				<Grid.Row>
					{statuses.sort(sortfunc).map(({ blockNumber, status }) => (
						<Card key={status} className='timelineCard'>
							<StatusTag className='post_tags' status={status}/>
							<span>
								{' at block'} <a href={`https://${NETWORK}.subscan.io/block/${blockNumber}`}>#{`${blockNumber} `}</a>
								{currentBlock.toNumber()
									? <span className='padl'><Icon name='clock'/>{blockToTime(currentBlock.toNumber() - blockNumber, blocktime)} ago</span>
									: null
								}
							</span>
						</Card>
					))}
				</Grid.Row>
			</Grid.Column>
		</Grid>
	);
};

export default styled(Timeline)`
	.timelineCard {
		a {
			color: pink_secondary;
			font-size: 1.3rem;

			i {
				font-size: 1.5rem;
			}
		}
	}

	.padl {
		padding-left: 10px;
	}
`;
