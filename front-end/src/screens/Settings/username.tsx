// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext, useEffect,useState } from 'react';

import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useChangeUsernameMutation } from '../../generated/graphql';
import { handleTokenChange } from '../../services/auth.service';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import cleanError from '../../util/cleanError';

interface Props {
	className?: string
}

const Username = ({ className }:Props): JSX.Element => {
	const [editing, setEditing] = useState(false);
	const [username, setUsername] = useState<string | null | undefined>('');
	const [password, setPassword] = useState<string | null | undefined>('');
	const currentUser = useContext(UserDetailsContext);
	const [changeUsernameMutation, { loading, error }] = useChangeUsernameMutation();
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		setUsername(currentUser.username);
	}, [currentUser.username]);

	const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value);
	const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);

	const handleEdit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		setEditing(true);
	};

	const handleChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (!password) {
			queueNotification({
				header: 'Failed!',
				message: 'Please type your password',
				status: NotificationStatus.ERROR
			});
			return;
		}

		if (username) {
			changeUsernameMutation({
				variables: {
					password,
					username
				}
			})
				.then(({ data }) => {
					if (data && data.changeUsername && data.changeUsername.message) {
						queueNotification({
							header: 'Success!',
							message: data.changeUsername.message,
							status: NotificationStatus.SUCCESS
						});
					}
					if (data && data.changeUsername && data.changeUsername.token) {
						handleTokenChange(data.changeUsername.token);
					}
					currentUser.setUserDetailsContextState((prevState) => {
						return {
							...prevState,
							username
						};
					});
					setEditing(false);
				}).catch((e) => {
					queueNotification({
						header: 'Failed!',
						message: cleanError(e.message),
						status: NotificationStatus.ERROR
					});
					console.error('change username error', e);
				});
		}
	};

	return (
		<Form standalone={false} className={className}>
			<Form.Group>
				<Form.Field width={10}>
					<label>Username</label>
					{editing ?
						<input
							value={username || ''}
							onChange={onUserNameChange}
							placeholder='username'
							type='text'
						/> :
						<div className='current-username'>{username}</div>
					}
				</Form.Field>
				{!editing && <Form.Field width={6}>
					<label>&nbsp;</label>
					<Button
						secondary
						disabled={loading}
						onClick={handleEdit}
					>
					Edit
					</Button>
				</Form.Field>}
			</Form.Group>
			{editing && <Form.Group>
				<Form.Field width={10}>
					<label>Password</label>
					<input
						value={password || ''}
						onChange={onPasswordChange}
						placeholder='password'
						type='password'
					/>
					{error && <FilteredError text={error.message}/>}
				</Form.Field>
				<Form.Field width={6}>
					<label>&nbsp;</label>
					<Button
						secondary
						disabled={loading}
						onClick={handleChange}
						type='submit'
					>
					Change
					</Button>
				</Form.Field>
			</Form.Group>}
		</Form>
	);
};

export default styled(Username)`
	.button {
		display: flex;
		flex-direction: column;
		justify-content: left;
	}

	.current-username {
		padding-top: 1rem;
	}
`;
