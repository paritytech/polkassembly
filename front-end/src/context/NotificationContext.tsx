import React, { createContext, useState } from 'react';

import { NotificationContextType, NotificationType } from '../types';

const initialNotificationContext : NotificationContextType = {
	notificationsQueue : [],
	queueNotification: () => {
		throw new Error('setNotificationContextState function must be overridden');
	}
}

export const NotificationContext = createContext(initialNotificationContext)

export const NotificationProvider = ({ children }: React.PropsWithChildren<{}>) => {

	const [notificationsQueue, setNotificationsQueue] = useState<NotificationType[]>([])
	const queueNotification = (notification : NotificationType) => {
		setNotificationsQueue([...notificationsQueue, notification])
	}

	return (
		<NotificationContext.Provider value={{ notificationsQueue, queueNotification }}>
			{children}
		</NotificationContext.Provider>
	)
}