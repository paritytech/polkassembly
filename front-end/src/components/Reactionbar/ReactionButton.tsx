// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApolloQueryResult } from 'apollo-client';
import React, { useContext } from 'react';
import styled from '@xstyled/styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import Button from '../../ui-components/Button';
import {
	useAddPostReactionMutation,
	useAddCommentReactionMutation,
	useDeletePostReactionMutation,
	useDeleteCommentReactionMutation,

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

export interface ReactionButtonProps {
	className?: string
	reactionId: number
	reaction: string
	count: number
	userMap: { [ key: string ]: string; }
	postId?: number
	commentId?: string
	refetch?: (variables?:
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

const ReactionButton = function ({
	className,
	reactionId,
	reaction,
	count,
	userMap,
	postId,
	commentId,
	refetch
}: ReactionButtonProps) {
	const { id } = useContext(UserDetailsContext);
	const [addPostReactionMutation] = useAddPostReactionMutation();
	const [addCommentReactionMutation] = useAddCommentReactionMutation();
	const [deletePostReactionMutation] = useDeletePostReactionMutation();
	const [deleteCommentReactionMutation] = useDeleteCommentReactionMutation();
	const reacted = !!userMap[`${id}`];

	const handleReact = () => {
		if (!id) {
			console.log('Login to react');
			return;
		}

		if (postId) {
			if (reacted) {
				deletePostReactionMutation({
					variables: {
						postId,
						reactionId,
						userId: id
					}
				})
					.catch((e) => console.error('Error in reacting to content',e));
			} else {
				addPostReactionMutation({
					variables: {
						postId,
						reactionId,
						userId: id
					}
				})
					.catch((e) => console.error('Error in reacting to content',e));
			}
		}

		if (commentId) {
			if (reacted) {
				deleteCommentReactionMutation({
					variables: {
						commentId,
						reactionId,
						userId: id
					}
				})
					.catch((e) => console.error('Error in reacting to content',e));
			} else {
				addCommentReactionMutation({
					variables: {
						commentId,
						reactionId,
						userId: id
					}
				})
					.catch((e) => console.error('Error in reacting to content',e));
			}
		}

		refetch && refetch();
	};

	return (
		<Button
			className={className + ' social'}
			onClick={handleReact}
			disabled={!id}
		>
			{reaction} {count}
		</Button>
	);
};

export default styled(ReactionButton)`
	color: blue_primary !important;
	font-size: 1em !important;
`;
