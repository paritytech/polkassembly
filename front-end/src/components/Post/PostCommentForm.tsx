// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import { ApolloQueryResult } from 'apollo-client';
import React, { useContext,useState } from 'react';
import { Controller,useForm } from 'react-hook-form';
import { GoReply } from 'react-icons/go';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import {
	DiscussionPostAndCommentsQuery,
	DiscussionPostAndCommentsQueryVariables,
	MotionPostAndCommentsQuery,
	MotionPostAndCommentsQueryVariables,
	ProposalPostAndCommentsQuery,
	ProposalPostAndCommentsQueryVariables,
	ReferendumPostAndCommentsQuery,
	ReferendumPostAndCommentsQueryVariables,
	TreasuryProposalPostAndCommentsQuery,
	TreasuryProposalPostAndCommentsQueryVariables,
	useAddPostCommentMutation,
	usePostSubscribeMutation } from '../../generated/graphql';
import Avatar from '../../ui-components/Avatar';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import ContentForm from '../ContentForm';

interface Props {
	className?: string
	postId: number
	refetch: (variables?: DiscussionPostAndCommentsQueryVariables | ProposalPostAndCommentsQueryVariables | ReferendumPostAndCommentsQueryVariables | MotionPostAndCommentsQueryVariables | TreasuryProposalPostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<TreasuryProposalPostAndCommentsQuery>> | Promise<ApolloQueryResult<MotionPostAndCommentsQuery>> | Promise<ApolloQueryResult<ReferendumPostAndCommentsQuery>> | Promise<ApolloQueryResult<ProposalPostAndCommentsQuery>> | Promise<ApolloQueryResult<DiscussionPostAndCommentsQuery>>
}

const PostCommentForm = ({ className, postId, refetch }: Props) => {
	const { id, notification, username } = useContext(UserDetailsContext);
	const [content, setContent] = useState('');
	const { control, errors, handleSubmit, setValue } = useForm();

	const onContentChange = (data: Array<string>) => {setContent(data[0]); return data[0].length ? data[0] : null;};
	const [addPostCommentMutation, { error }] = useAddPostCommentMutation();
	const [postSubscribeMutation] = usePostSubscribeMutation();

	if (!id) return <div>You must log in to comment.</div>;

	const createSubscription = (postId: number) => {
		if (!notification?.postParticipated) {
			return;
		}

		postSubscribeMutation({
			variables: {
				postId
			}
		})
			.then(({ data }) => {
				if (data && data.postSubscribe && data.postSubscribe.message) {
					console.log(data.postSubscribe.message);
				}
			})
			.catch((e) => console.error('Error subscribing to post',e));
	};

	const handleSave = () => {
		addPostCommentMutation( {
			variables: {
				authorId: id,
				content,
				postId
			} }
		)
			.then(({ data }) => {
				if (data && data.insert_comments && data.insert_comments.affected_rows > 0) {
					setContent('');
					setValue('content', '');
					refetch();
					createSubscription(postId);
				} else {
					throw new Error('No data returned from the saving comment query');
				}
			})
			.catch((e) => console.error('Error saving comment',e));
	};

	return (
		<div className={className}>
			{error && <FilteredError text={error.message}/>}
			<Avatar
				className='avatar'
				username={username || ''}
				size={'lg'}
			/>

			<div className='comment-box'>
				<Controller
					as={<ContentForm
						height={100}
						errorContent={errors.content}
					/>}
					name='content'
					control={control}
					onChange={onContentChange}
					rules={{ required: true }}
				/>
				<div className='button-container'>
					<Button primary size='small' onClick={handleSubmit(handleSave)}><GoReply className='icon'/>Reply</Button>
				</div>
			</div>
		</div>
	);
};

export default styled(PostCommentForm)`
	display: flex;
	margin: 2rem 0;

	.avatar {
		display: inline-block;
		flex: 0 0 4rem;
		margin-right: 2rem;
		@media only screen and (max-width: 576px) {
			display: none;
		}
	}

	.comment-box {
		background-color: white;
		padding: 1rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_border;
		border-radius: 3px;
		width: 100%;
	}

	.button-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
`;