// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useState } from 'react';

import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useDeleteAccountMutation, useLogoutMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import { logout } from '../../services/auth.service';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import Modal from '../../ui-components/Modal';
import cleanError from '../../util/cleanError';

const DeleteAccount = (): JSX.Element => {
	const currentUser = useContext(UserDetailsContext);
	const [showModal, setShowModal] = useState(false);
	const [password, setPassword] = useState<string | null | undefined>('');
	const { queueNotification } = useContext(NotificationContext);
	const [deleteAccountMutation, { loading, error }] = useDeleteAccountMutation();
	const [logoutMutation] = useLogoutMutation();
	const { setUserDetailsContextState } = currentUser;
	const { history } = useRouter();

	const handleLogout = async () => {
		try {
			await logoutMutation();
		} catch (error) {
			console.error(error);
		}
		logout(setUserDetailsContextState);
		history.push('/');
	};

	const deleteAccount = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (password) {
			deleteAccountMutation({
				variables: {
					password
				}
			})
				.then(handleLogout)
				.catch((e) => {
					queueNotification({
						header: 'Failed!',
						message: cleanError(e.message),
						status: NotificationStatus.ERROR
					});
					console.error('Delete account error', e);
				});
		}
	};

	const openModal = () => {
		setShowModal(true);
	};
	const dismissModal = () => {
		setShowModal(false);
	};
	const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);

	return (
		<>
			{showModal ?
				<Modal
					buttons={
						<Form.Group>
							<Button
								content='Delete My Account'
								disabled={loading}
								icon='check'
								primary
								onClick={deleteAccount}
							/>
							<Button
								content='Close'
								icon='close'
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
					title={'Are you absolutely sure?'}
				>
					<Form standalone={false}>
						<Form.Group>
							<Form.Field width={16}>
								<label>Unexpected bad things will happen if you don’t read this!</label>
								<div className='text-muted'>
									This action cannot be undone. This will permanently delete your account. Please type your password to confirm.
								</div>
							</Form.Field>
						</Form.Group>
						<Form.Group>
							<Form.Field width={16}>
								<label>Password</label>
								<input
									value={password || ''}
									onChange={onPasswordChange}
									placeholder='Password'
									type='password'
								/>
							</Form.Field>
						</Form.Group>
						{error?.message && <FilteredError text={error.message}/>}
					</Form>
				</Modal>
				: null
			}
			<Form standalone={false}>
				<Form.Group>
					<Form.Field width={16}>
						<label>Delete Account</label>
						<div className='text-muted'>Once you delete your account, there is no going back. Please be certain.</div>
						<Button
							primary
							negative
							disabled={loading}
							onClick={openModal}
							type="submit"
						>
							Delete My Account
						</Button>
					</Form.Field>
				</Form.Group>
			</Form>
		</>
	);
};

export default DeleteAccount;
