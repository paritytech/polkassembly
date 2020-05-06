// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3Accounts, web3Enable, web3FromSource } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { stringToHex } from '@polkadot/util';
import React, { useContext, useEffect, useState } from 'react';
import { FieldError,useForm } from 'react-hook-form';
import { DropdownProps } from 'semantic-ui-react';

import ExtensionNotDetected from '../../components/ExtensionNotDetected';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useSetCredentialsConfirmMutation, useSetCredentialsStartMutation } from '../../generated/graphql';
import { handleTokenChange } from '../../services/auth.service';
import AccountSelectionForm from '../../ui-components/AccountSelectionForm';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import Loader from '../../ui-components/Loader';
import Modal from '../../ui-components/Modal';
import getEncodedAddress from '../../util/getEncodedAddress';
import messages from '../../util/messages';

const APPNAME = process.env.REACT_APP_APPNAME || 'polkassembly';

const SetCredentials = (): JSX.Element => {
	const [error, setErr] = useState<Error | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [address, setAddress] = useState<string>('');
	const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
	const [isAccountLoading, setIsAccountLoading] = useState(true);
	const [extensionNotFound, setExtensionNotFound] = useState(false);
	const [accountsNotFound, setAccountsNotFound] = useState(false);
	const { errors, handleSubmit, register } = useForm();
	const [setCredentialsStartMutation] = useSetCredentialsStartMutation();
	const [setCredentialsConfirmMutation, { loading }] = useSetCredentialsConfirmMutation();
	const currentUser = useContext(UserDetailsContext);

	useEffect(() => {
		if (!accounts.length) {
			getAccounts();
		}
	}, [accounts.length]);

	const getAccounts = async (): Promise<void> => {
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

	const handleSetCredentials = async (data: Record<string, any>): Promise<void> => {
		if (!accounts.length) {
			return getAccounts();
		}

		const { username, password } = data;

		try {
			const injected = await web3FromSource(accounts[0].meta.source);
			const signRaw = injected && injected.signer && injected.signer.signRaw;

			if (!signRaw) {
				return console.error('Signer not available');
			}

			const { data: startResult } = await setCredentialsStartMutation({
				variables: {
					address
				}
			});

			const signMessage = startResult?.setCredentialsStart?.signMessage;

			if (!signMessage) {
				throw new Error('Challenge message not found');
			}

			const { signature } = await signRaw({
				address,
				data: stringToHex(signMessage),
				type: 'bytes'
			});

			const { data: setResult } = await setCredentialsConfirmMutation({
				variables: {
					address,
					password,
					signature,
					username
				}
			});

			if (setResult?.setCredentialsConfirm?.token) {
				handleTokenChange(setResult?.setCredentialsConfirm?.token, currentUser);
			}
		} catch (error) {
			setErr(error);
		}
	};

	const dismissModal = () => {
		setShowModal(false);
	};

	const openModal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		setShowModal(true);
	};

	return (
		<>
			{showModal ?
				<Modal
					buttons={
						<Form.Group>
							<Button
								content='Set username and password'
								disabled={loading}
								primary
								onClick={handleSubmit(handleSetCredentials)}
							/>
							<Button
								content='Close'
								secondary
								onClick={dismissModal}
							/>
						</Form.Group>
					}
					centered
					dimmer='inverted'
					open
					onClose={dismissModal}
					size='tiny'
					title={'Set Username password'}
				>
					<Form standalone={false} onSubmit={handleSubmit(handleSetCredentials)}>
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
							</>
						}
						<Form.Group>
							<Form.Field width={16}>
								<label>Username</label>
								<input
									className={errors.username ? 'error' : ''}
									name='username'
									placeholder='John'
									ref={register({ maxLength:20, minLength:3, pattern: /^[A-Za-z0-9._-]*$/, required: true })}
									type='text'
								/>
								{(errors.username as FieldError)?.type === 'maxLength' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_MAXLENGTH_ERROR}</span>}
								{(errors.username as FieldError)?.type === 'minLength' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_MINLENGTH_ERROR}</span>}
								{(errors.username as FieldError)?.type === 'pattern' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_PATTERN_ERROR}</span>}
								{(errors.username as FieldError)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_REQUIRED_ERROR}</span>}
							</Form.Field>
						</Form.Group>
						<Form.Group>
							<Form.Field width={16}>
								<label>Password</label>
								<input
									className={errors.password ? 'error' : ''}
									name='password'
									placeholder='Password'
									ref={register({ minLength: 6 ,required: true })}
									type='password'
								/>
								{errors.password && <span className={'errorText'}>{messages.VALIDATION_PASSWORD_ERROR}</span>}
							</Form.Field>
						</Form.Group>

						{error?.message && <FilteredError text={error.message}/>}
					</Form>
				</Modal>
				: null
			}
			<Form standalone={false}>
				<Form.Group>
					<Form.Field>
						<Button
							primary
							onClick={openModal}
						>
						Create a username and password
						</Button>
					</Form.Field>
				</Form.Group>
			</Form>
		</>
	);
};

export default SetCredentials;
