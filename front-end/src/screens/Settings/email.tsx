// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext, useEffect,useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from 'semantic-ui-react';

import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useChangeEmailMutation, useResendVerifyEmailTokenMutation } from '../../generated/graphql';
import { handleTokenChange } from '../../services/auth.service';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import ButtonLink from '../../ui-components/ButtonLink';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import Spacer from '../../ui-components/Spacer';
import cleanError from '../../util/cleanError';
import messages from '../../util/messages';

interface Props{
	className?: string
}

const Email = ({ className }: Props): JSX.Element => {
	const [editing, setEditing] = useState(false);
	const [email, setEmail] = useState<string | null | undefined>('');
	const currentUser = useContext(UserDetailsContext);
	const [changeEmailMutation, { loading, error }] = useChangeEmailMutation();
	const [resendVerifyEmailTokenMutation] = useResendVerifyEmailTokenMutation();
	const { queueNotification } = useContext(NotificationContext);
	const { errors, handleSubmit, register } = useForm();

	useEffect(() => {
		setEmail(currentUser.email);
	}, [currentUser.email]);

	const handleEdit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		setEditing(true);
	};

	const handleSubmitForm = (data: Record<string, any>):void => {
		const { email, password } = data;

		if ((email || email === '') && password) {
			changeEmailMutation({
				variables: {
					email,
					password
				}
			})
				.then(({ data }) => {
					if (data && data.changeEmail) {
						if (data.changeEmail.message) {
							queueNotification({
								header: 'Success!',
								message: data.changeEmail.message,
								status: NotificationStatus.SUCCESS
							});
						}
						if (data.changeEmail.token) {
							handleTokenChange(data.changeEmail.token, currentUser);
						}
						setEditing(false);
					}
				}).catch((e) => {
					queueNotification({
						header: 'Failed!',
						message: cleanError(e.message),
						status: NotificationStatus.ERROR
					});
					console.error('Change email error:', e);
				});
		}
	};

	const handleResendVerifyEmailTokenClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		resendVerifyEmailTokenMutation()
			.then(({ data }) => {
				if (data && data.resendVerifyEmailToken && data.resendVerifyEmailToken.message) {
					queueNotification({
						header: 'Success!',
						message: data.resendVerifyEmailToken.message,
						status: NotificationStatus.SUCCESS
					});
				}
			}).catch((e) => {
				queueNotification({
					header: 'Failed!',
					message: cleanError(e.message),
					status: NotificationStatus.ERROR
				});
			});
	};

	return (
		<Form className={className} standalone={false} onSubmit={handleSubmit(handleSubmitForm)}>
			<Form.Group>
				<Form.Field width={10}>
					<label>Email</label>
					{editing ?
						<input
							className={errors.email ? 'error' : ''}
							defaultValue={email || ''}
							name='email'
							placeholder='mail@example.com'
							type='email'
							ref={register({
								pattern: /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i
							})}
						/> :
						<div className={`current-email ${email ? '' : 'text-muted'}`}>
							{email ? email : 'No email linked.'}
						</div>
					}
					{errors.email && <span className={'errorText'}>{messages.VALIDATION_EMAIL_ERROR}</span>}
				</Form.Field>
				{!editing && <Form.Field width={6}>
					<Spacer />
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
						ref={register({ minLength: 6 ,required: true })}
					/>
					{error?.message && <FilteredError text={error.message}/>}
					{errors.password && <span className={'errorText'}>{messages.VALIDATION_PASSWORD_ERROR}</span>}
				</Form.Field>
				<Form.Field width={6}>
					<Spacer />
					<Button
						secondary
						disabled={loading}
						type='submit'
					>
					Change
					</Button>
				</Form.Field>
			</Form.Group>}
			<Form.Group>
				{email && !currentUser.email_verified &&
					<div className={'warning-text'}>
						<Icon name='warning circle' />Your email is not verified. <ButtonLink className='text-muted' onClick={handleResendVerifyEmailTokenClick}>Resend verification email.</ButtonLink>
					</div>
				}
			</Form.Group>
		</Form>
	);
};

export default styled(Email)`
	.current-email {
		padding-top: 1rem;
	}
	.warning-text {
		margin-top: 0.5rem;
		color: red_secondary;
	}

	input.error {
		border-color: red_secondary !important;
	}

	.errorText {
		color: red_secondary;
	}
`;
