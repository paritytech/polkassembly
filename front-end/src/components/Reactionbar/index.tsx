// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApolloQueryResult } from 'apollo-client';
import React from 'react';
import styled from '@xstyled/styled-components';

import {
	PostReactionFieldsFragment,
	CommentReactionFieldsFragment,

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
import ReactionButton, { ReactionButtonProps } from './ReactionButton';

interface Reaction {
	id: number
	reaction: string
}

interface Props {
	className?: string
	reactions?: Reaction[]
	postReactions?: PostReactionFieldsFragment[]
	commentReactions?: CommentReactionFieldsFragment[]
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

const ReactionBar = function ({ className, commentId, postId, reactions, postReactions, commentReactions, refetch }: Props) {
	if (!reactions || !reactions.length) {
		return null;
	}

	const reactionMap: { [ key: string ]: ReactionButtonProps; } = {};

	reactions.forEach(({ reaction, id }) => {
		const reactionButtonProp: ReactionButtonProps = {
			count: 0,
			reaction,
			reactionId: id,
			userMap: {}
		};
		reactionMap[`${id}`] = reactionButtonProp;
	});

	postReactions?.forEach(({ reaction, reacting_user }) => {
		if (!reactionMap[reaction.id]) {
			return;
		}

		if (reacting_user?.id && reactionMap[reaction.id].userMap[`${reacting_user?.id}`]){
			console.error('This user has already reacted.');
			return;
		}

		reactionMap[reaction.id].userMap[`${reacting_user?.id}`] = `${reacting_user?.username}`;
		reactionMap[reaction.id].count++;
	});

	commentReactions?.forEach(({ reaction, reacting_user }) => {
		if (!reactionMap[reaction.id]) {
			return;
		}

		if (reacting_user?.id && reactionMap[reaction.id].userMap[`${reacting_user?.id}`]){
			console.error('This user has already reacted.');
			return;
		}

		reactionMap[reaction.id].userMap[`${reacting_user?.id}`] = `${reacting_user?.username}`;
		reactionMap[reaction.id].count++;
	});

	return (
		<div className={className}>
			{Object.keys(reactionMap).map((id) => {
				const {
					count,
					userMap,
					reaction,
					reactionId
				} = reactionMap[id];

				return (
					<ReactionButton
						key={id}
						count={count}
						userMap={userMap}
						reaction={reaction}
						reactionId={reactionId}
						commentId={commentId}
						postId={postId}
						refetch={refetch}
					/>
				);
			})}
		</div>
	);
};

export default styled(ReactionBar)`
	background-color: white;
	border-style: solid;
	border-width: 1px;
	border-color: grey_light;
	margin-bottom: 1rem;
	padding: 5px;
`;
