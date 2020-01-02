import React, { useState, useContext } from 'react';

import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';
import { useChangePasswordMutation } from '../../generated/graphql';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';

const Password = (): JSX.Element => {
	const [currentPassword, setCurrentPassword] = useState<string | null | undefined>('');
	const [newPassword, setNewPassword] = useState<string | null | undefined>('');
	const { queueNotification } = useContext(NotificationContext);
	const [changePasswordMutation, { loading, error }] = useChangePasswordMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });

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
						message: e.message,
						status: NotificationStatus.ERROR
					});
					console.error('change password error', e);
				});
		}
	};

	return (
		<>
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
					{error &&
					<>
						<br/><div>{error.message}</div>
					</>
					}
				</Form.Field>
				<Form.Field width={2}>
					<label>&nbsp;</label>
					<Button
						primary
						disabled={loading}
						onClick={handleClick}
						type="submit"
					>
						Change
					</Button>
				</Form.Field>
			</Form.Group>
		</>
	);
};

export default Password;
