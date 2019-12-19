import React, { createContext, useState } from 'react';

import { NotificationContextType, NotificationType } from '../types';

const initialNotificationContext : NotificationContextType = {
	deQueueNotification: () => {
		throw new Error('setNotificationContextState function must be overridden');
	},
	notificationsQueue : [],
	queueNotification: () => {
		throw new Error('setNotificationContextState function must be overridden');
	}
}

export const NotificationContext = createContext(initialNotificationContext)

export const NotificationProvider = ({ children }: React.PropsWithChildren<{}>) => {

	const [notificationsQueue, setNotificationsQueue] = useState<NotificationType[]>([])

	const queueNotification = (notification : NotificationType) => {
		console.log('queueNotification +1')
		setNotificationsQueue([...notificationsQueue, notification])
	}

	const deQueueNotification = ( removeIndex: number ) => {
		console.log('deQueueNotification',removeIndex)
		const buff = notificationsQueue
		buff.splice(removeIndex, 1)
		setNotificationsQueue(buff)
	}

	console.log('notificationsQueue',notificationsQueue)

	return (
		<NotificationContext.Provider value={{ deQueueNotification, notificationsQueue, queueNotification }}>
			{children}
		</NotificationContext.Provider>
	)
}