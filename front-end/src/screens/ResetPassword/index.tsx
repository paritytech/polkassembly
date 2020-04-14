// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext,useState } from 'react';
import { Grid,Header, Icon } from 'semantic-ui-react';

import { NotificationContext } from '../../context/NotificationContext';
import { useResetPasswordMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';

interface Props {
	className?: string
}

const ResetPassword = ({ className }:Props): JSX.Element => {
	const router = useRouter();
	const { token } = router.query;
	const userId = Number(new URLSearchParams(window.location.search).get('user_id'));
	const [newPassword, setNewPassword ] = useState('');
	const { queueNotification } = useContext(NotificationContext);
	const [resetPassword, { loading, error }] = useResetPasswordMutation({
		variables: {
			newPassword,
			token,
			userId
		}
	});

	const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setNewPassword(event.currentTarget.value);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (newPassword){
			resetPassword({
				variables: {
					newPassword,
					token,
					userId
				}
			}).then(({ data }) => {
				if (data && data.resetPassword && data.resetPassword.message) {
					queueNotification({
						header: 'Success!',
						message: data.resetPassword.message,
						status: NotificationStatus.SUCCESS
					});
					router.history.push('/login');
				}
			}).catch((e) => {
				console.error('Reset password error', e);
			});
		}
	};

	const renderNoTokenError = () => {
		if (token) return null;

		return (
			<Header as='h2' icon>
				<Icon name='ambulance' />
				No token password reset token provided
			</Header>
		);
	};

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={4}>
				{renderNoTokenError()}
				{ token && <Form>
					<h3>Set new password</h3>
					<Form.Group>
						<Form.Field width={16}>
							<label>New password</label>
							<input
								onChange={handleNewPasswordChange}
								type="password"
							/>
						</Form.Field>
					</Form.Group>

					<div className={'mainButtonContainer'}>
						<Button
							primary
							disabled={loading}
							onClick={handleClick}
							type="submit"
						>
							Set new password
						</Button>
						{error && <FilteredError text={error.message}/>}
					</div>
				</Form>}
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
		</Grid>
	);
};

export default styled(ResetPassword)`
	.mainButtonContainer{
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;
