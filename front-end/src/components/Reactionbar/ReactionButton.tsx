// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState, useContext, useEffect } from 'react';
import styled from '@xstyled/styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import Button from '../../ui-components/Button';
import { useAddPostReactionMutation } from '../../generated/graphql';

export interface ReactionButtonProps {
	className?: string
	reactionId: number
	reaction: string
	count: number
	people: string[]
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
	const { id } = useContext(UserDetailsContext);
	const [addPostReactionMutation] = useAddPostReactionMutation();

	useEffect(() => {
		setReactionCount(count);
	}, [count]);

	const handleReact = () => {
		if (!postId || !id) {
			return;
		}

		addPostReactionMutation({
			variables: {
				postId,
				reactionId,
				userId: id
			}
		})
			.then(({ data }) => {
				if (data?.insert_post_reactions && data.insert_post_reactions.affected_rows > 0){
					setReactionCount(reactionCount + 1);
				}
			})
			.catch((e) => console.error('Error in reacting to content',e));
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
