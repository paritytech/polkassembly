import React, { useState, useContext, useEffect } from 'react';

import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';
import { useChangeNameMutation } from '../../generated/graphql';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';
import { handleTokenChange } from '../../services/auth.service';

const Fullname = (): JSX.Element => {
	const [name, setName] = useState<string | null | undefined>('');
	const currentUser = useContext(UserDetailsContext);
	const [changeNameMutation, { loading, error }] = useChangeNameMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		setName(currentUser.name);
	}, [currentUser.name]);

	const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.currentTarget.value);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (name) {
			changeNameMutation({
				variables: {
					newName: name
				}
			})
				.then(({ data }) => {
					if (data && data.changeName && data.changeName.message) {
						queueNotification({
							header: 'Success!',
							message: data.changeName.message,
							status: NotificationStatus.SUCCESS
						});
					}
					if (data && data.changeName && data.changeName.token) {
						handleTokenChange(data.changeName.token);
					}
					currentUser.setUserDetailsContextState((prevState) => {
						return {
							...prevState,
							name
						};
					});
				}).catch((e) => {
					queueNotification({
						header: 'Failed!',
						message: e.message,
						status: NotificationStatus.ERROR
					});
					console.error('change name error', e);
				});
		}
	};

	return (
		<Form.Group>
			<Form.Field width={10}>
				<label>Full Name</label>
				<input
					value={name || ''}
					onChange={onNameChange}
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

export default Fullname;
