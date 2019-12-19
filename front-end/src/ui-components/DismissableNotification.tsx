import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Message, SemanticCOLORS, SemanticICONS } from 'semantic-ui-react'
import { NotificationType, NotificationStatus } from '../types'

interface Props{
	className?: string
	notification: NotificationType
}

const DismissableNotification = ({ className, notification }: Props) => {
	const [dismissed, setDismissed] = useState(false)
	const dismiss = () => setDismissed(true)

	useEffect(() => {
		setTimeout(dismiss, 5000)
	},[])

	let color: SemanticCOLORS  = 'green'
	let icon: SemanticICONS = 'check'

	switch (notification.status){
	case NotificationStatus.ERROR:
		color = 'red';
		icon = 'ambulance';
		break;
	case NotificationStatus.WARNING:
		color = 'orange';
		icon = 'warning';
		break;
	case NotificationStatus.SUCCESS:
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
					content={notification.message}
					header={notification.header}
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