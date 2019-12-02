import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FormControlProps } from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components'

import { useCreatePostMutation, useCategoriesQuery } from '../../generated/graphql';
import { UserDetailsContext } from '../../context/UserDetailsContext'

interface Props {
	className?: string
}

const CreatePost = ({ className }:Props) => {
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

	const onTitleChange = (event: React.FormEvent<FormControlProps>) => setTitle(event.currentTarget.value);
	const onContentChange = (event: React.FormEvent<FormControlProps>) => setContent(event.currentTarget.value);

	const renderCategories = () => {
		if (!catData || !catData.categories) return null
		
		return (
			<ButtonGroup aria-label="Categorie" size="sm">
				{ catData.categories.map(({ id, name } : {name: string, id:number}) => {
					return <Button key={id} variant="secondary" onClick={() => setSetlectedCategorie(id)}>{name}</Button>
				})}
			</ButtonGroup>			
		);
	}

	if (data && data.insert_posts &&  data.insert_posts.affected_rows > 0) history.push('/')

	if (loading) {
		return <Spinner animation="grow" />;
	}

	if (error || catError) {
		error && console.error('Post creatioin error',error)
		catError && console.error('Categories loading error',error)
	}

	return (
		<Row className={className}>
			<Col className={'bla'} xs={0} sm={0} md={2} lg={2}/>
			<Col xs={12} sm={12} md={8} lg={8}>
				<Form>
					<h3>New Post</h3>
					<Form.Group controlId="postTitle">
						<Form.Field>
							<label>Title</label>
							<input
								onChange={onTitleChange} 
								placeholder='Your title...'
								type="text"
							/>
						</Form.Field>
					</Form.Group>

					<Form.Group controlId="formSignInPassword">
						<Form.TextArea 
							label='Content' 
							placeholder='The content of your post...'
							onChange={onContentChange}
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
			</Col>
			<Col xs={0} sm={0} md={2} lg={2}/>
		</Row>
	);
};

export default styled(CreatePost)`
	form {
		background-color: #FFF;
		padding: 1.25rem 1.875rem 2.5rem 1.875rem;
		border: 1px solid #EEE;
	}

	form h3 {
		margin-bottom: 1.875rem;
	}

	.field {
		margin-bottom: 1.25rem;

		label {
			font-size:0.875rem;
			font-weight: 500;
		}
	}

	input, textarea {
		font-size: 0.875rem;
		color: #282828;
		border: 1 px solid #EEE;
		border-radius: 0rem;
		text-indent: 0.626rem;	
		padding: 0.375rem 0 0.25rem 0;
		width: 100%;
	}

	textarea {
		border-color: #EEE;
	}

	input:focus, textarea:focus {
		outline: 0;
	}
	
	.text-muted {
		font-size: 0.75rem;
		margin: 0.5rem 0 0 0;
	}

	.mainButtonContainer{
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`