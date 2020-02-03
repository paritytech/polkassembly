import { ApolloQueryResult } from 'apollo-client';
import React, { useState, useContext, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import { Icon } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import ContentForm from '../ContentForm';
import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useEditCommentMutation, ProposalPostAndCommentsQueryVariables, ProposalPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables, DiscussionPostAndCommentsQueryVariables, ReferendumPostAndCommentsQuery, DiscussionPostAndCommentsQuery } from '../../generated/graphql';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';

interface Props {
	authorId: number,
	className?: string,
	commentId: string,
	content: string,
	refetch: (variables?: ReferendumPostAndCommentsQueryVariables | DiscussionPostAndCommentsQueryVariables | ProposalPostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<ReferendumPostAndCommentsQuery>> | Promise<ApolloQueryResult<ProposalPostAndCommentsQuery>> | Promise<ApolloQueryResult<DiscussionPostAndCommentsQuery>>
}

const EditableCommentContent = ({ authorId, className, content, commentId, refetch }: Props) => {
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
				if (data?.update_comments && data.update_comments.affected_rows > 0){
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
								<Button secondary size='small' onClick={handleCancel}><Icon name='cancel' className='icon'/>Cancel</Button>
								<Button primary size='small' onClick={handleSubmit(handleSave)}><Icon name='check' className='icon'/>Save</Button>
							</div>
						</Form>
						:
						<>
							<ReactMarkdown className='md' source={content} />
							{id === authorId && <Button className={'social'} onClick={toggleEdit}><Icon name='edit' className='icon'/>Edit</Button>}
						</>
				}
			</div>
		</>
	);
};

export default styled(EditableCommentContent)`
	.button-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;	
	}

	.icon {
		margin-top: -0.2rem!important;
		opacity: 1;
	}
`;
