import React, { useState, useContext, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useChangeEmailMutation } from '../../generated/graphql';
import { NotificationStatus } from '../../types';
import { handleTokenChange } from '../../services/auth.service';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';

interface Props{
	className?: string
}

const Email = ({ className }: Props): JSX.Element => {
	const [email, setEmail] = useState<string | null | undefined>('');
	const currentUser = useContext(UserDetailsContext);
	const [changeEmailMutation, { loading, error }] = useChangeEmailMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		setEmail(currentUser.email);
	}, [currentUser.email]);

	const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (email) {
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
						message: e.message,
						status: NotificationStatus.ERROR
					});
					console.error('Change email error:', e);
				});
		}
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
					{!currentUser.email_verified &&
				<div className={'warning-text'}>
					<div><Icon name='warning circle' />Your email is not verified.</div>
				</div>
					}
				</Form.Field>
				<Form.Field width={2}>
					<label>&nbsp;</label>
					<Button
						primary
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
		color: orange;
	}
`;
