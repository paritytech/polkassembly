// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useEffect,useState } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useChangeEmailMutation, useResendVerifyEmailTokenMutation } from '../../generated/graphql';
import { handleTokenChange } from '../../services/auth.service';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import cleanError from '../../util/cleanError';

interface Props{
	className?: string
}

const Email = ({ className }: Props): JSX.Element => {
	const [email, setEmail] = useState<string | null | undefined>('');
	const currentUser = useContext(UserDetailsContext);
	const [changeEmailMutation, { loading, error }] = useChangeEmailMutation();
	const [resendVerifyEmailTokenMutation] = useResendVerifyEmailTokenMutation();
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		setEmail(currentUser.email);
	}, [currentUser.email]);

	const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (email || email === '') {
			changeEmailMutation({
				variables: {
					email
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
							handleTokenChange(data.changeEmail.token);
						}
						currentUser.setUserDetailsContextState((prevState) => {
							return {
								...prevState,
								email,
								email_verified: false
							};
						});
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

	const handleResendVerifyEmailTokenClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
		<Form standalone={false}>
			<Form.Group className={className}>
				<Form.Field width={10}>
					<label>Email</label>
					<input
						value={email || ''}
						onChange={onEmailChange}
						placeholder='mail@example.com'
						type='email'
					/>
					{error && <FilteredError text={error.message}/>}
					{email && !currentUser.email_verified &&
						<div className={'warning-text'}>
							<Icon name='warning circle' />Your email is not verified. <a className='text-muted' href='#' onClick={handleResendVerifyEmailTokenClick}>Resend verification email.</a>
						</div>
					}
				</Form.Field>
				<Form.Field width={6}>
					<label>&nbsp;</label>
					<Button
						secondary
						disabled={loading}
						onClick={handleClick}
						type='submit'
					>
					Change
					</Button>
				</Form.Field>
			</Form.Group>
		</Form>
	);
};

export default styled(Email)`

	.warning-text {
		margin-top: 0.5rem;
		color: red_secondaryM
	}
`;
