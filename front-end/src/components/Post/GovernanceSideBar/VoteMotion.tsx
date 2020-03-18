// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useState, useEffect } from 'react';
import styled from '@xstyled/styled-components';
import { DropdownProps } from 'semantic-ui-react';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import { ApiContext } from '../../../context/ApiContext';
import { NotificationContext } from '../../../context/NotificationContext';
import { useGetCouncilMembersQuery } from 'src/generated/graphql';
import { NotificationStatus, LoadingStatusType } from '../../../types';
import Button from '../../../ui-components/Button';
import { Form } from '../../../ui-components/Form';
import Loader from 'src/ui-components/Loader';
import AyeNayButtons from './AyeNayButtons';
import AccountSelectionForm from './AccountSelectionForm';

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
			if (status.isFinalized || status.isInBlock) {
				queueNotification({
					header: 'Success!',
					message: `Vote on motion #${motionId} successfully finalized`,
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

	if (accounts.length === 0) {
		return (
			<div className={className}>
				<div className='card'>
					<Form standalone={false}>
						<h4>Vote</h4>
						<Form.Group>
							<Form.Field className='button-container'>
								<div>Only council members can vote on motions.</div><br/>
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

	const VotingForm = () =>
		<Form standalone={false}>
			<h4>Vote</h4>
			{loadingStatus.isLoading
				? <div className={'LoaderWrapper'}>
					<Loader text={loadingStatus.message}/>
				</div>
				: <>
					<AccountSelectionForm
						accounts={accounts}
						address={address}
						onAccountChange={onAccountChange}
					/>
					<AyeNayButtons
						disabled={!apiReady}
						onClickAye={() => voteMotion(true)}
						onClickNay={() => voteMotion(false)}
					/>
				</>
			}
		</Form>;

	const NotCouncil = () =>
		<>
			<div>No account found from the council :(</div>
			<a href='#' onClick={() => setForceVote(true)}>Let me try still.</a>
		</>;

	return (
		<div className={className}>
			<div className='card'>
				{isCouncil || forceVote
					? <VotingForm/>
					: <NotCouncil/>
				}

			</div>
		</div>
	);
};

export default styled(VoteMotion)`
	.card {
		background-color: white;
		padding: 2rem 3rem 4rem 3rem;
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
		border-radius: 0rem;
	}

	.ui.dropdown .menu .active.item {
		font-weight: 500;
	}

	.ui.dropdown .menu>.item:hover {
		background-color: grey_light;
	}

	.ui.selection.dropdown:focus, .ui.selection.active.dropdown, .ui.selection.active.dropdown:hover, .ui.selection.active.dropdown .menu {
		border-color: grey_light;
	}

	i.icon.question.circle:before {
		color: grey_secondary;
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
