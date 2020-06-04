// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3Accounts, web3Enable, web3FromSource } from '@polkadot/extension-dapp';
import { stringToHex } from '@polkadot/util';
import styled from '@xstyled/styled-components';
import React, { useContext, useState } from 'react';
import { FieldError,useForm } from 'react-hook-form';
import { APPNAME } from 'src/global/appName';

import ExtensionNotDetected from '../../components/ExtensionNotDetected';
import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useSetCredentialsConfirmMutation, useSetCredentialsStartMutation } from '../../generated/graphql';
import { handleTokenChange } from '../../services/auth.service';
import { NotificationStatus } from '../../types';
import AddressComponent from '../../ui-components/Address';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import HelperTooltip from '../../ui-components/HelperTooltip';
import Loader from '../../ui-components/Loader';
import Modal from '../../ui-components/Modal';
import getEncodedAddress from '../../util/getEncodedAddress';
import messages from '../../util/messages';
import * as validation from '../../util/validation';

const SetCredentials = ({ className }: {className?: string}): JSX.Element => {
	const [error, setErr] = useState<Error | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [address, setAddress] = useState<string>('');
	const [isAccountLoading, setIsAccountLoading] = useState(true);
	const [extensionNotFound, setExtensionNotFound] = useState(false);
	const [accountsNotFound, setAccountsNotFound] = useState(false);
	const [source, setSource] = useState('');
	const { errors, handleSubmit, register } = useForm();
	const [setCredentialsStartMutation] = useSetCredentialsStartMutation();
	const [setCredentialsConfirmMutation, { loading }] = useSetCredentialsConfirmMutation();
	const { queueNotification } = useContext(NotificationContext);
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
				setSource(account.meta.source);
			}
		});

		setIsAccountLoading(false);
		return;
	};

	const handleSetCredentials = async (data: Record<string, any>): Promise<void> => {
		const { email, username, password } = data;

		if (!address) {
			return console.error('Default address not set');
		}

		try {
			const injected = await web3FromSource(source);
			const signRaw = injected && injected.signer && injected.signer.signRaw;

			if (!signRaw) {
				throw new Error('Signer not available');
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
					email,
					password,
					signature,
					username
				}
			});

			if (setResult?.setCredentialsConfirm?.token) {
				handleTokenChange(setResult?.setCredentialsConfirm?.token, currentUser);
			}
			if (setResult?.setCredentialsConfirm?.message) {
				queueNotification({
					header: 'Success!',
					message: setResult.setCredentialsConfirm.message,
					status: NotificationStatus.SUCCESS
				});
			}
		} catch (error) {
			console.error(error);
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
								content='Send'
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
					className={className}
					centered
					dimmer='inverted'
					open
					onClose={dismissModal}
					size='tiny'
					title={'Set email, username and password'}
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
									<label>
										Email
										<HelperTooltip
											content='Your email is used for password recovery or discussion notifications.'
										/>
									</label>
									<input
										className={errors.email ? 'error' : ''}
										name='email'
										placeholder='john@doe.com'
										ref={register(validation.email)}
										type='text'
									/>
									{errors.email && <span className={'errorText'}>{messages.VALIDATION_EMAIL_ERROR}</span>}
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
							Set an email, username and password
						</Button>
					</Form.Field>
				</Form.Group>
			</Form>
		</>
	);
};

export default styled(SetCredentials)`
	input.error {
		border-style: solid !important;
		border-width: 1px !important;
		border-color: red_secondary !important;
	}

	.errorText {
		color: red_secondary;
	}
`;
