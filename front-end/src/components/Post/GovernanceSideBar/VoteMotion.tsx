
import React, { useContext, useState, useEffect } from 'react';
import styled from '@xstyled/styled-components';
import { /* Divider, */ Dropdown, DropdownProps, DropdownItemProps, Icon, Popup, Select } from 'semantic-ui-react';
import { ApiPromise } from '@polkadot/api';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import { Form } from '../../../ui-components/Form';
import Button from '../../../ui-components/Button';
import { NotificationContext } from '../../../context/NotificationContext';
import { NotificationStatus } from '../../../types';
import { useGetCouncilMembersQuery } from 'src/generated/graphql';

interface Props {
	accounts: InjectedAccountWithMeta[]
	address: string
	addressOptions: DropdownItemProps[]
	api?: ApiPromise
	apiReady?: boolean
	className?: string
	defaultAddress: string
	getAccounts: () => Promise<undefined>
	motionId?: number | null
	motionProposalHash?: string
	onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
}

const VoteMotion = ({
	accounts,
	address,
	addressOptions,
	api,
	apiReady,
	className,
	defaultAddress,
	getAccounts,
	motionId,
	motionProposalHash,
	onAccountChange
}: Props) => {
	const { queueNotification } = useContext(NotificationContext);
	const [isCouncil, setIsCouncil] = useState(false);
	const [forceVote, setForceVote] = useState(false);
	const councilQueryresult = useGetCouncilMembersQuery();
	const currentCouncil: string[] = [];
	councilQueryresult.data?.councils?.[0]?.members?.forEach( member => {currentCouncil.push(member?.address);});

	useEffect( () => {
		accounts.some(account => {
			if (currentCouncil.includes(account.address)){
				setIsCouncil(true);
				// this breaks the loop as soon as we find a matching address
				return true;
			}
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

		const vote = api.tx.council.vote(motionProposalHash, motionId, aye);

		vote.signAndSend(address, ({ status }) => {
			if (status.isFinalized) {
				queueNotification({
					header: 'Success!',
					message: `Vote on motion #${motionId} successfully finalized`,
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
			<Form.Group>
				<Form.Field width={16}>
					<label>Vote with account
						<Popup
							trigger={<Icon name='question circle'/>}
							content='You can choose account from polkadot-js extension.'
							style={{ fontSize: '1.2rem', marginLeft: '-1rem' }}
							hoverable={true}
						/>
					</label>
					<Dropdown
						defaultValue={defaultAddress || accounts[0]?.address}
						onChange={onAccountChange}
						options={addressOptions}
						selection
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
						onClick={() => voteMotion(false)}
					>
						<Icon name='thumbs down' />
						NAY
					</Button>
				</Form.Field>
				<Form.Field className='button-container' width={8}>
					<Button
						fluid
						primary
						disabled={!apiReady}
						onClick={() => voteMotion(true)}
					>
						<Icon name='thumbs up' />
						AYE
					</Button>
				</Form.Field>
			</Form.Group>
		</Form>;

	const NotCouncil = () =>
		<>
			<div>No account found from the council :(</div>
			<a href='#' onClick={() => setForceVote(true)}>Let me try still.</a>
		</>

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
