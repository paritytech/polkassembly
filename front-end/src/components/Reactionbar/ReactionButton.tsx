// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext } from 'react';
import styled from '@xstyled/styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import Button from '../../ui-components/Button';
import {
	useAddPostReactionMutation,
	useAddCommentReactionMutation,
	useDeletePostReactionMutation,
	useDeleteCommentReactionMutation
} from '../../generated/graphql';

export interface ReactionButtonProps {
	className?: string
	reaction: string
	count: number
	userIds: number[]
	postId?: number
	commentId?: string
	refetch?: any
}

const ReactionButton = function ({
	className,
	reaction,
	count,
	userIds,
	postId,
	commentId,
	refetch
}: ReactionButtonProps) {
	const { id } = useContext(UserDetailsContext);
	const [addPostReactionMutation] = useAddPostReactionMutation();
	const [addCommentReactionMutation] = useAddCommentReactionMutation();
	const [deletePostReactionMutation] = useDeletePostReactionMutation();
	const [deleteCommentReactionMutation] = useDeleteCommentReactionMutation();
	const reacted = id && userIds.includes(id);

	const handleReact = () => {
		if (!id) {
			console.error('No user id found. Not logged in?');
			return;
		}

		if (postId) {
			if (reacted) {
				deletePostReactionMutation({
					variables: {
						postId,
						reaction,
						userId: id
					}
				})
					.catch((e) => console.error('Error in reacting to content',e));
			} else {
				addPostReactionMutation({
					variables: {
						postId,
						reaction,
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
						reaction,
						userId: id
					}
				})
					.catch((e) => console.error('Error in reacting to content',e));
			} else {
				addCommentReactionMutation({
					variables: {
						commentId,
						reaction,
						userId: id
					}
				})
					.catch((e) => console.error('Error in reacting to content',e));
			}
		}

		refetch && refetch();
	};

	return (
		<span className={className}>
			<Button
				className={'social' + (reacted ? ' reacted' : '')}
				onClick={handleReact}
				disabled={!id}
			>
				{reaction} {count}
			</Button>
		</span>
	);
};

export default styled(ReactionButton)`
	.social {
		color: blue_primary !important;
		font-size: 1em !important;
	}

	.reacted {
		background-color: blue_secondary !important;
		border: none !important;
	}
`;
