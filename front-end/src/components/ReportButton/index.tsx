import React, { useState, useEffect, useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { useReportContentMutation } from '../../generated/graphql';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';

interface DiscussionProps {
	type: string
	contentId: number
}

const ReportButton = function ({ type, contentId }:DiscussionProps) {
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

	return (
		<Button
			className={'social'}
			onClick={handleReport}
		>
			<Icon name='flag'/>{' Report'}
		</Button>
	);
};

export default ReportButton;
