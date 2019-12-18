import { ApolloQueryResult } from 'apollo-client';
import React, { useState, useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { PostAndCommentsQueryVariables, PostAndCommentsQuery, useAddRootCommentMutation } from '../../generated/graphql';
import PostOrCommentForm from '../../components/PostOrCommentForm';
import { Button } from '../../ui-components/Button';
import { UserDetailsContext } from '../../context/UserDetailsContext';

interface Props {
	className?: string
	onHide: () => void
	postId: number
	refetch: (variables?: PostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<PostAndCommentsQuery>>
}

const CreateRootComment = ({ className, onHide, postId, refetch }: Props) => {
	const { id } = useContext(UserDetailsContext);
	const [content, setContent] = useState('')

	const onContentChange = (content: string) => setContent(content);
	const [addRootCommentMutation, { error }] = useAddRootCommentMutation();

	if (!id) return <div>You must loggin to comment.</div>

	const handleCancel = () => {
		setContent('');
		onHide();
	}

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
					refetch()
				} else {
					throw new Error('No data returned from the saving comment query')
				}
				refetch()})
			.catch((e) => console.error('Error saving comment',e))
	}

	return (
		<div className={className}>
			{error && error.message && <div>{error.message}</div>}

			<>
				<PostOrCommentForm
					content={content}
					onContentChange={onContentChange}
					withTitle={false}
				/>
				<Button className={'secondary'} onClick={handleCancel}>Cancel <Icon name='cancel'/></Button>
				<Button className={'secondary'} onClick={handleSave}>Save <Icon name='save'/></Button>
			</>
		</div>
	);
}

export default CreateRootComment;