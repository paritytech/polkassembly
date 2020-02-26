import React, { useContext, useEffect, useState } from 'react';
import { Checkbox, CheckboxProps } from 'semantic-ui-react';

import { NotificationContext } from '../../context/NotificationContext';
import { useChangeNotificationPreferenceMutation, useNotificationQuery } from '../../generated/graphql';
import { NotificationStatus } from '../../types';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';

const Notification = (): JSX.Element => {
	const [post_participated, set_post_participated] = useState(false);
	const [post_created, set_post_created] = useState(false);
	const [new_proposal, set_new_proposal] = useState(false);
	const [own_proposal, set_own_proposal] = useState(false);
	const [changeNotificationPreferenceMutation, { error }] = useChangeNotificationPreferenceMutation();
	const { queueNotification } = useContext(NotificationContext);


	useEffect(() => {
		const { data } = useNotificationQuery();

	}, []);



	console.log(data);

	const handleOnChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
		console.log(event, data);

		const value = data.value?.toString() || '';

		if (!value) {
			return;
		}

		changeNotificationPreferenceMutation({
			variables: {
				[value]: data.checked
			}
		})
			.then(({ data }) => {
				if (data && data.changeNotificationPreference && data.changeNotificationPreference.message) {
					queueNotification({
						header: 'Success!',
						message: data.changeNotificationPreference.message,
						status: NotificationStatus.SUCCESS
					});
				}
			}).catch((e) => {
				queueNotification({
					header: 'Failed!',
					message: e.message,
					status: NotificationStatus.ERROR
				});
				console.error('change name error', e);
			});
	};

	return (
		<Form standalone={false}>
			<Form.Group>
				<Form.Field>
					<label>Notification Preference</label>
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					<Checkbox value='post_participated' label='Subscribe to post you participate in' toggle onChange={handleOnChange} />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					<Checkbox value='post_created' label='Subscribe to post you created' toggle />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					<Checkbox value='new_proposal' label='Notified for new proposal in council/motion/referendum' toggle />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					<Checkbox value='own_proposal' label='Notified for your own proposals' toggle />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					{error && <FilteredError text={error.message}/>}
				</Form.Field>
			</Form.Group>
		</Form>
	);
};

export default Notification;
