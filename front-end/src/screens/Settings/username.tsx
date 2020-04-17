// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';

import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useChangeUsernameMutation } from '../../generated/graphql';
import { handleTokenChange } from '../../services/auth.service';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import cleanError from '../../util/cleanError';
import messages from '../../util/messages';

interface Props {
	className?: string
}

const Username = ({ className }:Props): JSX.Element => {
	const [editing, setEditing] = useState(false);
	const [username, setUsername] = useState<string | null | undefined>('');
	const currentUser = useContext(UserDetailsContext);
	const [changeUsernameMutation, { loading, error }] = useChangeUsernameMutation();
	const { queueNotification } = useContext(NotificationContext);
	const { errors, handleSubmit, register } = useForm();

	useEffect(() => {
		setUsername(currentUser.username);
	}, [currentUser.username]);

	const handleEdit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		setEditing(true);
	};

	const handleSubmitForm = (data: Record<string, any>):void => {
		const { username, password } = data;

		if (username && password) {
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
		<Form standalone={false} className={className} onSubmit={handleSubmit(handleSubmitForm)}>
			<Form.Group>
				<Form.Field width={10}>
					<label>Username</label>
					{editing ?
						<input
							className={errors.username ? 'error' : ''}
							defaultValue={username || ''}
							name='username'
							placeholder='username'
							ref={register({ maxLength:30, minLength:3, pattern: /^[A-Za-z0-9._-]*$/, required: true })}
							type='text'
						/> :
						<div className='current-username'>{username}</div>
					}
					{(errors.username as FieldError)?.type === 'maxLength' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_MAXLENGTH_ERROR}</span>}
					{(errors.username as FieldError)?.type === 'minLength' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_MINLENGTH_ERROR}</span>}
					{(errors.username as FieldError)?.type === 'pattern' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_PATTERN_ERROR}</span>}
					{(errors.username as FieldError)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_REQUIRED_ERROR}</span>}
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
						className={errors.password ? 'error' : ''}
						name='password'
						placeholder='password'
						type='password'
						ref={register({ minLength: 6, required: true })}
					/>
					{error && <FilteredError text={error.message}/>}
					{errors.password && <span className={'errorText'}>{messages.VALIDATION_PASSWORD_ERROR}</span>}
				</Form.Field>
				<Form.Field width={6}>
					<label>&nbsp;</label>
					<Button
						secondary
						disabled={loading}
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

	input.error {
		border-color: red_secondary !important;
	}

	.errorText {
		color: red_secondary;
	}
`;
