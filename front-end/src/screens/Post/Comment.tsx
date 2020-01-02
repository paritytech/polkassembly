import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Comments from './Comments';
import { CommentRecursiveFragment } from '../../generated/graphql';
import CreationLabel from '../../ui-components/CreationLabel';
import UpdateLabel from '../../ui-components/UpdateLabel';

interface Props{
	className?: 'Comment'
	comment: CommentRecursiveFragment
}

export const Comment = ({ className, comment } : Props) => {
	const { author, comments:c2, content, created_at, updated_at } = comment;

	if (!author || !author.username || !content) return <div>Comment not available</div>;

	return (
		<>
			<div className={className}>
				<CreationLabel
					created_at={created_at}
					text={'commented'}
					username={author.username}
				/>
				<UpdateLabel
					created_at={created_at}
					updated_at={updated_at}
				/>
				<ReactMarkdown className='md' source={content} />
				{
					c2 && c2.length
						? <Comments comments={c2 as CommentRecursiveFragment[]} firstComment={false} />
						: null
				}
			</div>
		</>
	);
};

export default styled(Comment)`
	.md {
		margin: 0.5rem 0 0 0;
	}
`;