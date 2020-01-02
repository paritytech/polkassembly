import React from 'react';
import styled from 'styled-components';

import { Message, SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';
import { NotificationStatus, NotificationType } from '../types';

interface Props{
	className?: string
	notification: NotificationType
	onDismiss: () => void
}

const DismissableNotification = ({ className, notification, onDismiss }: Props) => {
	const { ERROR, SUCCESS, WARNING } = NotificationStatus;
	const { header,message,status } = notification;

	let color: SemanticCOLORS  = 'green';
	let icon: SemanticICONS = 'check';

	switch (status){
	case ERROR:
		color = 'red';
		icon = 'ambulance';
		break;
	case WARNING:
		color = 'orange';
		icon = 'warning';
		break;
	case SUCCESS:
		color = 'green';
		icon = 'check';
		break;
	}

	return (
		<div className={className}>
			<Message
				color={color}
				icon={icon}
				content={message}
				header={header}
				onClick={onDismiss}
				onDismiss={onDismiss}
			/>
		</div>
	);
};

export default styled(DismissableNotification)`
	margin-bottom: 1rem;
	cursor: pointer;
`;