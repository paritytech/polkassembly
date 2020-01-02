import * as React from 'react';
import styled from 'styled-components';

import Comment from './Comment';
import { CommentRecursiveFragment } from '../../generated/graphql';

interface Props{
	className?: string
	comments: CommentRecursiveFragment[]
	firstComment?: boolean
}

const Comments = ({ className, comments, firstComment=true }: Props) => {
	return (
		<div className={className}>
			{firstComment &&	<hr/> }
			<div className={firstComment ? '' : 'comment'} >
				{comments.map((comment:CommentRecursiveFragment) =>
					<Comment key={comment.id} comment={comment}/>
				)}
			</div>
		</div>
	);
};

export default styled(Comments)`
	.comment {
		padding-left: 2rem;
		border-left: #EEE 2px solid;
		margin-top: 1rem;

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