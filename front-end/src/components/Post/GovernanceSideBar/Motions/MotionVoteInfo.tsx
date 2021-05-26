// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { ApiContext } from 'src/context/ApiContext';
import HelperTooltip from 'src/ui-components/HelperTooltip';

import { CouncilVote, Vote } from '../../../../types';
import Address from '../../../../ui-components/Address';
import Card from '../../../../ui-components/Card';

interface Props {
	className?: string
	motionId: number
}

const MotionVoteInfo = ({ className, motionId }: Props) => {
	const { api, apiReady } = useContext(ApiContext);
	const [councilVotes, setCouncilVotes] = useState<CouncilVote[]>([]);

	useEffect(() => {
		if (!api) {
			return;
		}

		if (!apiReady) {
			return;
		}

		let unsubscribe: () => void;

		const councilVotes: CouncilVote[] = [];

		api.derive.council.proposals((motions) => {
			const motion = motions.filter(mo => mo.votes?.index.toNumber() === motionId)[0];

			if (!motion) {
				return;
			}

			motion.votes?.ayes.forEach(vote => {
				councilVotes.push({
					address: vote.toString(),
					vote: Vote.AYE
				});
			});

			motion.votes?.nays.forEach(vote => {
				councilVotes.push({
					address: vote.toString(),
					vote: Vote.NAY
				});
			});

			setCouncilVotes(councilVotes);
		}).then( unsub => {unsubscribe = unsub;})
			.catch(console.error);

		return () => unsubscribe && unsubscribe();
	}, [api, apiReady, motionId]);

	if (!councilVotes.length) {
		return null;
	}

	return (
		<Card className={className}>
			<h3>Council Votes <HelperTooltip content='This represents the onchain votes of council members'/></h3>
			<Grid className='council-votes'>
				{councilVotes.map(councilVote =>
					<Grid.Row key={councilVote.address}>
						<Grid.Column width={12}>
							<div className='item'>
								<Address address={councilVote.address} />
							</div>
						</Grid.Column>
						<Grid.Column width={4}>
							{councilVote.vote === Vote.AYE ? <>
								<div className='thumbs up'>
									<Icon name='thumbs up' />
								</div> Aye
							</> : <>
								<div className='thumbs down'>
									<Icon name='thumbs down' />
								</div> Nay
							</>}
						</Grid.Column>
					</Grid.Row>
				)}
			</Grid>
		</Card>
	);
};

export default styled(MotionVoteInfo)`
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
