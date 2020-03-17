// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useState } from 'react';
import styled from '@xstyled/styled-components';
import { DropdownProps, Select } from 'semantic-ui-react';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import AccountSelectionForm from './AccountSelectionForm';
import AyeNayButtons from './AyeNayButtons';
import Balance from '../../Balance';
import { ApiContext } from '../../../context/ApiContext';
import { NotificationContext } from '../../../context/NotificationContext';
import Button from '../../../ui-components/Button';
import { Form } from '../../../ui-components/Form';
import HelperTooltip from '../../../ui-components/HelperTooltip';
import { NotificationStatus } from '../../../types';
import Loader from 'src/ui-components/Loader';

type ConvictionType = 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';

interface Props {
	className?: string
	referendumId?: number | null | undefined
	address: string
	accounts: InjectedAccountWithMeta[]
	onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
	getAccounts: () => Promise<undefined>
}

const VoteRefrendum = ({ className, referendumId, address, accounts, onAccountChange, getAccounts }: Props) => {
	const { queueNotification } = useContext(NotificationContext);
	const { api, apiReady } = useContext(ApiContext);
	const [isLoading, setIsLoading] = useState(false);
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

		setIsLoading(true);
		const vote = api.tx.democracy.vote(referendumId, { aye, conviction });

		vote.signAndSend(address, ({ status }) => {
			if (status.isFinalized) {
				setIsLoading(false);
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
			setIsLoading(false);
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

	const VoteLock = () =>
		<>
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
		</>;

	return (
		<div className={className}>
			<div className='card'>
				<Form standalone={false}>
					<h4>Vote</h4>
					{isLoading
						? <div className={'LoaderWrapper'}>
							<Loader text={'Broadcasting your vote'}/>
						</div>
						: <Form.Group>
							<AccountSelectionForm
								accounts={accounts}
								address={address}
								onAccountChange={onAccountChange}
							/>
							{api && <Balance address={address} />}
							<VoteLock/>
							<AyeNayButtons
								disabled={!apiReady}
								onClickAye={() => voteRefrendum(true)}
								onClickNay={() => voteRefrendum(false)}
							/>
						</Form.Group>
					}
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

	.LoaderWrapper {
		height: 15rem;
	}

	.ui.selection.dropdown {
		border-color: grey_light;
	}

	@media only screen and (max-width: 768px) {
		.ui.form {
			padding: 0rem;
		}
	}
`;
