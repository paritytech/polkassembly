import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import { useCreatePostMutation, useCategoriesQuery } from '../../generated/graphql';
import { Form } from '../../components/Form';
import { UserDetailsContext } from '../../context/UserDetailsContext'

interface Props {
	className?: string
}

const CreatePost = ({ className }:Props): JSX.Element => {
	const [title, setTitle] = useState<string | undefined>('');
	const [content, setContent] = useState<string | undefined>('');
	const [selectedCategory, setSetlectedCategorie] = useState<number | null>(null);
	const currentUser = useContext(UserDetailsContext);
	const { data: catData, error: catError } = useCategoriesQuery()
	const [createPostMutation, { data, loading, error }] = useCreatePostMutation();
	const [isSending, setIsSending] = useState(false)
	const history = useHistory();

	const handleSend = () => {
		if (currentUser.id && title && content && selectedCategory){
			setIsSending(true);
			createPostMutation({ variables: {
				cat: selectedCategory,
				content,
				title,
				userId: currentUser.id
			} })
		}

	}

	const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value);
	const onContentChange = (event: React.FormEvent<HTMLTextAreaElement>) => setContent(event.currentTarget.value);

	const renderCategories = () => {
		if (!catData || !catData.categories) return null

		return (
			<Button.Group aria-label="Categorie" size="small">
				{ catData.categories.map(({ id, name } : {name: string, id:number}) => {
					return <Button key={id} variant="secondary" onClick={() => setSetlectedCategorie(id)}>{name}</Button>
				})}
			</Button.Group>
		);
	}

	if (data && data.insert_posts &&  data.insert_posts.affected_rows > 0) history.push('/')

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error || catError) {
		error && console.error('Post creatioin error',error)
		catError && console.error('Categories loading error',error)
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
						<Form.TextArea
							label='Content'
							placeholder='The content of your post...'
							onChange={onContentChange}
							rows={8}
							width={16}
						/>
					</Form.Group>
					{renderCategories()}
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
`