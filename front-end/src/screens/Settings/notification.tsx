import React, { useContext, useState, useEffect } from 'react';
import { Checkbox, CheckboxProps } from 'semantic-ui-react';

import { NotificationContext } from '../../context/NotificationContext';
import { useChangeNotificationPreferenceMutation, useNotificationQuery } from '../../generated/graphql';
import { NotificationStatus } from '../../types';
import FilteredError from '../../ui-components/FilteredError';
import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';

const Notification = (): JSX.Element => {
	const [post_participated, set_post_participated] = useState<boolean>(false);
	const [post_created, set_post_created] = useState<boolean>(false);
	const [new_proposal, set_new_proposal] = useState<boolean>(false);
	const [own_proposal, set_own_proposal] = useState<boolean>(false);
	const [changeNotificationPreferenceMutation, { error }] = useChangeNotificationPreferenceMutation();
	const { data } = useNotificationQuery();
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		set_post_participated(data?.notification?.post_participated || false);
		set_post_created(data?.notification?.post_created || false);
		set_new_proposal(data?.notification?.new_proposal || false);
		set_own_proposal(data?.notification?.own_proposal || false);
	}, [data]);

	const updatePreference = () => {
		changeNotificationPreferenceMutation({
			variables: {
				new_proposal,
				own_proposal,
				post_created,
				post_participated
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

	const handlePostParticipatedChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
		set_post_participated(data.checked || false);
	};

	const handlePostCreatedChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
		set_post_created(data.checked || false);
		updatePreference();
	};

	const handleNewProposalChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
		set_new_proposal(data.checked || false);
		updatePreference();
	};

	const handleOwnProposalChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
		set_own_proposal(data.checked || false);
		updatePreference();
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
					<Checkbox label='Subscribe to post you participate in' checked={post_participated} toggle onChange={handlePostParticipatedChange} />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					<Checkbox label='Subscribe to post you created' checked={post_created} toggle onChange={handlePostCreatedChange} />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					<Checkbox label='Notified for new proposal in council/motion/referendum' checked={new_proposal} toggle onChange={handleNewProposalChange} />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					<Checkbox label='Notified for your own proposals' checked={own_proposal} toggle onChange={handleOwnProposalChange} />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field width={6}>
					<label>&nbsp;</label>
					{error && <FilteredError text={error.message}/>}
					<Button
						secondary
						onClick={updatePreference}
						type="submit"
					>
					Change Preference
					</Button>
				</Form.Field>
			</Form.Group>

		</Form>
	);
};

export default Notification;
