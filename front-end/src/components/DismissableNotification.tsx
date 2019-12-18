import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Message } from 'semantic-ui-react'
import { NotificationType } from '../types'

interface Props{
	className?: string
	notification: NotificationType
}

const DismissableNotification = ({ className, notification }: Props) => {
	const [dismissed, setDismissed] = useState(false)
	const dismiss = () => setDismissed(true)

	useEffect(() => {setTimeout(dismiss, 5000)},[])

	return (
		<div className={className}>
			{dismissed
				? null
				: <Message
					color='green'
					icon='check'
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