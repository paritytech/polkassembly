import React, { useState, useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { useReportContentMutation } from '../../generated/graphql';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import Modal from '../../ui-components/Modal';
import { Form } from '../../ui-components/Form';
import { TextArea } from '../../ui-components/TextArea';

interface DiscussionProps {
	type: string
	contentId: number
}

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
			})
			.catch((e) => console.error('Error reporting content',e));
	};

	const openModal = () => {
		setShowModal(true);
	};
	const dismissModal = () => {
		setShowModal(false);
	};
	const onReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => setReason(event.currentTarget.value);
	const onCommentsChange = (value: string) => setComments(value);

	return (
		<>
			{showModal ?
				<Modal
					buttons={<Button
						content='Got it'
						icon='check'
						primary
						onClick={dismissModal}
					/>}
					centered
					dimmer='inverted'
					open
					onClose={dismissModal}
					size='tiny'
					title={'Nikhil'}
				>
					<Form standalone={false}>
						<Form.Group>
							<Form.Field width={10}>
								<label>Reason</label>
								<input
									value={reason || ''}
									onChange={onReasonChange}
									placeholder='reason'
									type='text'
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group>
							<Form.Field width={10}>
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
