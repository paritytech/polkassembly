import React, { useState, useContext } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext'
import { useCreatePostMutation, useTopicsQuery } from '../../generated/graphql';
import { useRouter } from '../../hooks';
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
	const { history } = useRouter();

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
		font-size: 1.6rem;
		font-weight: 500;
		text-transform: uppercase;
		border-radius: 0.3rem;
		border: none;
		padding: 0.5rem 1rem;
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
`