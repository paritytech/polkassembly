// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3Accounts, web3Enable, web3FromSource } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { stringToHex } from '@polkadot/util';
import styled from '@xstyled/styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { Divider, DropdownProps } from 'semantic-ui-react';

import ExtensionNotDetected from '../../components/ExtensionNotDetected';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useAddressLoginMutation, useAddressLoginStartMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import { handleTokenChange } from '../../services/auth.service';
import AccountSelectionForm from '../../ui-components/AccountSelectionForm';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import Loader from '../../ui-components/Loader';
import getEncodedAddress from '../../util/getEncodedAddress';

interface Props {
	className?: string
	toggleWeb2Login: () => void
}

const APPNAME = process.env.REACT_APP_APPNAME || 'polkassembly';

const LoginForm = ({ className, toggleWeb2Login }:Props): JSX.Element => {
	const [error, setErr] = useState<Error | null>(null);
	const [address, setAddress] = useState<string>('');
	const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
	const [isAccountLoading, setIsAccountLoading] = useState(true);
	const [extensionNotFound, setExtensionNotFound] = useState(false);
	const [accountsNotFound, setAccountsNotFound] = useState(false);
	const { history } = useRouter();
	const [addressLoginStartMutation] = useAddressLoginStartMutation();
	const [addressLoginMutation, { loading }] = useAddressLoginMutation();
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
			setIsAccountLoading(false);
			return;
		} else {
			setExtensionNotFound(false);
		}

		const accounts = await web3Accounts();

		if (accounts.length === 0) {
			setAccountsNotFound(true);
			setIsAccountLoading(false);
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

		setIsAccountLoading(false);
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
				handleTokenChange(loginResult.addressLogin.token, currentUser);
				history.push('/');
			} else {
				throw new Error('Web3 Login failed');
			}
		} catch (error) {
			setErr(error);
		}
	};

	const handleToggle = () => toggleWeb2Login();

	return (
		<Form className={className} onSubmit={handleLogin}>
			<h3>Login</h3>
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
			{isAccountLoading
				?
				<Loader text={'Requesting Web3 accounts'}/>
				:
				accounts.length > 0 &&
				<>
					<Form.Group>
						<AccountSelectionForm
							title='Choose linked account'
							accounts={accounts}
							address={address}
							onAccountChange={onAccountChange}
						/>
					</Form.Group>
					<div className={'mainButtonContainer'}>
						<Button
							primary
							disabled={loading}
							type='submit'
						>
							Login
						</Button>
					</div>
				</>
			}
			<div>
				{error?.message && <FilteredError className='info' text={error.message}/>}
			</div>
			<Divider horizontal>Or</Divider>
			<div className={'mainButtonContainer'}>
				<Button
					secondary
					disabled={loading}
					onClick={handleToggle}
				>
					Login With Username
				</Button>
			</div>
		</Form>
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

	.ui.dimmer {
		height: calc(100% - 6.5rem);
	}
`;
