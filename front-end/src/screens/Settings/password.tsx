// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext,useState } from 'react';

import { NotificationContext } from '../../context/NotificationContext';
import { useChangePasswordMutation } from '../../generated/graphql';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import cleanError from '../../util/cleanError';

const Password = (): JSX.Element => {
	const [currentPassword, setCurrentPassword] = useState<string | null | undefined>('');
	const [newPassword, setNewPassword] = useState<string | null | undefined>('');
	const { queueNotification } = useContext(NotificationContext);
	const [changePasswordMutation, { loading, error }] = useChangePasswordMutation();

	const onCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(event.currentTarget.value);
	const onNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setNewPassword(event.currentTarget.value);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (currentPassword && newPassword) {
			changePasswordMutation({
				variables: {
					newPassword,
					oldPassword: currentPassword
				}
			})
				.then(({ data }) => {
					if (data && data.changePassword && data.changePassword.message) {
						queueNotification({
							header: 'Success!',
							message: data.changePassword.message,
							status: NotificationStatus.SUCCESS
						});
					}
				}).catch((e) => {
					queueNotification({
						header: 'Failed!',
						message: cleanError(e.message),
						status: NotificationStatus.ERROR
					});
					console.error('change password error', e);
				});
		}
	};

	return (
		<Form standalone={false}>
			<Form.Group>
				<Form.Field width={10}>
					<label>Current Password</label>
					<input
						value={currentPassword || ''}
						onChange={onCurrentPasswordChange}
						placeholder='Current Password'
						type='password'
					/>
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field width={10}>
					<label>New Password</label>
					<input
						value={newPassword || ''}
						onChange={onNewPasswordChange}
						placeholder='New Password'
						type='password'
					/>
					{error && <FilteredError text={error.message}/>
					}
				</Form.Field>
				<Form.Field width={6}>
					<label>&nbsp;</label>
					<Button
						secondary
						disabled={loading}
						onClick={handleClick}
						type="submit"
					>
						Change
					</Button>
				</Form.Field>
			</Form.Group>
		</Form>
	);
};

export default Password;
