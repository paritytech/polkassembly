import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Message, SemanticCOLORS, SemanticICONS } from 'semantic-ui-react'
import { NotificationStatus, NotificationType } from '../types'

interface Props{
	className?: string
	notification: NotificationType
}

const DismissableNotification = ({ className, notification }: Props) => {
	const [dismissed, setDismissed] = useState(false)
	const dismiss = () => setDismissed(true)
	const { ERROR, SUCCESS, WARNING } = NotificationStatus
	const { header,message,status } = notification

	useEffect(() => {
		setTimeout(dismiss, 5000)
	},[])

	let color: SemanticCOLORS  = 'green'
	let icon: SemanticICONS = 'check'

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
			{dismissed
				? null
				: <Message
					color={color}
					icon={icon}
					content={message}
					header={header}
					onClick={dismiss}
					onDismiss={dismiss}
				/>}
		</div>
	)
}

export default styled(DismissableNotification)`
	margin-bottom: 1rem;
	cursor: pointer;
`