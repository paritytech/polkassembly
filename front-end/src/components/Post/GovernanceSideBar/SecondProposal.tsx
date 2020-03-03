import React, { useContext } from 'react';
import { DropdownProps } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import { ApiPromise } from '@polkadot/api';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import { Form } from '../../../ui-components/Form';
import Button from '../../../ui-components/Button';
import HelperTooltip from '../../../ui-components/HelperTooltip';
import { NotificationContext } from '../../../context/NotificationContext';
import { NotificationStatus } from '../../../types';
import AddressDropdown from '../AddressDropdown';

interface Props {
	accounts: InjectedAccountWithMeta[]
	address: string
	api?: ApiPromise,
	apiReady?: boolean,
	className?: string
	proposalId?: number | null | undefined
	getAccounts: () => Promise<undefined>
	onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
}

const SecondProposal = ({ className, api, apiReady, proposalId, address, accounts, onAccountChange, getAccounts }: Props) => {
	const { queueNotification } = useContext(NotificationContext);

	const secondProposal = async () => {
		if (!api) {
			console.error('polkadot/api not set');
			return;
		}

		if (!proposalId && proposalId !== 0) {
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
				<h4>Seconding</h4>
				<Form standalone={false}>
					<Form.Group>
						<Form.Field width={16}>
							<label>Vote with account
								<HelperTooltip
									content='You can choose an account from the Polkadot-js extension.'
								/>
							</label>
							<AddressDropdown
								accounts={accounts}
								defaultAddress={address || accounts[0]?.address}
								onAccountChange={onAccountChange}
							/>
							<Button
								primary
								disabled={!apiReady}
								onClick={secondProposal}
							>
								Second
							</Button>
						</Form.Field>
					</Form.Group>
				</Form>
			</div>
		</div>
	);
};

export default styled(SecondProposal)`
	.card {
		background-color: white;
		padding: 2rem 3rem 3rem 3rem;
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