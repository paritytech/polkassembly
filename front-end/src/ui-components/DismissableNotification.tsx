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

	.ui.message {
		font-family: font_default;
		border: none;
		outline: none;
		box-shadow: none!important;
		.header {
			font-family: font_mono;
			font-weight: 500;
			font-size: 1.8rem;
		}		
		p {
			opacity: 1;
			font-size: 1.5rem;
		}
		.close {
			text-shadow: none;
			font-size: 1.8rem;
			margin-right 1rem!important;
		}
	}

	.ui.green.message {
		background-color: #44B87E;
		color: #114129;
		.header, .close {
			color: #114129;
		}
	}

	.ui.orange.icon.message {
		background-color: #FF822E;
		color: #662900;
		.header, .close {
			color: #662900;
		}
	}
	
	.ui.red.icon.message {
		background-color: #FF474E;
		color: #520003;
		.header, .close {
			color: #520003;
		}
	}

	.ui.icon.message>.icon:not(.close) {
		opacity: 1;
	}
`;