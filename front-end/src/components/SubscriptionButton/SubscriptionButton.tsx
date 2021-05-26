// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext,useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Popup } from 'semantic-ui-react';

import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { usePostSubscribeMutation, usePostUnsubscribeMutation, useSubscriptionQuery } from '../../generated/graphql';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import cleanError from '../../util/cleanError';

interface DiscussionProps {
	postId: number
}

const PopupContent = styled.span`
	font-size: xs;
	a {
		color: pink_primary;

		&:hover {
			text-decoration: none;
			color: pink_secondary;
		}
	}
`;
const SubscriptionButton = function ({
	postId
}:DiscussionProps) {

	const { email_verified } = useContext(UserDetailsContext);
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
				.catch((e) => {
					queueNotification({
						header: 'Failed!',
						message: cleanError(e.message),
						status: NotificationStatus.ERROR
					});
				});
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
				.catch((e) => {
					queueNotification({
						header: 'Failed!',
						message: cleanError(e.message),
						status: NotificationStatus.ERROR
					});
				});
		}

	};

	const SubscribeButton = () => <Button
		className={'social' + (subscribed && email_verified ? ' negative' : '')}
		disabled={email_verified ? false : true}
		onClick={handleSubscribe}
	>
		<Icon name='remove bookmark'/>{subscribed && email_verified ? 'Unsubscribe' : 'Subscribe'}
	</Button>;

	return email_verified
		?  <SubscribeButton />
		: <Popup
			trigger={<span><SubscribeButton/></span>}
			content={<PopupContent>Set and verify an email <Link to="/settings">in your settings</Link> to be able to subscribe</PopupContent>}
			hoverable={true}
			position='top center'
		/>;

};

export default SubscriptionButton;
