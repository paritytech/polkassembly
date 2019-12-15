import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { CommentRecursiveFragment } from '../../generated/graphql';

interface Props{
	className?: string
	comments: CommentRecursiveFragment[]
	firstComment?: boolean
}

const Comments = ({ className, comments, firstComment=true }: Props) => {
	return (
		<div className={className + ' Comments'}>
			{
				firstComment &&
				<>
					<hr/>
					<div>Comments</div>
				</>
			}

			<div className={firstComment ? 'comment' : ''}>
				{comments.map((comment:CommentRecursiveFragment) => {
					<CommentBlock comment={comment}/>
				})}
			</div>
		</div>
	)
}

const CommentBlock = (comment : CommentRecursiveFragment) => {
	const { author, comments:c2, content, created_at, id, updated_at } = comment;
	const isEdited = created_at === updated_at;

	if (!author || !author.username || !content) return <div>Comment not available</div>;

	return (
		<div key={id}>
			<h3>{author.username} - {created_at}</h3>
			{ isEdited && <div>(edited - {updated_at})</div>}
			<ReactMarkdown source={content} />
			{c2 && c2.length && <Comments comments={c2} firstComment={false} />}
		</div>
	);
}

export default styled(Comments)`
	&.comment{
		margin-left:3rem
	}
`;