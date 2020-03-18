// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState, useContext } from 'react';
import styled from '@xstyled/styled-components';

import { ReactionContext } from '../../context/ReactionContext';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';
import { PostReactionFieldsFragment } from '../../generated/graphql';
import FilteredError from '../../ui-components/FilteredError';
import ReactionButton, { ReactionButtonProps } from './ReactionButton';

interface Props {
	className?: string
	postReactions?: PostReactionFieldsFragment[]
	postId?: number
	commentId?: string
}

const ReactionBar = function ({ className, commentId, postId, postReactions }: Props) {
	const { reactions } = useContext(ReactionContext);

	if (!reactions.length) {
		return null;
	}

	const reactionMap: { [ key: string ]: ReactionButtonProps; } = {};

	reactions.forEach(reaction => {
		const reactionButtonProp: ReactionButtonProps = {
			count: 0,
			people: {},
			reaction: reaction.reaction,
			reactionId: reaction.id
		};
		reactionMap[`${reaction.id}`] = reactionButtonProp;
	});

	postReactions?.forEach(postReaction => {
		if (!reactionMap[postReaction.reaction.id]) {
			return;
		}

		reactionMap[postReaction.reaction.id].count++;

		if (
			postReaction.reactor?.id &&
			!reactionMap[postReaction.reaction.id].people[`${postReaction.reactor?.id}`]
		) {
			reactionMap[postReaction.reaction.id].people[`${postReaction.reactor?.id}`] = `${postReaction.reactor?.username}`;
		}
	});

	console.log(reactionMap);

	return (
		<div className={className}>
			{Object.keys(reactionMap).map((id) => {
				const {
					count,
					people,
					reaction,
					reactionId
				} = reactionMap[id];

				return (
					<ReactionButton
						key={id}
						count={count}
						people={people}
						reaction={reaction}
						reactionId={reactionId}
						commentId={commentId}
						postId={postId}
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
