import React, { useState, useContext } from 'react';
import { Icon, TextArea, TextAreaProps, Dropdown, DropdownProps } from 'semantic-ui-react';

import { useReportContentMutation } from '../../generated/graphql';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import Modal from '../../ui-components/Modal';
import { Form } from '../../ui-components/Form';

interface DiscussionProps {
	type: string
	contentId: number
}

const reasons = [
	'It\'s suspicious or spam',
	'It\'s abusive or harmful',
	'It expresses intentions of self-harm or suicide',
	'other (please let us know in the field below)'
];

const reasonOptions = reasons.map(reason => ({ key: reason, text: reason, value: reason }));

const ReportButton = function ({ type, contentId }:DiscussionProps) {
	const [showModal, setShowModal] = useState(false);
	const [reason, setReason] = useState('');
	const [comments, setComments] = useState('');
	const [reportContentMutation] = useReportContentMutation();
	const { queueNotification } = useContext(NotificationContext);

	const handleReport = () => {
		reportContentMutation({
			variables: {
				comments,
				content_id: contentId,
				reason,
				type
			}
		})
			.then(({ data }) => {
				if (data && data.reportContent && data.reportContent.message) {
					queueNotification({
						header: 'Success!',
						message: data.reportContent.message,
						status: NotificationStatus.SUCCESS
					});
				}
				setShowModal(false);
			})
			.catch((e) => console.error('Error reporting content',e));
	};

	const openModal = () => {
		setShowModal(true);
	};
	const dismissModal = () => {
		setShowModal(false);
	};
	const onReasonChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => setReason(data.value?.toString() || '');
	const onCommentsChange = (event: React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => setComments(data.value?.toString() || '');

	return (
		<>
			{showModal ?
				<Modal
					buttons={
						<Form.Group>
							<Button
								content='Report'
								icon='check'
								primary
								onClick={handleReport}
							/>
							<Button
								content='close'
								icon='cross'
								secondary
								onClick={dismissModal}
							/>
						</Form.Group>
					}
					centered
					dimmer='inverted'
					open
					onClose={dismissModal}
					size='tiny'
					title={`Report ${type}`}
				>
					<Form standalone={false}>
						<Form.Group>
							<Form.Field width={16}>
								<label>Reason</label>
								<Dropdown
									placeholder={'I\'m reporting because'}
									fluid
									selection
									options={reasonOptions}
									onChange={onReasonChange}
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group>
							<Form.Field width={16}>
								<label>Comments</label>
								<TextArea
									name={'comments'}
									onChange={onCommentsChange}
									value={comments || ''}
								/>
							</Form.Field>
						</Form.Group>
					</Form>
				</Modal>
				: null
			}
			<Button
				className={'social'}
				onClick={openModal}
			>
				<Icon name='flag'/>{' Report'}
			</Button>
		</>
	);
};

export default ReportButton;
