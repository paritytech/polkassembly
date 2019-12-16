import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Comments from './Comments';
import { CommentRecursiveFragment } from '../../generated/graphql';

interface Props{
	comment: CommentRecursiveFragment
}

export const Comment = ({ comment } : Props) => {
	const { author, comments:c2, content, created_at, updated_at } = comment;
	const isEdited = created_at === updated_at;

	if (!author || !author.username || !content) return <div>Comment not available</div>;

	return (
		<>
			<div>{author.username} - {created_at}</div>
			{ isEdited && <div>(edited - {updated_at})</div>}
			<ReactMarkdown source={content} />
			{
				c2 && c2.length
					? <Comments comments={c2 as CommentRecursiveFragment[]} firstComment={false} />
					: null
			}
		</>
	);
}

export default styled(Comment)`

`;