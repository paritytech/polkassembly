// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState, useContext, useEffect } from 'react';
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
	reactionId: number
	reaction: string
	count: number
	people: { [ key: string ]: string; }
	postId?: number
	commentId?: string
}

const ReactionButton = function ({
	className,
	reactionId,
	reaction,
	count,
	people,
	postId,
	commentId
}: ReactionButtonProps) {
	const [reactionCount, setReactionCount] = useState(0);
	const [reacted, setReacted] = useState(false);
	const { id } = useContext(UserDetailsContext);
	const [addPostReactionMutation] = useAddPostReactionMutation();
	const [addCommentReactionMutation] = useAddCommentReactionMutation();
	const [deletePostReactionMutation] = useDeletePostReactionMutation();
	const [deleteCommentReactionMutation] = useDeleteCommentReactionMutation();

	// Need to be done once
	useEffect(() => {
		setReactionCount(count);
		if (people[`${id}`]) {
			setReacted(true);
		}
	}, []);

	const handleReact = () => {
		if (!id) {
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
					.then(({ data }) => {
						if (data?.delete_post_reactions?.affected_rows){
							setReactionCount(reactionCount - 1);
							setReacted(false);
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
					.then(({ data }) => {
						console.log(data);
						if (data?.insert_post_reactions?.affected_rows){
							setReactionCount(reactionCount + 1);
							setReacted(true);
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
					.then(({ data }) => {
						if (data?.delete_comment_reactions && data.delete_comment_reactions.affected_rows > 0){
							setReactionCount(reactionCount - 1);
							setReacted(false);
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
					.then(({ data }) => {
						if (data?.insert_comment_reactions && data.insert_comment_reactions.affected_rows > 0){
							setReactionCount(reactionCount + 1);
							setReacted(true);
						}
					})
					.catch((e) => console.error('Error in reacting to content',e));
			}
		}
	};

	return (
		<>
			<Button
				className={className + ' social'}
				onClick={handleReact}
			>
				{reaction} {reactionCount}
			</Button>
		</>
	);
};

export default styled(ReactionButton)`
	color: #4183c4 !important;
	font-size: 1em !important;
`;
