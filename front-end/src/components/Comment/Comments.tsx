// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import { ApolloQueryResult } from 'apollo-client';
import React, { useEffect, useState } from 'react';
import { Icon, Sticky } from 'semantic-ui-react';

import {
	CommentFieldsFragment,
	DiscussionPostAndCommentsQuery,
	DiscussionPostAndCommentsQueryVariables,
	MotionPostAndCommentsQuery,
	MotionPostAndCommentsQueryVariables,
	ProposalPostAndCommentsQuery,
	ProposalPostAndCommentsQueryVariables,
	ReferendumPostAndCommentsQuery,
	ReferendumPostAndCommentsQueryVariables,
	TreasuryProposalPostAndCommentsQuery,
	TreasuryProposalPostAndCommentsQueryVariables
} from '../../generated/graphql';
import Comment from './Comment';

interface Props{
	className?: string
	comments: CommentFieldsFragment[]
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

const Comments = ({ className, comments, refetch }: Props) => {
	const [scrollLink, setScrollLink] = useState('#end');
	const [direction, setDirection] = useState<'angle up' | 'angle down'>('angle down');

	const listener = () => {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			setScrollLink('#page-container');
			setDirection('angle up');
		}

		if (window.scrollY === 0) {
			setScrollLink('#end');
			setDirection('angle down');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listener);
		return () => {
			window.removeEventListener('scroll', listener);
		};
	});

	return (
		<div className={className}>
			{comments.length > 4 && <Sticky>
				<a href={scrollLink}>
					<div className='scroll'>
						<Icon className='icon' name={direction} />
					</div>
				</a>
			</Sticky>}
			{comments.map((comment:CommentFieldsFragment, index: number) =>
				<Comment
					comment={comment}
					key={comment.id}
					last={index === comments.length - 1}
					refetch={refetch}
				/>
			)}
		</div>
	);
};

export default styled(Comments)`
	margin-top: 4rem;

	.scroll {
		width: 50px;
		height: 50px;
		border-style: solid;
		border-width: 1px;
		border-color: grey_border;
		background-color: white;
		border-radius: 50%;
		font-size: 2em;
		line-height: 50px;
  		text-align: center;
		position: absolute;
		right: -50;
		z-index: 10;
		padding: 1px 8px
	}
`;
