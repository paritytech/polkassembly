// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApolloQueryResult } from 'apollo-client';
import React, { useState, useContext, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { GoCheck, GoX } from 'react-icons/go';
import { Icon } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import ContentForm from '../ContentForm';
import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import {
	useEditCommentMutation,

	CommentFieldsFragment,

	DiscussionPostAndCommentsQueryVariables,
	ProposalPostAndCommentsQueryVariables,
	ReferendumPostAndCommentsQueryVariables,
	MotionPostAndCommentsQueryVariables,
	TreasuryProposalPostAndCommentsQueryVariables,

	DiscussionPostAndCommentsQuery,
	ProposalPostAndCommentsQuery,
	ReferendumPostAndCommentsQuery,
	MotionPostAndCommentsQuery,
	TreasuryProposalPostAndCommentsQuery
} from '../../generated/graphql';
import Reactionbar from '../Reactionbar';
import ReportButton from '../ReportButton';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';
import Markdown from '../../ui-components/Markdown';

interface Props {
	authorId: number,
	className?: string,
	comment: CommentFieldsFragment,
	commentId: string,
	content: string,
	refetch: (variables?:
		DiscussionPostAndCommentsQueryVariables |
		ProposalPostAndCommentsQueryVariables |
		ReferendumPostAndCommentsQueryVariables |
		MotionPostAndCommentsQueryVariables |
		TreasuryProposalPostAndCommentsQueryVariables |
		undefined
	) =>
		Promise<ApolloQueryResult<TreasuryProposalPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<MotionPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<ReferendumPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<ProposalPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<DiscussionPostAndCommentsQuery>>
}

const EditableCommentContent = ({ authorId, className, content, comment, commentId, refetch }: Props) => {
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
								<Button secondary size='small' onClick={handleCancel}><GoX className='icon'/>Cancel</Button>
								<Button primary size='small' onClick={handleSubmit(handleSave)}><GoCheck className='icon' />Save</Button>
							</div>
						</Form>
						:
						<>
							<Markdown md={content} />
							<div className='actions-bar'>
								<Reactionbar
									className='reactions'
									commentId={commentId}
									reactions={comment.reactions}
									commentReactions={comment.comment_reactions}
									refetch={refetch}
								/>
								{id && <div className='vl'/>}
								{id === authorId && <Button className={'social'} onClick={toggleEdit}><Icon name='edit' className='icon'/>Edit</Button>}
								{id && !isEditing && <ReportButton type='comment' contentId={commentId} />}
							</div>
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

	.actions-bar {
		display: flex;
		align-items: center;
	}

	.reactions {
		display: inline-flex;
		border: none;
		padding: 0.4rem 0;
		margin: 0rem;
	}

	.vl {
		display: inline-flex;
		border-left-style: solid;
		border-left-width: 1px;
		border-left-color: grey_border;
		height: 2rem;
		margin: 0 1rem;
	}
`;