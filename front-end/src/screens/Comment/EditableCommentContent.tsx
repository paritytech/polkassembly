import { ApolloQueryResult } from 'apollo-client';
import React, { useState, useContext, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Icon } from 'semantic-ui-react';
import Showdown from 'showdown';
import styled from 'styled-components';

import ContentForm from '../../components/ContentForm';
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

const converter = new Showdown.Converter({
	simplifiedAutoLink: true,
	strikethrough: true,
	tables: true,
	tasklists: true
});

const EditableCommenContent = ({ authorId, className, content, commentId, refetch }: Props) => {
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useContext(UserDetailsContext);
	const [newContent, setNewContent] = useState(content || '');
	const toggleEdit = () => setIsEditing(!isEditing);
	const { queueNotification } = useContext(NotificationContext);
	const {  control, errors, handleSubmit, setValue } = useForm();

	useEffect(() => {
		isEditing && setValue('content',content);
	},[content, isEditing, setValue]);

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
	const onContentChange = (data: Array<string>) => {setNewContent(data[0]); return(data[0].length ? data[0] : null);};
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
								<Button primary negative onClick={handleCancel}><Icon name='cancel' className='icon'/> Cancel</Button>
								<Button primary onClick={handleSubmit(handleSave)}><Icon name='check' className='icon'/> Save</Button>
							</div>
						</Form>
						:
						<>
							<div className='md' dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}></div>
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