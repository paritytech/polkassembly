// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { createContext, useRef,useState } from 'react';

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