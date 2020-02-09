import React, { useContext } from 'react';
import { /* Divider, */ Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import { ApiPromise } from '@polkadot/api';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import { Form } from '../../ui-components/Form';
import Button from '../../ui-components/Button';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';

interface Props {
	className?: string
	proposalId?: number | null | undefined
	api?: ApiPromise,
	apiReady?: boolean,
	getLinkedAccount: () => Promise<InjectedAccountWithMeta | undefined>
}

const SecondProposal = ({ className, api, apiReady, getLinkedAccount, proposalId }: Props) => {
	const { queueNotification } = useContext(NotificationContext);

	const secondProposal = async () => {
		if (!api) {
			return;
		}

		const linkedAccount = await getLinkedAccount();

		if (!linkedAccount) {
			return;
		}

		if (!proposalId) {
			return;
		}

		const second = api.tx.democracy.second(proposalId);

		second.signAndSend(linkedAccount.address, ({ status }) => {
			if (status.isFinalized) {
				queueNotification({
					header: 'Success!',
					message: `Completed at block hash #${status.asFinalized.toString()}`,
					status: NotificationStatus.SUCCESS
				});
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
			<div className='card'>
				<h2>Seconding</h2>
				<Grid>
					{/* <Grid.Column width={6}>
						<div><b>Deposit Amount</b></div>
						<div>100 KSM</div>
					</Grid.Column>
					<Grid.Column width={5}>
						<div><b>Seconded By</b></div>
						<div>212 Addresses</div>
					</Grid.Column>
					<Grid.Column width={5}>
						<div><b>Locked KSM</b></div>
						<div>21200 KSM</div>
					</Grid.Column> */}
					<Form standalone={false}>
						<Form.Group>
							<Form.Field>
								<label>&nbsp;</label>
								<Button
									primary
									disabled={!apiReady}
									onClick={secondProposal}
								>
									SECOND
								</Button>
							</Form.Field>
						</Form.Group>
					</Form>
				</Grid>
			</div>
		</div>
	);
};

export default styled(SecondProposal)`
	.card {
		background-color: white;
		padding: 2rem 3rem 4rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
		margin-bottom: 1rem;
	}
`;
