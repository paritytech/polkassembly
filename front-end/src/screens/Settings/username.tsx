import React, { useState, useContext, useEffect } from 'react';

import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';
import { useChangeUsernameMutation } from '../../generated/graphql';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';
import { handleTokenChange } from '../../services/auth.service';

const Username = (): JSX.Element => {
	const [username, setUsername] = useState<string | null | undefined>('');
	const currentUser = useContext(UserDetailsContext);
	const [changeUsernameMutation, { loading, error }] = useChangeUsernameMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		setUsername(currentUser.username);
	}, [currentUser.username]);

	const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (username) {
			changeUsernameMutation({
				variables: {
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
				}).catch((e) => {
					queueNotification({
						header: 'Failed!',
						message: e.message,
						status: NotificationStatus.ERROR
					});
					console.error('change username error', e);
				});
		}
	};

	return (
		<Form.Group>
			<Form.Field width={10}>
				<label>Username</label>
				<input
					value={username || ''}
					onChange={onUserNameChange}
					placeholder='username'
					type='text'
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
	);
};

export default Username;
