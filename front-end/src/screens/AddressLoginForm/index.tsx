// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useEffect, useState } from 'react';
import { Grid, DropdownProps } from 'semantic-ui-react';
import styled from 'styled-components';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { web3Accounts, web3FromSource, web3Enable } from '@polkadot/extension-dapp';
import { stringToHex } from '@polkadot/util';

import { NotificationContext } from '../../context/NotificationContext';
import { useAddressLoginMutation, useAddressLoginStartMutation } from '../../generated/graphql';
import ExtensionNotDetected from '../../components/ExtensionNotDetected';
import { useRouter } from '../../hooks';
import { handleLoginUser } from '../../services/auth.service';
import Button from '../../ui-components/Button';
import AccountSelectionForm from '../../ui-components/AccountSelectionForm';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import { NotificationStatus } from '../../types';
import getEncodedAddress from '../../util/getEncodedAddress';
import cleanError from '../../util/cleanError';
import { UserDetailsContext } from '../../context/UserDetailsContext';

interface Props {
	className?: string
}

const APPNAME = process.env.REACT_APP_APPNAME || 'polkassembly';

const LoginForm = ({ className }:Props): JSX.Element => {
	const [address, setAddress] = useState<string>('');
	const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
	const [extensionNotFound, setExtensionNotFound] = useState(false);
	const [accountsNotFound, setAccountsNotFound] = useState(false);
	const { history } = useRouter();
	const { queueNotification } = useContext(NotificationContext);
	const [addressLoginStartMutation] = useAddressLoginStartMutation();
	const [addressLoginMutation, { loading, error }] = useAddressLoginMutation();
	const currentUser = useContext(UserDetailsContext);

	useEffect(() => {
		if (!accounts.length) {
			getAccounts();
		}
	}, [accounts.length]);

	const getAccounts = async (): Promise<undefined> => {
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

		accounts.forEach((account) => {
			account.address = getEncodedAddress(account.address) || account.address;
		});

		setAccounts(accounts);
		if (accounts.length > 0) {
			setAddress(accounts[0].address);
		}

		return;
	};

	const onAccountChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		const addressValue = data.value as string;
		setAddress(addressValue);
	};

	const handleLogin = async () => {
		if (!accounts.length) {
			return getAccounts();
		}

		try {
			const injected = await web3FromSource(accounts[0].meta.source);
			const signRaw = injected && injected.signer && injected.signer.signRaw;

			if (!signRaw) {
				return console.error('Signer not available');
			}

			const { data: startResult } = await addressLoginStartMutation({
				variables: {
					address
				}
			});

			const signMessage = startResult?.addressLoginStart?.signMessage;

			if (!signMessage) {
				throw new Error('Challenge message not found');
			}

			const { signature } = await signRaw({
				address,
				data: stringToHex(signMessage),
				type: 'bytes'
			});

			const { data: loginResult } = await addressLoginMutation({
				variables: {
					address,
					signature
				}
			});

			if (loginResult?.addressLogin?.token && loginResult?.addressLogin?.user) {
				handleLoginUser({ token: loginResult.addressLogin.token, user: loginResult.addressLogin.user }, currentUser);
				history.push('/');
			} else {
				throw new Error('Web3 Login failed');
			}
		} catch (error) {
			console.error(error);
			queueNotification({
				header: 'Failed!',
				message: cleanError(error.message),
				status: NotificationStatus.ERROR
			});
		}
	};

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
				<Form onSubmit={handleLogin}>
					<h3>Login With Web3 Account</h3>
					{extensionNotFound?
						<div className='card'>
							<ExtensionNotDetected />
						</div>
						: null
					}
					{accountsNotFound?
						<div className='card'>
							<div className='text-muted'>You need at least one account in Polkadot-js extenstion to login.</div>
							<div className='text-muted'>Please reload this page after adding accounts.</div>
						</div>
						: null
					}
					{accounts.length > 0 ?
						<Form.Group>
							<Form.Field width={16}>
								<AccountSelectionForm
									title='Choose linked account'
									accounts={accounts}
									address={address}
									onAccountChange={onAccountChange}
								/>
							</Form.Field>
						</Form.Group>
						: <div>Loading Accounts ...</div>
					}
					<div className='info'>
						Alternatively, you can login with your username
					</div>
					<div className={'mainButtonContainer'}>
						<Button
							primary
							disabled={loading}
							type='submit'
						>
							Login
						</Button>
					</div>
					<div>
						{error && <FilteredError text={error.message}/>	}
					</div>
				</Form>
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
		</Grid>
	);
};

export default styled(LoginForm)`
	.mainButtonContainer {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	input.error {
		border-style: solid;
		border-width: 1px;
		border-color: red_secondary;
	}

	.info {
		margin: 10px 0;
	}

	.errorText {
		color: red_secondary;
	}
`;
