import React, { useContext, useEffect, useState } from 'react';
import { Divider, Grid, Icon } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Accounts, web3FromSource, web3Enable } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import { Form } from '../../ui-components/Form';
import Button from '../../ui-components/Button';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';

interface Props {
	className?: string;
	isProposal?: boolean
	isReferendum?: boolean
	onchainId?: number | null | undefined
}

const APP = 'polkassembly';
const WS_PROVIDER = 'ws://127.0.0.1:9944';

const Democracy = ({ className, isProposal, isReferendum, onchainId }: Props) => {
	const currentUser = useContext(UserDetailsContext);

	type ConvictionType = 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
	const [conviction, setConviction] = useState<ConvictionType>('Locked1x');
	const [api, setApi] = useState<ApiPromise>();
	const [apiReady, setApiReady] = useState(false);
	const { queueNotification } = useContext(NotificationContext);

	const onConvictionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const convictionValue = event.currentTarget.value as ConvictionType;
		setConviction(convictionValue);
	};

	useEffect(() => {
		async function connect() {
			const provider = new WsProvider(WS_PROVIDER);
			const apiResult = await ApiPromise.create({ provider });

			setApi(apiResult);
			apiResult.isReady.then(() => {
				setApiReady(true);
				console.log('API ready');
			});
		}

		connect().catch((error) => {
			queueNotification({
				header: 'Failed!',
				message: error.message,
				status: NotificationStatus.ERROR
			});
		});
	}, []);

	const getLinkedAccount = async (): Promise<InjectedAccountWithMeta | undefined> => {
		const extensions = await web3Enable(APP);

		if (extensions.length === 0) {
			queueNotification({
				header: 'Failed!',
				message: 'Please install polkadot js extenstion to use this feature',
				status: NotificationStatus.ERROR
			});

			return;
		}

		const accounts = await web3Accounts();

		if (accounts.length === 0) {
			queueNotification({
				header: 'Failed!',
				message: 'Please add accounts to polkadot js extenstion to use this feature',
				status: NotificationStatus.ERROR
			});

			return;
		}

		const accountMap: {[key: string]: InjectedAccountWithMeta} = {};

		accounts.forEach(account => {
			accountMap[account.address] = account;
		});

		const linkedAddress = currentUser?.addresses && currentUser?.addresses[0];

		if (!linkedAddress) {
			queueNotification({
				header: 'Failed!',
				message: 'Please link an address in settings',
				status: NotificationStatus.ERROR
			});

			return;
		}

		const linkedAccount = accountMap[linkedAddress || ''];

		if (!linkedAccount) {
			queueNotification({
				header: 'Failed!',
				message: 'Linked account not available',
				status: NotificationStatus.ERROR
			});

			return;
		}

		const injected = await web3FromSource(linkedAccount.meta.source);

		if (api) {
			api.setSigner(injected.signer);
		}

		return linkedAccount;
	};

	const secondProposal = async () => {
		if (!api) {
			return;
		}

		const linkedAccount = await getLinkedAccount();

		if (!linkedAccount) {
			return;
		}

		const second = api.tx.democracy.second(onchainId || 0);

		second.signAndSend(linkedAccount.address, ({ status }) => {
			if (status.isFinalized) {
				queueNotification({
					header: 'Success!',
					message: `Completed at block hash #${status.asFinalized.toString()}`,
					status: NotificationStatus.SUCCESS
				});
			} else {
				queueNotification({
					header: 'Info!',
					message: `Current status: ${status.type}`,
					status: NotificationStatus.WARNING
				});
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

	const voteRefrendum = async (aye: boolean) => {
		if (!api) {
			return;
		}

		const linkedAccount = await getLinkedAccount();

		if (!linkedAccount) {
			return;
		}

		const vote = api.tx.democracy.vote(onchainId || 0, { aye, conviction });

		vote.signAndSend(linkedAccount.address, ({ status }) => {
			if (status.isFinalized) {
				queueNotification({
					header: 'Success!',
					message: `Completed at block hash #${status.asFinalized.toString()}`,
					status: NotificationStatus.SUCCESS
				});
			} else {
				queueNotification({
					header: 'Info!',
					message: `Current status: ${status.type}`,
					status: NotificationStatus.WARNING
				});
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

	if (isProposal) {
		return (
			<div className={className}>
				<div className='card'>
					<h2>Seconding</h2>
					<Grid>
						<Grid.Column width={6}>
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
						</Grid.Column>
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
	}

	if (isReferendum) {
		return (
			<div className={className}>
				<div className='card'>
					<h2>Votes</h2>
					<Divider/>
					<Grid>
						<Grid.Column width={6}>
							<div><b>Total KSM Locked</b></div>
							<div>241,547 KSM</div>
						</Grid.Column>
						<Grid.Column width={5}>
							<div><b>Turnout</b></div>
							<div>12,415%</div>
						</Grid.Column>
						<Grid.Column width={5}>
							<div><b>Threshold</b></div>
							<div>91.2%</div>
						</Grid.Column>
					</Grid>
					<Divider/>
					<Grid>
						<Grid.Column width={6}>
							<div><b>Total Votes</b></div>
							<div>2,311,547</div>
						</Grid.Column>
						<Grid.Column width={5}>
							<div><b>Yes</b></div>
							<div>1,588,731</div>
						</Grid.Column>
						<Grid.Column width={5}>
							<div><b>No</b></div>
							<div>725,826</div>
						</Grid.Column>
					</Grid>
				</div>
				<div className='card'>
					<h2>Your Vote</h2>
					<Form standalone={false}>
						<Form.Group>
							<Form.Field width={16}>
								<label>Vote Lock</label>
								<select onChange={onConvictionChange}>
									<option value='Locked1x'>2 weeks lock</option>
									<option value='Locked2x'>4 weeks lock</option>
									<option value='Locked3x'>6 weeks lock</option>
									<option value='Locked4x'>8 weeks lock</option>
									<option value='Locked5x'>10 weeks lock</option>
								</select>
								<div>
									120 KSM * 2 Lock periods = <b>240 votes</b>
								</div>
							</Form.Field>
						</Form.Group>
						<Form.Group>
							<Form.Field width={8}>
								<label>&nbsp;</label>
								<Button
									fluid
									basic
									color='red'
									disabled={!apiReady}
									onClick={() => voteRefrendum(false)}
								>
									<Icon name='thumbs down' />
									NAY
								</Button>
							</Form.Field>
							<Form.Field width={8}>
								<label>&nbsp;</label>
								<Button
									fluid
									primary
									disabled={!apiReady}
									onClick={() => voteRefrendum(true)}
								>
									<Icon name='thumbs up' />
									AYE
								</Button>
							</Form.Field>
						</Form.Group>
					</Form>
				</div>
				<div className='card'>
					<h2>Timeline</h2>
					<Grid>
						<Grid.Column width={8}>
							<div><b>Blocks Remaining</b></div>
							<div>69,420</div>
						</Grid.Column>
						<Grid.Column width={8}>
							<div><b>Enact at</b></div>
							<div>Block 240,000</div>
						</Grid.Column>
					</Grid>
				</div>
			</div>
		);
	}

	return null;
};

export default styled(Democracy)`
	.card {
		background-color: white;
		padding: 2rem 3rem 4rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
		margin-bottom: 1rem;
	}
`;
