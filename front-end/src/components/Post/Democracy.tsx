import React, { useEffect } from 'react';
import { Divider, Grid, Icon } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/keyring';

import { Form } from '../../ui-components/Form';
import Button from '../../ui-components/Button';

interface Props {
	className?: string;
	isProposal?: boolean
	isReferendum?: boolean
	onchainId?: number | null | undefined
}

const Democracy = ({ className, isProposal, isReferendum, onchainId }: Props) => {

	useEffect(() => {
		// Construct
		async function connect() {
			const wsProvider = new WsProvider('ws://127.0.0.1:9944'); // 'ws://127.0.0.1:9944'
			const api = await ApiPromise.create({ provider: wsProvider });

			// Constuct the keying after the API (crypto has an async init)
			const keyring = new Keyring({ type: 'sr25519' });

			// Add Alice to our keyring with a hard-deived path (empty phrase, so uses dev)
			const alice = keyring.addFromUri('//Alice');

			// const second = api.tx.democracy.second(234234);

			const vote = api.tx.democracy.vote(1, true);

			// Create a extrinsic, transferring 12345 units to Bob

			// Sign and send the transaction using our account
			const hash = await vote.signAndSend(alice);

			console.log(hash);
		}

		connect();
	}, []);

	isProposal = true;

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
								<label>Amount</label>
								<input
									placeholder='120'
									type='text'
								/>
								<div>
									2341 KSM Available. <a href='#'>Vote all.</a>
								</div>
							</Form.Field>
						</Form.Group>
						<Form.Group>
							<Form.Field width={16}>
								<label>Vote Lock</label>
								<select>
									<option value="2">2 weeks lock</option>
									<option value="4">4 weeks lock</option>
									<option value="8">8 weeks lock</option>
									<option value="10">10 weeks lock</option>
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
