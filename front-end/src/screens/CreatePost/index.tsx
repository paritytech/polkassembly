import React, { useState, useContext } from 'react';
import { Button, Container, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import PostOrCommentForm from '../../components/PostOrCommentForm';
import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useCreatePostMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import { NotificationStatus } from '../../types';
import TopicsRadio from './TopicsRadio';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';

interface Props {
	className?: string
}

const CreatePost = ({ className }:Props): JSX.Element => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { queueNotification } = useContext(NotificationContext);
	const [selectedTopic, setSetlectedTopic] = useState(1);
	const currentUser = useContext(UserDetailsContext);

	const [createPostMutation, { loading, error }] = useCreatePostMutation();
	const [isSending, setIsSending] = useState(false);
	const { history } = useRouter();

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
				} else {
					throw Error('Error in post creation');
				}
			}).catch( e => console.error(e));
		} else {
			console.error('Current userid, title, content or selected topic missing',currentUser.id,title, content, selectedTopic);
		}
	};

	const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value);
	const onContentChange = (content: string) => setContent(content);

	return (
		<Container>
			<Grid>
				<Grid.Column mobile={16} tablet={16} computer={12} largeScreen={10} widescreen={10}>
					<Form className={className}>
						<h3>New Post</h3>
						<PostOrCommentForm
							content={content}
							onContentChange={onContentChange}
							onTitleChange={onTitleChange}
							title={title}
						/>
						<TopicsRadio
							onTopicSelection={(id) => setSetlectedTopic(id)}
						/>

						<div className={'mainButtonContainer'}>
							<Button
								onClick={handleSend}
								disabled={isSending || loading}
								type='submit'
								variant='primary'
							>
								{isSending || loading ? 'Creating...' : 'Create'}
							</Button>
						</div>
						{error && <FilteredError text={error.message}/>}
					</Form>
				</Grid.Column>
				<Grid.Column only='computer' computer={4} largeScreen={6} widescreen={8}/>
			</Grid>
		</Container>
	);
};

export default styled(CreatePost)`
	.mainButtonContainer{
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.ui.button {
		font-family: 'Roboto Mono';
		font-size: 1.6rem;
		font-weight: 500;
		text-transform: uppercase;
		border-radius: 0.3rem;
		border: none;
		padding: 0.5rem 1rem;
		color: #fff;
		background-color: #FF5A47;
		&:focus, &:hover {
			background-color: #D94C3D;
			outline: none;
		}
	}

	.ui.small.buttons {
		margin: 0 0 1.875rem 0;

		.ui.button {
			font-size: 1rem;
			background-color: #B5AEAE;
			padding: 0.5rem 0.8rem;
			border-radius: 0.2rem;
			letter-spacing: 0.05rem;
			line-height: 100%;
			text-transform: none;
			&:focus, &:hover {
				background-color: #282828;
				outline: none;
			}
		}
	}

	.fields {
		.container {
			padding-right: 5px;
			padding-left: 5px;
		}
	}

	textarea {
		font-size: 1.4rem;
	}
`;