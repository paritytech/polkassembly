import * as React from 'react';
import { ApolloQueryResult } from 'apollo-client/core/types';
import styled from 'styled-components';

import Comments from './Comments';
import { CommentRecursiveFragment, PostAndCommentsQueryVariables, PostAndCommentsQuery } from '../../generated/graphql';
import CreationLabel from '../../ui-components/CreationLabel';
import UpdateLabel from '../../ui-components/UpdateLabel';
import EditableCommentContent from './EditableCommentContent';

interface Props{
	className?: string,
	comment: CommentRecursiveFragment,
	refetch: (variables?: PostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<PostAndCommentsQuery>>
}

export const Comment = ({ className, comment, refetch } : Props) => {
	const { author, comments:c2, content, created_at, id, updated_at } = comment;

	if (!author || !author.id || !author.username || !content) return <div>Comment not available</div>;

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
				{/* <ReactMarkdown className='md' source={content} /> */}
				<EditableCommentContent
					authorId={author.id}
					commentId={id}
					content={content}
					refetch={refetch}
				/>
				{
					c2 && c2.length
						? <Comments
							comments={c2 as CommentRecursiveFragment[]}
							firstComment={false}
							refetch={refetch}
						/>
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