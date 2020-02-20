import React from 'react';
import styled from '@xstyled/styled-components';

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
		icon = 'times circle';
		break;
	case WARNING:
		color = 'orange';
		icon = 'warning circle';
		break;
	case SUCCESS:
		color = 'green';
		icon = 'check circle';
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
	margin: 1rem 0;
	cursor: pointer;

	.ui.message {
		font-family: font_default;
		background-color: white;
		border: none;
		outline: none;
		box-shadow: 0px 0.2rem 0.2rem rgba(0,0,0,0.05);
		.header {
			font-family: font_default;
			font-weight: 500;
			font-size: md;
			color: black_text;
		}		
		p {
			opacity: 1;
			font-size: sm;
			color: black_text;
		}
		.close {
			text-shadow: none;
			font-size: 1.8rem;
			margin-right 1rem!important;
			color: grey_secondary;
		}
	}

	.ui.icon.message>.icon:not(.close) {
		opacity: 1;
	}
`;