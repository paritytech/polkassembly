import { ApolloQueryResult } from 'apollo-client/core/types';
import * as React from 'react';
import styled from 'styled-components';

import Comment from './Comment';
import { CommentRecursiveFragment, ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables, ReferendumPostAndCommentsQueryVariables, DiscussionPostAndCommentsQueryVariables, ReferendumPostAndCommentsQuery, DiscussionPostAndCommentsQuery } from '../../generated/graphql';

interface Props{
	className?: string
	comments: CommentRecursiveFragment[]
	firstComment?: boolean
	refetch: (variables?: ReferendumPostAndCommentsQueryVariables | DiscussionPostAndCommentsQueryVariables | ProposalPostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<ReferendumPostAndCommentsQuery>> | Promise<ApolloQueryResult<ProposalPostAndCommentsQuery>> | Promise<ApolloQueryResult<DiscussionPostAndCommentsQuery>>
}

const Comments = ({ className, comments, firstComment=true, refetch }: Props) => {
	return (
		<div className={className}>
			{firstComment && <hr />}
			<div className={firstComment ? '' : 'comment'} >
				{comments.map((comment:CommentRecursiveFragment) =>
					<Comment
						comment={comment}
						key={comment.id}
						refetch={refetch}
					/>
				)}
			</div>
		</div>
	);
};

export default styled(Comments)`
	.comment {
		padding-left: 2rem;
		border-left: #EEE 2px solid;

		p {
			color:#555;
			font-family: 'Roboto';
			font-size: 1.45rem;
		}

		p:last-child {
			margin-bottom: 1rem;
		}
	}

	hr {
		border-top: 1px solid #EEE;
	}
`;