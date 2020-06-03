// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3Accounts, web3Enable,web3FromSource } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { stringToHex } from '@polkadot/util';
import styled from '@xstyled/styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Divider, DropdownProps } from 'semantic-ui-react';
import { APPNAME } from 'src/global/appName';

import ExtensionNotDetected from '../../components/ExtensionNotDetected';
import { ModalContext } from '../../context/ModalContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useAddressSignupConfirmMutation, useAddressSignupStartMutation } from '../../generated/graphql';
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
	toggleWeb2Signup: () => void
}

const NETWORK = process.env.REACT_APP_NETWORK || 'kusama';

const SignupForm = ({ className, toggleWeb2Signup }:Props): JSX.Element => {
	const [error, setErr] = useState<Error | null>(null);
	const [address, setAddress] = useState<string>('');
	const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
	const [isAccountLoading, setIsAccountLoading] = useState(true);
	const [extensionNotFound, setExtensionNotFound] = useState(false);
	const [accountsNotFound, setAccountsNotFound] = useState(false);
	const { history } = useRouter();
	const [addressSignupStartMutation] = useAddressSignupStartMutation();
	const [addressSignupConfirmMutation, { loading }] = useAddressSignupConfirmMutation();
	const currentUser = useContext(UserDetailsContext);
	const { errors, handleSubmit, register } = useForm();
	const { setModal } = useContext(ModalContext);

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

	const handleSignup = async () => {
		if (!accounts.length) {
			return getAccounts();
		}

		try {
			const injected = await web3FromSource(accounts[0].meta.source);
			const signRaw = injected && injected.signer && injected.signer.signRaw;

			if (!signRaw) {
				return console.error('Signer not available');
			}

			const { data: startResult } = await addressSignupStartMutation({
				variables: {
					address
				}
			});

			const signMessage = startResult?.addressSignupStart?.signMessage;

			if (!signMessage) {
				throw new Error('Challenge message not found');
			}

			const { signature } = await signRaw({
				address,
				data: stringToHex(signMessage),
				type: 'bytes'
			});

			const { data: signupResult } = await addressSignupConfirmMutation({
				variables: {
					address,
					network: NETWORK,
					signature
				}
			});

			if (signupResult?.addressSignupConfirm?.token) {
				handleTokenChange(signupResult.addressSignupConfirm.token, currentUser);
				setModal({
					content: 'Add an email in settings if you want to be able to recover your account!',
					title: 'Add optional email'
				});
				history.push('/');
			} else {
				throw new Error('Web3 Login failed');
			}
		} catch (error) {
			setErr(error);
		}
	};

	const handleToggle = () => toggleWeb2Signup();

	return (
		<Form className={className} onSubmit={handleSubmit(handleSignup)}>
			<h3>Sign-up</h3>
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
					<Form.Field>
						<label className='checkbox-label'>
							<input
								className={errors.termsandconditions ? 'error' : ''}
								name='termsandconditions'
								value='yes'
								ref={register({ required: true })}
								type='checkbox'
							/>
							I have read and agree to the terms of the <Link to='/terms-and-conditions'>Polkassembly end user agreement</Link>.
						</label>
						{errors.termsandconditions && <div className={'errorText'}>Please agree to the terms of the Polkassembly end user agreement.</div>}
					</Form.Field>
					<div className='text-muted'>To see how we use your personal data please see our <Link to='/privacy'>privacy notice</Link>.</div>
					<div className={'mainButtonContainer'}>
						<Button
							primary
							disabled={loading}
							type='submit'
						>
							Sign-up
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
					Sign-up with username
				</Button>
			</div>
		</Form>
	);
};

export default styled(SignupForm)`
	.mainButtonContainer {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 3rem;
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

	.checkbox-label {
		position: relative;
		bottom: 0.1rem;
		display: inline-block !important;
		font-size: sm !important;
		font-weight: 400 !important;
		color: grey_primary !important;
		a {
			color: grey_primary;
			border-bottom-style: solid;
			border-bottom-width: 1px;
			border-bottom-color: grey_primary;
		}
	}

	.ui.dimmer {
		height: calc(100% - 6.5rem);
	}
`;
