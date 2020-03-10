// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState, useEffect, useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { usePostSubscribeMutation, usePostUnsubscribeMutation, useSubscriptionQuery } from '../../generated/graphql';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';

interface DiscussionProps {
	postId: number
}

const SubscriptionButton = function ({
	postId
}:DiscussionProps) {

	const [subscribed, setSubscribed] = useState(false);
	const [postSubscribeMutation] = usePostSubscribeMutation();
	const [postUnsubscribeMutation] = usePostUnsubscribeMutation();
	const { queueNotification } = useContext(NotificationContext);

	const { data }  = useSubscriptionQuery({
		variables: { postId }
	});

	useEffect(() => {
		if (data && data.subscription && data.subscription.subscribed) {
			setSubscribed(data.subscription.subscribed);
		}
	},[data]);

	const handleSubscribe = () => {
		if (subscribed) {
			postUnsubscribeMutation({
				variables: {
					postId
				}
			})
				.then(({ data }) => {
					if (data && data.postUnsubscribe && data.postUnsubscribe.message) {
						queueNotification({
							header: 'Success!',
							message: data.postUnsubscribe.message,
							status: NotificationStatus.SUCCESS
						});
						setSubscribed(false);
					}
				})
				.catch((e) => console.error('Error unsubscribing to post',e));
		} else {
			postSubscribeMutation({
				variables: {
					postId
				}
			})
				.then(({ data }) => {
					if (data && data.postSubscribe && data.postSubscribe.message) {
						queueNotification({
							header: 'Success!',
							message: data.postSubscribe.message,
							status: NotificationStatus.SUCCESS
						});
						setSubscribed(true);
					}
				})
				.catch((e) => console.error('Error subscribing to post',e));
		}

	};

	return (
		<Button
			className={'social' + (subscribed ? ' negative' : '')}
			onClick={handleSubscribe}
		>
			<Icon name='remove bookmark'/>{subscribed ? 'Unsubscribe' : 'Subscribe'}
		</Button>
	);
};

export default SubscriptionButton;
