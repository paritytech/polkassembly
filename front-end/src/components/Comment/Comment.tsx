// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApolloQueryResult } from 'apollo-client/core/types';
import * as React from 'react';
import styled from '@xstyled/styled-components';

import EditableCommentContent from './EditableCommentContent';
import {
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
import Avatar from '../../ui-components/Avatar';
import CreationLabel from '../../ui-components/CreationLabel';
import UpdateLabel from '../../ui-components/UpdateLabel';
import Reactionbar from '../Reactionbar';

interface Props{
	className?: string,
	comment: CommentFieldsFragment,
	refetch: (variables?:
		ReferendumPostAndCommentsQueryVariables |
		DiscussionPostAndCommentsQueryVariables |
		ProposalPostAndCommentsQueryVariables |
		MotionPostAndCommentsQueryVariables |
		TreasuryProposalPostAndCommentsQueryVariables |
		undefined) =>
		Promise<ApolloQueryResult<TreasuryProposalPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<MotionPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<ReferendumPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<ProposalPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<DiscussionPostAndCommentsQuery>>
}

export const Comment = ({ className, comment, refetch } : Props) => {
	const { author, content, created_at, id, updated_at } = comment;

	if (!author || !author.id || !author.username || !content) return <div>Comment not available</div>;

	return (
		<div className={className}>
			<Avatar
				className='avatar'
				displayname={author.name}
				username={author.username}
			/>
			<div className='comment-wrapper'>
				<div className='comment-box'>
					<CreationLabel
						created_at={created_at}
						displayname={author.name}
						text={'commented'}
						username={author.username}
					/>
					<UpdateLabel
						created_at={created_at}
						updated_at={updated_at}
					/>
					<EditableCommentContent
						authorId={author.id}
						className='comment-content'
						commentId={id}
						content={content}
						refetch={refetch}
					/>
				</div>
				<Reactionbar commentId={id} reactions={comment.reactions} commentReactions={comment.comment_reactions} refetch={refetch} />
			</div>
			<Reactionbar commentId={id} reactions={comment.reactions} commentReactions={comment.comment_reactions} refetch={refetch} />
		</div>
	);
};

export default styled(Comment)`
	display: flex;

	.avatar {
		display: inline-block;
		flex: 0 0 4rem;
		margin-right: 2rem;

		@media only screen and (max-width: 576px) {
			display: none;
		}
	}

	.comment-wrapper {
		margin-bottom: 1rem;
		width: calc(100% - 6rem);

		@media only screen and (max-width: 576px) {
			width: 100%;
		}
	}

	.comment-box {
		background-color: white;
		padding: 2rem 3rem 2rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
	}

	.comment-content {
		margin-top: 1.2rem;
	}
`;
