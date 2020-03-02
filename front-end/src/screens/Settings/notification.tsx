import React, { useContext, useState, useEffect } from 'react';
import { Checkbox, CheckboxProps } from 'semantic-ui-react';

import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useChangeNotificationPreferenceMutation } from '../../generated/graphql';
import { NotificationStatus } from '../../types';
import FilteredError from '../../ui-components/FilteredError';
import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';

const Notification = (): JSX.Element => {
	const { notification } = useContext(UserDetailsContext);
	const [changed, setChanged] = useState<boolean>(false);
	const [postParticipated, setPostParticipated] = useState<boolean>(false);
	const [postCreated, setPostCreated] = useState<boolean>(false);
	const [newProposal, setNewProposal] = useState<boolean>(false);
	const [ownProposal, setOwnProposal] = useState<boolean>(false);
	const [changeNotificationPreferenceMutation, { error }] = useChangeNotificationPreferenceMutation();
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		setPostParticipated(notification?.postParticipated || false);
		setPostCreated(notification?.postCreated || false);
		setNewProposal(notification?.newProposal || false);
		setOwnProposal(notification?.ownProposal || false);
	}, [notification]);

	const updatePreference = () => {
		changeNotificationPreferenceMutation({
			variables: {
				newProposal,
				ownProposal,
				postCreated,
				postParticipated
			}
		})
			.then(({ data }) => {
				if (data && data.changeNotificationPreference && data.changeNotificationPreference.message) {
					queueNotification({
						header: 'Success!',
						message: data.changeNotificationPreference.message,
						status: NotificationStatus.SUCCESS
					});
					setChanged(false);
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
		setPostParticipated(data.checked || false);
		setChanged(true);
	};

	const handlePostCreatedChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
		setPostCreated(data.checked || false);
		setChanged(true);
	};

	const handleNewProposalChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
		setNewProposal(data.checked || false);
		setChanged(true);
	};

	const handleOwnProposalChange = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
		setOwnProposal(data.checked || false);
		setChanged(true);
	};

	return (
		<Form standalone={false}>
			<Form.Group>
				<Form.Field>
					<label>Notification Preferences</label>
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					<Checkbox label='Subscribe to post you participate in' checked={postParticipated} toggle onChange={handlePostParticipatedChange} />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					<Checkbox label='Subscribe to post you created' checked={postCreated} toggle onChange={handlePostCreatedChange} />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					<Checkbox label='Notified for new proposal in council/motion/referendum' checked={newProposal} toggle onChange={handleNewProposalChange} />
				</Form.Field>
			</Form.Group>
			<Form.Group>
				<Form.Field>
					<Checkbox label='Notified for your own proposals' checked={ownProposal} toggle onChange={handleOwnProposalChange} />
				</Form.Field>
			</Form.Group>
			{changed ? (
				<Form.Group>
					<Form.Field width={6}>
						{error && <FilteredError text={error.message}/>}
						<Button
							secondary
							onClick={updatePreference}
							type="submit"
						>
						Save
						</Button>
					</Form.Field>
				</Form.Group>
			): null}
		</Form>
	);
};

export default Notification;
