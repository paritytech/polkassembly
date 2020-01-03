import { ApolloQueryResult } from 'apollo-client/core/types';
import * as React from 'react';
import styled from 'styled-components';

import Comment from './Comment';
import { CommentRecursiveFragment, PostAndCommentsQueryVariables, PostAndCommentsQuery } from '../../generated/graphql';

interface Props{
	className?: string
	comments: CommentRecursiveFragment[]
	firstComment?: boolean
	refetch: (variables?: PostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<PostAndCommentsQuery>>
}

const Comments = ({ className, comments, firstComment=true, refetch }: Props) => {
	return (
		<div className={className}>
			{firstComment}
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
`;