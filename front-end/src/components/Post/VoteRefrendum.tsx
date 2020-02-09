
import React, { useContext, useState } from 'react';
import styled from '@xstyled/styled-components';
import { /* Divider, */ Icon } from 'semantic-ui-react';
import { ApiPromise } from '@polkadot/api';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import { Form } from '../../ui-components/Form';
import Button from '../../ui-components/Button';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';

interface Props {
	className?: string
	referendumId?: number | null | undefined
	api?: ApiPromise,
	apiReady?: boolean,
	getLinkedAccount: () => Promise<InjectedAccountWithMeta | undefined>
}

const VoteRefrendum = ({ className, api, apiReady, getLinkedAccount, referendumId }: Props) => {
	const { queueNotification } = useContext(NotificationContext);

	type ConvictionType = 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
	const [conviction, setConviction] = useState<ConvictionType>('Locked1x');

	const onConvictionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const convictionValue = event.currentTarget.value as ConvictionType;
		setConviction(convictionValue);
	};

	const voteRefrendum = async (aye: boolean) => {
		if (!api) {
			return;
		}

		const linkedAccount = await getLinkedAccount();

		if (!linkedAccount) {
			return;
		}

		if (!referendumId) {
			return;
		}

		const vote = api.tx.democracy.vote(referendumId, { aye, conviction });

		vote.signAndSend(linkedAccount.address, ({ status }) => {
			if (status.isFinalized) {
				queueNotification({
					header: 'Success!',
					message: `Vote on referendum #${referendumId} successfully finalized`,
					status: NotificationStatus.SUCCESS
				});
				console.log(`Completed at block hash #${status.asFinalized.toString()}`);
			} else {
				console.log(`Current status: ${status.type}`);
			}
		}).catch((error) => {
			console.log(':( transaction failed');
			console.error('ERROR:', error);
			queueNotification({
				header: 'Failed!',
				message: error.message,
				status: NotificationStatus.ERROR
			});
		});
	};

	return (
		<div className={className}>
			{/* <div className='card'>
				<h2>Votes</h2>
				<Divider/>
				<Grid>
					<Grid.Column width={6}>
						<div><b>Total KSM Locked</b></div>
						<div>241,547 KSM</div>
					</Grid.Column>
					<Grid.Column width={5}>
						<div><b>Turnout</b></div>
						<div>12,415%</div>
					</Grid.Column>
					<Grid.Column width={5}>
						<div><b>Threshold</b></div>
						<div>91.2%</div>
					</Grid.Column>
				</Grid>
				<Divider/>
				<Grid>
					<Grid.Column width={6}>
						<div><b>Total Votes</b></div>
						<div>2,311,547</div>
					</Grid.Column>
					<Grid.Column width={5}>
						<div><b>Yes</b></div>
						<div>1,588,731</div>
					</Grid.Column>
					<Grid.Column width={5}>
						<div><b>No</b></div>
						<div>725,826</div>
					</Grid.Column>
				</Grid>
			</div> */}
			<div className='card'>
				<h2>Your Vote</h2>
				<Form standalone={false}>
					<Form.Group>
						<Form.Field width={16}>
							<label>Vote Lock</label>
							<select onChange={onConvictionChange}>
								<option value='Locked1x'>2 weeks lock</option>
								<option value='Locked2x'>4 weeks lock</option>
								<option value='Locked3x'>6 weeks lock</option>
								<option value='Locked4x'>8 weeks lock</option>
								<option value='Locked5x'>10 weeks lock</option>
							</select>
							{/* <div>
								120 KSM * 2 Lock periods = <b>240 votes</b>
							</div> */}
						</Form.Field>
					</Form.Group>
					<Form.Group>
						<Form.Field width={8}>
							<label>&nbsp;</label>
							<Button
								fluid
								basic
								color='red'
								disabled={!apiReady}
								onClick={() => voteRefrendum(false)}
							>
								<Icon name='thumbs down' />
								NAY
							</Button>
						</Form.Field>
						<Form.Field width={8}>
							<label>&nbsp;</label>
							<Button
								fluid
								primary
								disabled={!apiReady}
								onClick={() => voteRefrendum(true)}
							>
								<Icon name='thumbs up' />
								AYE
							</Button>
						</Form.Field>
					</Form.Group>
				</Form>
			</div>
			{/* <div className='card'>
				<h2>Timeline</h2>
				<Grid>
					<Grid.Column width={8}>
						<div><b>Blocks Remaining</b></div>
						<div>69,420</div>
					</Grid.Column>
					<Grid.Column width={8}>
						<div><b>Enact at</b></div>
						<div>Block 240,000</div>
					</Grid.Column>
				</Grid>
			</div> */}
		</div>
	);
};

export default styled(VoteRefrendum)`
	.card {
		background-color: white;
		padding: 2rem 3rem 4rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
		margin-bottom: 1rem;
	}
`;
