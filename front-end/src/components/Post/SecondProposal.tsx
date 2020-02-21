import React, { useContext } from 'react';
import { /* Divider, */ Dropdown, DropdownItemProps, DropdownProps, Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import { ApiPromise } from '@polkadot/api';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import { Form } from '../../ui-components/Form';
import Button from '../../ui-components/Button';
import HelperTooltip from '../../ui-components/HelperTooltip';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';

interface Props {
	className?: string
	proposalId?: number | null | undefined
	api?: ApiPromise,
	apiReady?: boolean,
	address: string
	defaultAddress: string
	addressOptions: DropdownItemProps[]
	accounts: InjectedAccountWithMeta[]
	onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
	getAccounts: () => Promise<undefined>
}

const SecondProposal = ({ className, api, apiReady, proposalId, address, defaultAddress, accounts, addressOptions, onAccountChange, getAccounts }: Props) => {
	const { queueNotification } = useContext(NotificationContext);

	const secondProposal = async () => {
		if (!api) {
			console.error('polkadot/api not set');
			return;
		}

		if (!proposalId) {
			console.error('proposalId not set');
			return;
		}

		const second = api.tx.democracy.second(proposalId);

		second.signAndSend(address, ({ status }) => {
			if (status.isFinalized) {
				queueNotification({
					header: 'Success!',
					message: `Vote on proposal #${proposalId} successfully finalized`,
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

	if (accounts.length === 0) {
		return (
			<div className={className}>
				<div className='card'>
					<Form standalone={false}>
						<h4>Vote</h4>
						<Form.Group>
							<Form.Field className='button-container'>
								<Button
									primary
									onClick={getAccounts}
								>
									Second
								</Button>
							</Form.Field>
						</Form.Group>
					</Form>
				</div>
			</div>
		);
	}

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
								<label>Vote with account
									<HelperTooltip
										content='You can choose an account from the Polkadot-js extension.'
									/>
								</label>
								<Dropdown
									onChange={onAccountChange}
									defaultValue={defaultAddress || accounts[0].address}
									selection
									options={addressOptions}
								/>
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

	@media only screen and (max-width: 768px) {
		.ui.form {
			padding: 0rem;
		}

		.button-container {
			margin-bottom: 1rem!important;
		}
	}
`;
