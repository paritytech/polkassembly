import { ApolloQueryResult } from 'apollo-client';
import React, { useState, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import PostOrCommentForm from '../../components/PostOrCommentForm';
import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useEditCommentMutation, PostAndCommentsQueryVariables, PostAndCommentsQuery } from '../../generated/graphql';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';

interface Props {
	authorId: number,
	className?: string,
	commentId: string,
	content: string,
	refetch: (variables?: PostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<PostAndCommentsQuery>>
}

const EditableCommenContent = ({ authorId, className, content, commentId, refetch }: Props) => {
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useContext(UserDetailsContext);
	const [newContent, setNewContent] = useState(content || '');
	const toggleEdit = () => setIsEditing(!isEditing);
	const { queueNotification } = useContext(NotificationContext);
	const handleCancel = () => {
		toggleEdit();
		setNewContent(content || '');
	};
	const handleSave = () => {
		setIsEditing(false);
		editCommentMutation( {
			variables: {
				content: newContent,
				id: commentId
			} }
		)
			.then(({ data }) => {
				if (data && data.update_comments && data.update_comments.affected_rows > 0){
					refetch();
					queueNotification({
						header: 'Success!',
						message: 'Your comment was edited.',
						status: NotificationStatus.SUCCESS
					});
				}
			})
			.catch((e) => console.error('Error saving comment: ',e));
	};
	const onContentChange = (content: string) => setNewContent(content);
	const [editCommentMutation, { error }] = useEditCommentMutation({
		variables: {
			content: newContent,
			id: commentId
		}
	});

	return (
		<>
			<div className={className}>
				{error && error.message && <div>{error.message}</div>}
				{
					isEditing
						?
						<Form standalone={false}>
							<PostOrCommentForm
								content={newContent}
								onContentChange={onContentChange}
								withTitle={false}
							/>
							<div className='button-container'>
								<Button secondary onClick={handleCancel}><Icon name='cancel' className='icon'/> Cancel</Button>
								<Button primary onClick={handleSave}><Icon name='check' className='icon'/> Save</Button>
							</div>
						</Form>
						:
						<>
							<ReactMarkdown className='md' source={content} />
							{id === authorId && <Button className={'social'} onClick={toggleEdit}><Icon name='edit' className='icon'/> Edit</Button>}
						</>
				}
			</div>
		</>
	);
};

export default styled(EditableCommenContent)`
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
}`;