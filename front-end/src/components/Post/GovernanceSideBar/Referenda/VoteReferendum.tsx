// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React, { useContext, useState, useMemo } from 'react';
import { DropdownProps, Select } from 'semantic-ui-react';

import AccountSelectionForm from '../../../../ui-components/AccountSelectionForm';
import AyeNayButtons from '../../../../ui-components/AyeNayButtons';
import Balance from '../../../Balance';
import { ApiContext } from 'src/context/ApiContext';
import { NotificationContext } from 'src/context/NotificationContext';
import { NotificationStatus, LoadingStatusType } from 'src/types';
import Button from 'src/ui-components/Button';
import { Form } from 'src/ui-components/Form';
import HelperTooltip from 'src/ui-components/HelperTooltip';
import BalanceInput from 'src/ui-components/BalanceInput';
import Loader from 'src/ui-components/Loader';

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
	const [lockedBalance, setLockedBalance] = useState<BN | undefined>(undefined);
	const { api, apiReady } = useContext(ApiContext);
	const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({ isLoading: false, message: '' });
	const CONVICTIONS: [number, number][] = [1, 2, 4, 8, 16, 32].map((lock, index) => [index + 1, lock]);

	const convictionOpts = useMemo(() => [
		{ text: '0.1x voting balance, no lockup period', value: 0 },
		...CONVICTIONS.map(([value, lock]): { text: string; value: number } => ({
			text: `${value}x voting balance, locked for ${lock} enactment period(s)`,
			value
		}))
	],[CONVICTIONS]);
	const [conviction, setConviction] = useState<number>(convictionOpts[1].value);

	const onConvictionChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		setConviction(Number(data.value));
	};

	const onBalanceChange = (balance: BN) => setLockedBalance(balance);
	const voteRefrendum = async (aye: boolean) => {
		if (!api) {
			console.error('polkadot/api not set');
			return;
		}

		if (!referendumId && referendumId !== 0) {
			console.error('referendumId not set');
			return;
		}

		setLoadingStatus({ isLoading: true, message: 'Waiting for signature' });

		const voteTx = api.tx.democracy.vote(referendumId, { Standard: { balance: lockedBalance, vote: { aye, conviction } } });

		voteTx.signAndSend(address, ({ status }) => {
			if (status.isInBlock) {
				setLoadingStatus({ isLoading: false, message: '' });
				queueNotification({
					header: 'Success!',
					message: `Vote on referendum #${referendumId} successful.`,
					status: NotificationStatus.SUCCESS
				});
				console.log(`Completed at block hash #${status.asInBlock.toString()}`);
			} else {
				if (status.isBroadcast){
					setLoadingStatus({ isLoading: true, message: 'Broadcasting the vote' });
				}
				console.log(`Current status: ${status.type}`);
			}
		}).catch((error) => {
			setLoadingStatus({ isLoading: false, message: '' });
			console.log(':( transaction failed');
			console.error('ERROR:', error);
			queueNotification({
				header: 'Failed!',
				message: error.message,
				status: NotificationStatus.ERROR
			});
		});
	};

	const GetAccountsButton = () =>
		<Form.Field className='button-container'>
			<Button
				primary
				onClick={getAccounts}
			>
				Vote
			</Button>
		</Form.Field>;

	const noAccount = accounts.length === 0;

	const VoteLock = () =>
		<Form.Field>
			<label>Vote lock
				<HelperTooltip
					content='You can multiply your votes by locking your tokens for longer periods of time.'
				/>
			</label>
			<Select
				onChange={onConvictionChange}
				options={convictionOpts}
				value={conviction}
			/>
		</Form.Field>;

	return (
		<div className={className}>
			{ noAccount
				? <GetAccountsButton />
				: loadingStatus.isLoading
					? <div className={'LoaderWrapper'}>
						<Loader text={loadingStatus.message}/>
					</div>
					: <>
						<AccountSelectionForm
							accounts={accounts}
							address={address}
							onAccountChange={onAccountChange}
						/>
						{api && <Balance address={address} />}
						<BalanceInput
							label={'Lock balance'}
							helpText={'Amount of you are willing to lock for this vote.'}
							onChange={onBalanceChange}
						/>
						<VoteLock/>
						<AyeNayButtons
							disabled={!apiReady}
							onClickAye={() => voteRefrendum(true)}
							onClickNay={() => voteRefrendum(false)}
						/>
					</>
			}
		</div>
	);
};

export default styled(VoteRefrendum)`
	.LoaderWrapper {
		height: 15rem;
	}

	.button-container {
		margin-top: 2rem !important;
	}
`;
