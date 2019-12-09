import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import { useCreatePostMutation, useTopicsQuery } from '../../generated/graphql';
import { UserDetailsContext } from '../../context/UserDetailsContext'
import { Form } from '../../ui-components/Form';
import { TextArea } from '../../ui-components/TextArea';

interface Props {
	className?: string
}

const CreatePost = ({ className }:Props): JSX.Element => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [selectedTopic, setSetlectedTopic] = useState<number | null>(null);
	const currentUser = useContext(UserDetailsContext);
	const { data: topicData, error: topicError } = useTopicsQuery()
	const [createPostMutation, { data, loading, error }] = useCreatePostMutation();
	const [isSending, setIsSending] = useState(false)
	const history = useHistory();

	const handleSend = () => {
		if (currentUser.id && title && content && selectedTopic){
			setIsSending(true);
			createPostMutation({ variables: {
				content,
				title,
				topicId: selectedTopic,
				userId: currentUser.id
			} })
		}
	}

	const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value);
	const renderTopics = () => {
		if (!topicData || !topicData.topics) return null

		return (
			<Button.Group size="small">
				{ topicData.topics.map(({ id, name } : {name: string, id:number}) => {
					return <Button key={id} onClick={() => setSetlectedTopic(id)}>{name}</Button>
				})}
			</Button.Group>
		);
	}

	if (data && data.insert_posts &&  data.insert_posts.affected_rows > 0) history.push('/')

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error || topicError) {
		error && console.error('Post creatioin error',error)
		topicError && console.error('Topic loading error',error)
	}

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={4}>
				<Form>
					<h3>New Post</h3>
					<Form.Group>
						<Form.Field width={16}>
							<label>Title</label>
							<input
								onChange={onTitleChange}
								placeholder='Your title...'
								type="text"
							/>
						</Form.Field>
					</Form.Group>

					<Form.Group>
						<TextArea
							onChange={setContent}
							value={content}
						/>
					</Form.Group>
					{renderTopics()}
					<div className={'mainButtonContainer'}>
						<Button
							onClick={handleSend}
							disabled={isSending}
							type='submit'
							variant='primary'
						>
							{isSending ? 'Creating...' : 'Create'}
						</Button>
					</div>
				</Form>
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
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

	.ui.button {
		font-family: 'Roboto Mono';
		font-size: 1.125rem;
		font-weight: 500;
		text-transform: uppercase;
		border-radius: 0.188rem;
		border: none;
		padding: 0.625rem 0.938rem;
		color: #fff;
		background-color: #EB5757;
		&:focus, &:hover {
			background-color: #CC3D3D;
        	outline: none;
		}
	}

	.ui.small.buttons {
		margin: 0 0 1.875rem 0;

		.ui.button {
			font-size: 0.75rem;
			background-color: #CCC;
			padding: 0.313rem 0.5rem;
			border-radius: 0.125rem;
			letter-spacing: 0.031rem;
			&:focus, &:hover {
				background-color: #282828;
				outline: none;
			}
		}
	}
`