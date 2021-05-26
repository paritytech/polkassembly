// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import { useCommentReactionsQuery } from '../../generated/graphql';
import { ReactionMapFields } from '../../types';
import ReactionButton from './ReactionButton';
import { reactions } from './reactions';

interface Props {
	className?: string
	commentId: string
}

const CommentReactionBar = function ({ className, commentId }: Props) {
	const { data, refetch } = useCommentReactionsQuery({ variables: { commentId } });

	const reactionMap: { [ key: string ]: ReactionMapFields; } = {};

	reactions.forEach((reaction) => {
		reactionMap[reaction] = {
			count: 0,
			userNames: []
		};
	});

	data?.comment_reactions?.forEach(({ reaction, reacting_user }) => {
		if (!reactionMap[reaction]) {
			return;
		}

		if (reacting_user?.username && reactionMap[reaction].userNames.includes(reacting_user?.username)){
			console.error('This user has already reacted.');
			return;
		}

		if (reacting_user?.username) {
			reactionMap[reaction].userNames.push(reacting_user?.username);
		}

		reactionMap[reaction].count++;
	});

	return (
		<div className={className}>
			{Object.keys(reactionMap).map((reaction) => {
				const {
					count,
					userNames
				} = reactionMap[reaction];

				return (
					<ReactionButton
						key={reaction}
						count={count}
						userNames={userNames}
						reaction={reaction}
						commentId={commentId}
						refetch={refetch}
					/>
				);
			})}
		</div>
	);
};

export default CommentReactionBar;
