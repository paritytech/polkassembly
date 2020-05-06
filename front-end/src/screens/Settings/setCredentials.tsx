// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { stringToHex } from '@polkadot/util';
import React, { useContext, useState } from 'react';
import { FieldError,useForm } from 'react-hook-form';

import ExtensionNotDetected from '../../components/ExtensionNotDetected';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useSetCredentialsConfirmMutation, useSetCredentialsStartMutation } from '../../generated/graphql';
import { handleTokenChange } from '../../services/auth.service';
import AddressComponent from '../../ui-components/Address';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import Loader from '../../ui-components/Loader';
import Modal from '../../ui-components/Modal';
import getEncodedAddress from '../../util/getEncodedAddress';
import messages from '../../util/messages';
import * as validation from '../../util/validation';

const APPNAME = process.env.REACT_APP_APPNAME || 'polkassembly';

const SetCredentials = (): JSX.Element => {
	const [error, setErr] = useState<Error | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [address, setAddress] = useState<string>('');
	const [isAccountLoading, setIsAccountLoading] = useState(true);
	const [extensionNotFound, setExtensionNotFound] = useState(false);
	const [accountsNotFound, setAccountsNotFound] = useState(false);
	const { errors, handleSubmit, register } = useForm();
	const [setCredentialsStartMutation] = useSetCredentialsStartMutation();
	const [setCredentialsConfirmMutation, { loading }] = useSetCredentialsConfirmMutation();
	const currentUser = useContext(UserDetailsContext);

	// Accounts needs to be get to get default account signer
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

			if (account.address === currentUser.defaultAddress) {
				setAddress(currentUser.defaultAddress);
			}
		});

		setIsAccountLoading(false);
		return;
	};

	const handleSetCredentials = async (data: Record<string, any>): Promise<void> => {
		const { username, password } = data;

		if (!address) {
			return console.error('Default address not set');
		}

		try {
			const injected = await web3FromAddress(address);
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

	const openModal = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
		event.preventDefault();
		event.stopPropagation();

		await getAccounts();

		setShowModal(true);
	};

	const accountNotFoundCard = <div className='card'>
		<div className='text-muted'>Default address account not found in Polkadot-js extenstion.</div>
		<div className='text-muted'>Please reload this page after adding default address.</div>
	</div>;

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
						{ accountsNotFound? accountNotFoundCard : null }
						{isAccountLoading
							?
							<Loader text={'Requesting Web3 accounts'}/>
							:
							address ?
								<>
									<Form.Group>
										<Form.Field width={16}>
											<label>Default Address</label>
											<AddressComponent address={address} />
										</Form.Field>
									</Form.Group>
								</>
								: accountNotFoundCard
						}
						{address ? <>
							<Form.Group>
								<Form.Field width={16}>
									<label>Username</label>
									<input
										className={errors.username ? 'error' : ''}
										name='username'
										placeholder='John'
										ref={register(validation.username)}
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
										ref={register(validation.password)}
										type='password'
									/>
									{errors.password && <span className={'errorText'}>{messages.VALIDATION_PASSWORD_ERROR}</span>}
								</Form.Field>
							</Form.Group>
						</> : null
						}
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
