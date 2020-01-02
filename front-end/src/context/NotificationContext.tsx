import React, { createContext, useState, useRef } from 'react';

import { NotificationContextType, NotificationType } from '../types';

const initialNotificationContext : NotificationContextType = {
	deQueueNotification: () => {
		throw new Error('setNotificationContextState function must be overridden');
	},
	notificationsQueue : new Map(),
	queueNotification: () => {
		throw new Error('setNotificationContextState function must be overridden');
	}
};

export const NotificationContext = createContext(initialNotificationContext);

export const NotificationProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [globalIndex, setGlobalIndex] = useState(0);
	const [notificationsQueue, setNotificationsQueue] = useState<NotificationContextType['notificationsQueue']>(new Map());
	const queue = useRef(new Map());

	const queueNotification = (notification : NotificationType) => {
		queue.current.set(globalIndex, notification);
		setNotificationsQueue(new Map(queue.current));
		setTimeout(() => deQueueNotification(globalIndex), 5000);
		setGlobalIndex(globalIndex+1);
	};

	const deQueueNotification = ( removeKey: number ) => {
		if (queue.current.has(removeKey)){
			queue.current.delete(removeKey);
			setNotificationsQueue(new Map(queue.current));
		}
	};

	return (
		<NotificationContext.Provider value={{ deQueueNotification, notificationsQueue, queueNotification }}>
			{children}
		</NotificationContext.Provider>
	);
};