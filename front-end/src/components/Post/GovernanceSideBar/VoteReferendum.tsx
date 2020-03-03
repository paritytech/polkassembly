
import React, { useContext, useState } from 'react';
import styled from '@xstyled/styled-components';
import { DropdownProps, Icon, Select } from 'semantic-ui-react';
import { ApiPromise } from '@polkadot/api';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import AddressDropdown from '../AddressDropdown';
import Balance from '../../Balance';
import { NotificationContext } from '../../../context/NotificationContext';
import Button from '../../../ui-components/Button';
import { Form } from '../../../ui-components/Form';
import HelperTooltip from '../../../ui-components/HelperTooltip';
import { NotificationStatus } from '../../../types';

type ConvictionType = 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';

interface Props {
	className?: string
	referendumId?: number | null | undefined
	api?: ApiPromise
	apiReady?: boolean
	address: string
	accounts: InjectedAccountWithMeta[]
	onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
	getAccounts: () => Promise<undefined>
}

const VoteRefrendum = ({ className, referendumId, api, apiReady, address, accounts, onAccountChange, getAccounts }: Props) => {
	const { queueNotification } = useContext(NotificationContext);
	const options: {text: string, value: ConvictionType}[] = [
		{ text: '1x time lock', value: 'Locked1x' },
		{ text: '2x time lock', value: 'Locked2x' },
		{ text: '3x time lock', value: 'Locked3x' },
		{ text: '4x time lock', value: 'Locked4x' },
		{ text: '5x time lock', value: 'Locked5x' }
	];
	const [conviction, setConviction] = useState<ConvictionType>(options[0].value);

	const onConvictionChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		const convictionValue = data.value as ConvictionType;
		setConviction(convictionValue);
	};

	const voteRefrendum = async (aye: boolean) => {
		if (!api) {
			console.error('polkadot/api not set');
			return;
		}

		if (!referendumId && referendumId !== 0) {
			console.error('referendumId not set');
			return;
		}

		const vote = api.tx.democracy.vote(referendumId, { aye, conviction });

		vote.signAndSend(address, ({ status }) => {
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
									Vote
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
				<Form standalone={false}>
					<h4>Vote</h4>
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
							{api ? (
								<Balance api={api} address={address} />
							) : null}
							<label>Vote Lock
								<HelperTooltip
									content='You can multiply your votes by locking your tokens for longer periods of time.'
								/>
							</label>
							<Select
								onChange={onConvictionChange}
								options={options}
								defaultValue={options[0].value}
							/>
						</Form.Field>
					</Form.Group>
					<Form.Group>
						<Form.Field className='button-container' width={8}>
							<Button
								fluid
								basic
								className='primary negative'
								disabled={!apiReady}
								onClick={() => voteRefrendum(false)}
							>
								<Icon name='thumbs down' />
								Nay
							</Button>
						</Form.Field>
						<Form.Field className='button-container' width={8}>
							<Button
								fluid
								className='primary positive'
								disabled={!apiReady}
								onClick={() => voteRefrendum(true)}
							>
								<Icon name='thumbs up' />
								Aye
							</Button>
						</Form.Field>
					</Form.Group>
				</Form>
			</div>
		</div>
	);
};

export default styled(VoteRefrendum)`
	.card {
		background-color: white;
		padding: 2rem 3rem 3rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
		margin-bottom: 1rem;
		@media only screen and (max-width: 768px) {
			padding: 2rem;
		}
	}

	.ui.selection.dropdown {
		border-color: grey_light;
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