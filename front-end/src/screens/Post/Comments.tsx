import * as React from 'react';
import styled from 'styled-components';

import Comment from './Comment'
import { CommentRecursiveFragment } from '../../generated/graphql';

interface Props{
	className?: string
	comments: CommentRecursiveFragment[]
	firstComment?: boolean
}

const Comments = ({ className, comments, firstComment=true }: Props) => {
	return (
		<div className={className}>
			{
				firstComment &&
				<>
					<hr/>
					<div>Comments</div>
				</>
			}

			<div className={firstComment ? '' : 'comment'} >
				{comments.map((comment:CommentRecursiveFragment) =>
					<Comment key={comment.id} comment={comment}/>
				)}
			</div>
		</div>
	)
}

export default styled(Comments)`
	.comment{
		margin-left: 3rem;
	}
`;