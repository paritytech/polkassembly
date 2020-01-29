import React, { useState, useEffect, useContext } from 'react';
import styled from '@xstyled/styled-components';
import { usePostSubscribeMutation, usePostUnsubscribeMutation, useSubscriptionQuery } from '../generated/graphql';
import { NotificationContext } from '../context/NotificationContext';
import { NotificationStatus } from '../types';
import Button from '../ui-components/Button';
import { Icon } from 'semantic-ui-react';

interface DiscussionProps {
	className?: string
	postId: number
}

const SubscriptionButton = function ({
	className,
	postId
}:DiscussionProps) {

	const [subscribed, setSubscribed] = useState(false);
	const [postSubscribeMutation] = usePostSubscribeMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const [postUnsubscribeMutation] = usePostUnsubscribeMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { queueNotification } = useContext(NotificationContext);

	const { data }  = useSubscriptionQuery({
		context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL },
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

export default styled(SubscriptionButton)`
    
`;
