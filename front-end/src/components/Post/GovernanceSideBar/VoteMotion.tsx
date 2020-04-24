// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import styled from '@xstyled/styled-components';
import React, { useContext, useEffect,useState } from 'react';
import { DropdownProps } from 'semantic-ui-react';
import { ApiContext } from 'src/context/ApiContext';
import { NotificationContext } from 'src/context/NotificationContext';
import { useGetCouncilMembersQuery } from 'src/generated/graphql';
import { LoadingStatusType,NotificationStatus } from 'src/types';
import AccountSelectionForm from 'src/ui-components/AccountSelectionForm';
import AyeNayButtons from 'src/ui-components/AyeNayButtons';
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
	motionId?: number | null
	motionProposalHash?: string
	onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
}

const VoteMotion = ({
	accounts,
	address,
	className,
	getAccounts,
	motionId,
	motionProposalHash,
	onAccountChange
}: Props) => {
	const { queueNotification } = useContext(NotificationContext);
	const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({ isLoading: false, message:'' });
	const [isCouncil, setIsCouncil] = useState(false);
	const [forceVote, setForceVote] = useState(false);
	const councilQueryresult = useGetCouncilMembersQuery();
	const currentCouncil: string[] = [];
	const { api, apiReady } = useContext(ApiContext);

	councilQueryresult.data?.councils?.[0]?.members?.forEach( member => {currentCouncil.push(member?.address);});

	useEffect( () => {
		// it will iterate through all accounts
		accounts.some(account => {
			if (currentCouncil.includes(account.address)){
				setIsCouncil(true);
				// this breaks the loop as soon as we find a matching address
				return true;
			}
			return false;
		});
	}, [accounts, currentCouncil]);

	const voteMotion = async (aye: boolean) => {
		if (!api) {
			console.error('polkadot/api not set');
			return;
		}

		if (!motionId && motionId !== 0) {
			console.error('motionId not set');
			return;
		}

		if (!motionProposalHash) {
			console.error('motionProposalHash not set');
			return;
		}

		setLoadingStatus({ isLoading: true, message: 'Waiting for signature' });
		const vote = api.tx.council.vote(motionProposalHash, motionId, aye);

		vote.signAndSend(address, ({ status }) => {
			if (status.isInBlock) {
				queueNotification({
					header: 'Success!',
					message: `Vote on motion #${motionId} successful.`,
					status: NotificationStatus.SUCCESS
				});
				setLoadingStatus({ isLoading: false, message: '' });
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
			<div>Only council members can vote on motions.</div><br/>
			<Button
				primary
				onClick={getAccounts}
			>
				Vote
			</Button>
		</Form.Field>;

	const noAccount = accounts.length === 0;

	const VotingForm = () =>
		<>
			{ noAccount
				? <GetAccountsButton />
				: loadingStatus.isLoading
					? <div className={'LoaderWrapper'}>
						<Loader text={loadingStatus.message}/>
					</div>
					: <Card>
						<AccountSelectionForm
							title='Second with account'
							accounts={accounts}
							address={address}
							onAccountChange={onAccountChange}
						/>
						<AyeNayButtons
							disabled={!apiReady}
							onClickAye={() => voteMotion(true)}
							onClickNay={() => voteMotion(false)}
						/>
					</Card>
			}
		</>;

	const NotCouncil = () =>
		<>
			<div>No account found from the council :(</div>
			<ButtonLink onClick={() => setForceVote(true)}>Let me try still.</ButtonLink>
		</>;

	return (
		<div className={className}>
			{isCouncil || forceVote
				? <VotingForm/>
				: <NotCouncil/>
			}
		</div>
	);
};

export default styled(VoteMotion)`
	.LoaderWrapper {
		height: 15rem;
	}

	.button-container {
		margin-top: 2rem !important;
	}
`;
