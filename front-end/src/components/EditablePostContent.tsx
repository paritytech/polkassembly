// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import { ApolloQueryResult } from 'apollo-client';
import React, { useContext, useEffect,useState } from 'react';
import { Controller,useForm } from 'react-hook-form';
import { GoCheck, GoX } from 'react-icons/go';

import { NotificationContext } from '../context/NotificationContext';
import { DiscussionPostAndCommentsQuery,
	DiscussionPostAndCommentsQueryVariables,
	DiscussionPostFragment,
	MotionPostAndCommentsQuery,
	MotionPostAndCommentsQueryVariables,
	MotionPostFragment,
	ProposalPostAndCommentsQuery,
	ProposalPostAndCommentsQueryVariables,
	ProposalPostFragment,
	ReferendumPostAndCommentsQuery,
	ReferendumPostAndCommentsQueryVariables,
	ReferendumPostFragment,
	TipPostAndCommentsQuery,
	TipPostAndCommentsQueryVariables,
	TipPostFragment,
	TreasuryProposalPostAndCommentsQuery,
	TreasuryProposalPostAndCommentsQueryVariables,
	TreasuryProposalPostFragment,
	useEditPostMutation
} from '../generated/graphql';
import { NotificationStatus } from '../types';
import Button from '../ui-components/Button';
import FilteredError from '../ui-components/FilteredError';
import { Form } from '../ui-components/Form';
import ContentForm from './ContentForm';
import PostContent from './Post/PostContent';
import TitleForm from './TitleForm';

interface Props {
	className?: string
	isEditing: boolean
	onchainId?: number | null
	post: DiscussionPostFragment | ProposalPostFragment | ReferendumPostFragment | TipPostFragment | TreasuryProposalPostFragment| MotionPostFragment
	postStatus?: string
	refetch: (
		variables?: ReferendumPostAndCommentsQueryVariables
		| DiscussionPostAndCommentsQueryVariables
		| ProposalPostAndCommentsQueryVariables
		| MotionPostAndCommentsQueryVariables
		| TipPostAndCommentsQueryVariables
		| TreasuryProposalPostAndCommentsQueryVariables
		| undefined
	) => Promise<ApolloQueryResult<ReferendumPostAndCommentsQuery>>
		| Promise<ApolloQueryResult<ProposalPostAndCommentsQuery>>
		| Promise<ApolloQueryResult<MotionPostAndCommentsQuery>>
		| Promise<ApolloQueryResult<TipPostAndCommentsQuery>>
		| Promise<ApolloQueryResult<TreasuryProposalPostAndCommentsQuery>>
		| Promise<ApolloQueryResult<DiscussionPostAndCommentsQuery>>
	toggleEdit: () => void
}

const EditablePostContent = ({ className, isEditing, onchainId, post, postStatus, refetch, toggleEdit }: Props) => {
	const { author, content, title } = post;
	const [newContent, setNewContent] = useState(content || '');
	const [newTitle, setNewTitle] = useState(title || '');
	const { queueNotification } = useContext(NotificationContext);
	const {  control, errors, handleSubmit, setValue } = useForm();

	const handleCancel = () => {
		toggleEdit();
		setNewContent(content || '');
		setNewTitle(title || '');
	};
	const handleSave = () => {
		toggleEdit();
		editPostMutation( {
			variables: {
				content: newContent,
				id: post.id,
				title: newTitle
			} }
		)
			.then(({ data }) => {
				if (data && data.update_posts && data.update_posts.affected_rows > 0){
					queueNotification({
						header: 'Success!',
						message: 'Your post was edited',
						status: NotificationStatus.SUCCESS
					});
					refetch();
				}
			})
			.catch((e) => console.error('Error saving post',e));
	};

	const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>[]) => {setNewTitle(event[0].currentTarget.value); return event[0].currentTarget.value;};
	const onContentChange = (data: Array<string>) => {setNewContent(data[0]); return data[0].length ? data[0] : null;};
	const [editPostMutation, { error }] = useEditPostMutation({
		variables: {
			content: newContent,
			id: post.id,
			title: newTitle
		}
	});

	useEffect(() => {
		if (isEditing) {
			setValue('content',content);
			setValue('title',title);
		}
	},[content, isEditing, setValue, title]);

	if (!author || !author.username || !content) return <div>Post content or author could not be found.</div>;

	return (
		<>
			<div className={className}>
				{error?.message && <FilteredError text={error.message}/>}
				{
					isEditing
						?
						<Form standalone={false}>
							<Controller
								as={<TitleForm
									errorTitle={errors.title}
								/>}
								control={control}
								name='title'
								onChange={onTitleChange}
								rules={{ required: true }}
							/>
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
								<Button primary size='small' onClick={handleSubmit(handleSave)}><GoCheck className='icon'/>Save</Button>
							</div>
						</Form>
						:
						<>
							<PostContent onchainId={onchainId} post={post} postStatus={postStatus}/>
						</>
				}
			</div>
		</>
	);
};

export default styled(EditablePostContent)`
	margin-bottom: 2rem;

	.button-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
`;
