// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useEffect,useState } from 'react';

import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useChangeNameMutation } from '../../generated/graphql';
import { handleTokenChange } from '../../services/auth.service';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import cleanError from '../../util/cleanError';

const Fullname = (): JSX.Element => {
	const [name, setName] = useState<string | null | undefined>('');
	const currentUser = useContext(UserDetailsContext);
	const [changeNameMutation, { loading, error }] = useChangeNameMutation();
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		setName(currentUser.name);
	}, [currentUser.name]);

	const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.currentTarget.value);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (name || name === '') {
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
						message: cleanError(e.message),
						status: NotificationStatus.ERROR
					});
					console.error('change name error', e);
				});
		}
	};

	return (
		<Form standalone={false}>
			<Form.Group>
				<Form.Field width={10}>
					<label>Display Name</label>
					<input
						value={name || ''}
						onChange={onNameChange}
						placeholder='username'
						type='text'
					/>
					{error && <FilteredError text={error.message}/>}
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

export default Fullname;
