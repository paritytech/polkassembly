// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3Accounts, web3Enable, web3FromSource } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import styled from '@xstyled/styled-components';
import React, { useContext, useState } from 'react';
import { Button, DropdownProps, Form, Grid } from 'semantic-ui-react';
import ExtensionNotDetected from 'src/components/ExtensionNotDetected';
import { ApiContext } from 'src/context/ApiContext';
import AccountSelectionForm from 'src/ui-components/AccountSelectionForm';
import Card from 'src/ui-components/Card';

const APPNAME = 'Brand Vote';

const BrandVote = ({ className } : {className?: string}) => {
	const { api, apiReady } = useContext(ApiContext);
	const [address, setAddress] = useState<string>('');
	const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
	const [extensionNotFound, setExtensionNotFound] = useState(false);
	const [accountsNotFound, setAccountsNotFound] = useState(false);
	const [brand, setBrand] = useState(0);

	const getAccounts = async (): Promise<undefined> => {
		if (!api) {
			return;
		}

		if (!apiReady) {
			return;
		}

		const extensions = await web3Enable(APPNAME);

		if (extensions.length === 0) {
			setExtensionNotFound(true);
			return;
		} else {
			setExtensionNotFound(false);
		}

		const accounts = await web3Accounts();

		if (accounts.length === 0) {
			setAccountsNotFound(true);
			return;
		} else {
			setAccountsNotFound(false);
		}

		setAccounts(accounts);
		if (accounts.length > 0) {
			setAddress(accounts[0].address);

			const injected = await web3FromSource(accounts[0].meta.source);

			api.setSigner(injected.signer);
		}

		return;
	};

	const voteBrand = async () => {
		if (!api) {
			return;
		}

		if (!apiReady) {
			return;
		}

		const second = api.tx.system.remark(`brand-vote:${brand}`);

		second.signAndSend(address, ({ status }: any) => {
			if (status.isInBlock) {
				console.log(`Completed at block hash #${status.asInBlock.toString()}`);
			} else {
				console.log(`Current status: ${status.type}`);
			}
		}).catch((error: any) => {
			console.log(':( transaction failed');
			console.error('ERROR:', error);
		});
	};

	const onAccountChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		const addressValue = data.value as string;
		setAddress(addressValue);
	};

	if (extensionNotFound) {
		return (
			<div className={className}>
				<div className='card'>
					<ExtensionNotDetected />
				</div>
			</div>
		);
	}

	if (accountsNotFound) {
		return (
			<div className={className}>
				<div className='card'>
					<div className='text-muted'>You need at least one account in Polkadot-js extenstion to use this feature.</div>
					<div className='text-muted'>Please reload this page after adding accounts.</div>
				</div>
			</div>
		);
	}

	const selectBrand = (num: number) => {
		console.log(brand);
		setBrand(num);
	};

	return (
		<div className={className}>
			<h1>Brand Vote</h1>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
					<div className='main'>
						<div className='option first' onClick={() => selectBrand(1)}>
							{brand === 1 ? <span>Selected</span> : null}
						</div>
						<div className='option second' onClick={() => selectBrand(2)}>
							{brand === 2 ? <span>Selected</span> : null}
						</div>
						<div className='option third' onClick={() => selectBrand(3)}>
							{brand === 3 ? <span>Selected</span> : null}
						</div>
					</div>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}>
					<Card>
						{accounts.length ? <>
							<AccountSelectionForm
								title='Vote for brand'
								accounts={accounts}
								address={address}
								withBalance
								onAccountChange={onAccountChange}
							/>
							<Button
								primary
								disabled={!apiReady}
								onClick={voteBrand}
							>
								Vote
							</Button>
						</> : <>
							<Form.Group>
								<Form.Field className='button-container'>
									<Button
										primary
										onClick={getAccounts}
										size={'large'}
									>
										Login with polkadot.js
									</Button>
								</Form.Field>
							</Form.Group>
						</>}
					</Card>
				</Grid.Column>
			</Grid>
		</div>
	);

};

export default styled(BrandVote)`
	.main {
		display: flex;
	}
	.option{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5em;
		color: #fff;
		margin: 5px;
		height: 200px;
		width: 200px;
	}
	.first {
		background-color: red;
	}
	.second {
		background-color: blue;
	}
	.third {
		background-color: green;
	}
`;
