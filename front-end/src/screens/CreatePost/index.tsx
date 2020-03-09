// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import ContentForm from '../../components/ContentForm';
import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useCreatePostMutation, usePostSubscribeMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import TopicsRadio from './TopicsRadio';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import TitleForm from '../../components/TitleForm';

interface Props {
	className?: string
}

const CreatePost = ({ className }:Props): JSX.Element => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { queueNotification } = useContext(NotificationContext);
	const [selectedTopic, setSetlectedTopic] = useState(1);
	const currentUser = useContext(UserDetailsContext);
	const { control, errors, handleSubmit } = useForm();

	const [createPostMutation, { loading, error }] = useCreatePostMutation();
	const [postSubscribeMutation] = usePostSubscribeMutation();
	const [isSending, setIsSending] = useState(false);
	const { history } = useRouter();

	const createSubscription = (postId: number) => {
		if (!currentUser?.notification?.postCreated) {
			return;
		}

		postSubscribeMutation({
			variables: {
				postId
			}
		})
			.then(({ data }) => {
				if (data && data.postSubscribe && data.postSubscribe.message) {
					console.log(data.postSubscribe.message);
				}
			})
			.catch((e) => console.error('Error subscribing to post',e));
	};

	const handleSend = () => {
		if (currentUser.id && title && content && selectedTopic){
			setIsSending(true);
			createPostMutation({ variables: {
				content,
				title,
				topicId: selectedTopic,
				userId: currentUser.id
			} }).then(({ data }) => {
				if (data && data.insert_posts &&  data.insert_posts.affected_rows > 0 && data.insert_posts.returning.length && data.insert_posts.returning[0].id) {
					const postId = data.insert_posts.returning.length && data.insert_posts.returning[0].id;
					history.push(`/post/${postId}`);
					queueNotification({
						header: 'Thanks for sharing!',
						message: 'Post created successfully.',
						status: NotificationStatus.SUCCESS
					});
					createSubscription(postId);
				} else {
					throw Error('Error in post creation');
				}
			}).catch( e => console.error(e));
		} else {
			console.error('Current userid, title, content or selected topic missing',currentUser.id,title, content, selectedTopic);
		}
	};

	const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>[]) => {setTitle(event[0].currentTarget.value); return event[0].currentTarget.value;};
	const onContentChange = (data: Array<string>) => {setContent(data[0]); return(data[0].length ? data[0] : null);};

	return (
		<Grid>
			<Grid.Column mobile={16} tablet={16} computer={12} largeScreen={10} widescreen={10}>
				<Form className={className}>
					<h3>New Post</h3>
					<Controller
						as={<TitleForm
							errorTitle={errors.title}
						/>}
						control={control}
						name='title'
						onChange={onTitleChange}
						rules={{ required: true }}
					/>
					<Controller
						as={<ContentForm
							errorContent={errors.content}
						/>}
						control={control}
						name='content'
						onChange={onContentChange}
						rules={{ required: true }}
					/>

					<TopicsRadio
						onTopicSelection={(id) => setSetlectedTopic(id)}
					/>

					<div className={'mainButtonContainer'}>
						<Button
							primary
							onClick={handleSubmit(handleSend)}
							disabled={isSending || loading}
							type='submit'
						>
							{isSending || loading ? 'Creating...' : 'Create'}
						</Button>
					</div>
					{error && <FilteredError text={error.message}/>}
				</Form>
			</Grid.Column>
			<Grid.Column only='computer' computer={4} largeScreen={6} widescreen={6}/>
		</Grid>
	);
};

export default styled(CreatePost)`
	.mainButtonContainer{
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;
