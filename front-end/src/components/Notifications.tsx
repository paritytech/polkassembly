import React, { useContext } from 'react'
import styled from 'styled-components'

import { NotificationContext } from '../context/NotificationContext'
import DismissableNotification from '../ui-components/DismissableNotification'

interface Props{
    className?: string
}

const Notifications = ({ className }: Props) => {
	const { notificationsQueue } = useContext(NotificationContext)

	return (
		<div className={className}>
			{
				notificationsQueue.length
					? notificationsQueue.map((notification, index) => <DismissableNotification key={index} notification={notification}/>)
					: null
			}
		</div>
	)
}

export default styled(Notifications)`
    position: fixed;
    z-index: 1;

    @media only screen and (max-width: 576px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    @media only screen and (min-width: 576px) {
        right: 1rem;
        width: 40rem;
    }





`