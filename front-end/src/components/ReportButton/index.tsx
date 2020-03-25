// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Icon, TextArea, TextAreaProps, Dropdown, DropdownProps } from 'semantic-ui-react';

import { useReportContentMutation } from '../../generated/graphql';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import Modal from '../../ui-components/Modal';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import messages from '../../util/messages';

interface DiscussionProps {
	type: string
	contentId: string
}

const reasons = [
	'It\'s suspicious or spam',
	'It\'s abusive or harmful',
	'It expresses intentions of self-harm or suicide',
	'other (please let us know in the field below)'
];
const reasonOptions = reasons.map(reason => ({ key: reason, text: reason, value: reason }));
const NETWORK = process.env.REACT_APP_NETWORK || 'kusama';

const ReportButton = function ({ type, contentId }:DiscussionProps) {
	const [showModal, setShowModal] = useState(false);
	const [reason, setReason] = useState('');
	const [comments, setComments] = useState('');
	const [reportContentMutation, { loading, error }] = useReportContentMutation();
	const { queueNotification } = useContext(NotificationContext);
	const { control, errors, handleSubmit } = useForm();

	const handleReport = () => {
		reportContentMutation({
			variables: {
				comments,
				content_id: contentId,
				network: NETWORK,
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
								disabled={loading}
								icon='check'
								primary
								onClick={handleSubmit(handleReport)}
							/>
							<Button
								content='Close'
								icon='close'
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
								<Controller
									as={<Dropdown
										placeholder={'I\'m reporting because'}
										fluid
										selection
										options={reasonOptions}
										onChange={onReasonChange}
									/>}
									control={control}
									name='reason'
									rules={{ required: true }}
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group>
							<Form.Field width={16}>
								<label>Comments (300 char max)</label>
								<Controller
									as={<TextArea
										onChange={onCommentsChange}
										value={comments || ''}
									/>}
									control={control}
									name='comments'
									rules={{ maxLength:300 }}
								/>
							</Form.Field>
						</Form.Group>
						{errors.name && <FilteredError text={messages.REPORT_REASON_REQUIRED}/>}
						{errors.comments && <FilteredError text={messages.REPORT_COMMENTS_MAXLENGTH}/>}
						{error && <FilteredError text={error.message}/>}
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
