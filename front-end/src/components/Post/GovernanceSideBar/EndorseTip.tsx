// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { ApiPromiseContext } from '@substrate/context';
import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React, { useContext, useEffect,useState } from 'react';
import { DropdownProps } from 'semantic-ui-react';
import { NotificationContext } from 'src/context/NotificationContext';
import { UserDetailsContext } from 'src/context/UserDetailsContext';
import { useGetCouncilMembersQuery } from 'src/generated/graphql';
import { LoadingStatusType, NotificationStatus } from 'src/types';
import AccountSelectionForm from 'src/ui-components/AccountSelectionForm';
import BalanceInput from 'src/ui-components/BalanceInput';
import Button from 'src/ui-components/Button';
import ButtonLink from 'src/ui-components/ButtonLink';
import Card from 'src/ui-components/Card';
import { Form } from 'src/ui-components/Form';
import Loader from 'src/ui-components/Loader';

interface Props {
	accounts: InjectedAccountWithMeta[]
	address: string
	className?: string
	getAccounts: () => Promise<undefined>
	tipHash?: string
	onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
}

const EndorseTip = ({
	accounts,
	address,
	className,
	getAccounts,
	tipHash,
	onAccountChange
}: Props) => {
	const ZERO = new BN(0);
	const { queueNotification } = useContext(NotificationContext);
	const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({ isLoading: false, message:'' });
	const [endorseValue, setEndorseValue] = useState<BN>(ZERO);
	const [isCouncil, setIsCouncil] = useState(false);
	const [forceEndorse, setForceEndorse] = useState(false);
	const councilQueryresult = useGetCouncilMembersQuery();
	const [currentCouncil, setCurrentCouncil] = useState<string[]>([]);
	const { api, isApiReady } = useContext(ApiPromiseContext);
	const { addresses } = useContext(UserDetailsContext);

	councilQueryresult.data?.councils?.[0]?.members?.forEach( member => {
		setCurrentCouncil([...currentCouncil, member?.address]);
	});

	useEffect(() => {
		// it will iterate through all addresses
		addresses && addresses.some(address => {
			if (currentCouncil.includes(address)) {
				setIsCouncil(true);
				// this breaks the loop as soon as we find a matching address
				return true;
			}
			return false;
		});
	}, [addresses, currentCouncil]);

	const onValueChange = (balance: BN) => setEndorseValue(balance);

	const handleEndorse = async () => {
		if (!tipHash) {
			console.error('tipHash not set');
			return;
		}

		setLoadingStatus({ isLoading: true, message: 'Waiting for signature' });
		const endorse = api.tx.treasury.tip(tipHash, endorseValue);

		endorse.signAndSend(address, ({ status }) => {
			if (status.isInBlock) {
				queueNotification({
					header: 'Success!',
					message: `Endorse tip #${tipHash} successful.`,
					status: NotificationStatus.SUCCESS
				});
				setLoadingStatus({ isLoading: false, message: '' });
				console.log(`Completed at block hash #${status.asInBlock.toString()}`);
			} else {
				if (status.isBroadcast){
					setLoadingStatus({ isLoading: true, message: 'Broadcasting the endorsement' });
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
		<Form.Group>
			<Form.Field className='button-container'>
				<div>Only council members can endorse tips.</div><br/>
				<Button
					primary
					onClick={getAccounts}
				>
					Endorse
				</Button>
			</Form.Field>
		</Form.Group>;

	const noAccount = accounts.length === 0;

	const endorse = noAccount
		? <GetAccountsButton/>
		: loadingStatus.isLoading
			? <Card className={'LoaderWrapper'}>
				<Loader text={loadingStatus.message}/>
			</Card>
			: <Card>
				<AccountSelectionForm
					title='Endorse with account'
					accounts={accounts}
					address={address}
					onAccountChange={onAccountChange}
					withBalance
				/>
				<BalanceInput
					label={'Value'}
					helpText={'Allocate a suggested tip amount. With enough endorsements, the suggested values are averaged and sent to the beneficiary.'}
					placeholder={'123'}
					onChange={onValueChange}
				/>
				<Button
					primary
					disabled={!isApiReady}
					onClick={handleEndorse}
				>
					Endorse
				</Button>
			</Card>;

	const NotCouncil = () =>
		<>
			<div>No account found from the council :(</div>
			<ButtonLink onClick={() => setForceEndorse(true)}>Let me try still.</ButtonLink>
		</>;

	return (
		<div className={className}>
			{isCouncil || forceEndorse
				? endorse
				: <NotCouncil/>
			}
		</div>
	);
};

export default styled(EndorseTip)`
	.LoaderWrapper {
		height: 15rem;
		position: absolute;
		width: 100%;
	}
`;
