import { ApolloQueryResult } from 'apollo-client';
import React, { useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import ContentForm from '../../components/ContentForm';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { PostAndCommentsQueryVariables, PostAndCommentsQuery, useAddRootCommentMutation } from '../../generated/graphql';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';

interface Props {
	className?: string
	onHide: () => void
	postId: number
	refetch: (variables?: PostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<PostAndCommentsQuery>>
}

const CreateRootComment = ({ className, onHide, postId, refetch }: Props) => {
	const { id } = useContext(UserDetailsContext);
	const [content, setContent] = useState('');
	const { control, errors, handleSubmit } = useForm();

	const onContentChange = (data: Array<string>) => {setContent(data[0]); return(data[0].length ? data[0] : null);};
	const [addRootCommentMutation, { error }] = useAddRootCommentMutation();

	if (!id) return <div>You must loggin to comment.</div>;

	const handleCancel = () => {
		setContent('');
		onHide();
	};

	const handleSave = () => {
		addRootCommentMutation( {
			variables: {
				authorId: id,
				content,
				postId
			} }
		)
			.then(({ data }) => {
				if (data && data.insert_comments && data.insert_comments.affected_rows>0){
					setContent('');
					onHide();
					refetch();
				} else {
					throw new Error('No data returned from the saving comment query');
				}
				refetch();})
			.catch((e) => console.error('Error saving comment',e));
	};

	return (
		<div className={className}>
			{error && <FilteredError text={error.message}/>}

			<>
				<Controller
					as={<ContentForm
						errorContent={errors.content}
					/>}
					name='content'
					control={control}
					onChange={onContentChange}
					rules={{ required: true }}
				/>
				<div className='button-container'>
					<Button primary negative onClick={handleCancel}><Icon name='cancel'/> Cancel</Button>
					<Button primary onClick={handleSubmit(handleSave)}><Icon name='reply'/> Reply</Button>
				</div>
			</>
		</div>
	);
};

export default styled(CreateRootComment)`
	margin: 2rem 0;

	.button-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;	
	}

	.icon {
		margin-top: -0.2rem!important;
		margin-right: -0.3rem!important;
		opacity: 1;
	}
`;