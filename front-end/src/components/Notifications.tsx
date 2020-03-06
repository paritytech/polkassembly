// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext } from 'react';
import styled from 'styled-components';

import { NotificationContext } from '../context/NotificationContext';
import DismissableNotification from '../ui-components/DismissableNotification';

interface Props{
    className?: string
}

const Notifications = ({ className }: Props) => {
	const { deQueueNotification, notificationsQueue } = useContext(NotificationContext);

	const renderNotifications = () => {
		if (!notificationsQueue.size) return null;

		return Array.from(notificationsQueue).map(([key, notification]) =>
			<DismissableNotification key={key} notification={notification} onDismiss={() => deQueueNotification(key)}/>);
	};

	return (
		<div className={className}>
			{renderNotifications()}
		</div>
	);
};

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
`;