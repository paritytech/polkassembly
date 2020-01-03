import { ApolloQueryResult } from 'apollo-client/core/types';
import * as React from 'react';
import styled from 'styled-components';

import Comments from './Comments';
import EditableCommentContent from './EditableCommentContent';
import { CommentRecursiveFragment, PostAndCommentsQueryVariables, PostAndCommentsQuery } from '../../generated/graphql';
import CreationLabel from '../../ui-components/CreationLabel';
import UpdateLabel from '../../ui-components/UpdateLabel';

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
margin-top: 3rem;

	.md {
		font-size: 1.4rem;

		h1, h2 {
			font-size: 1.6rem;
			line-height: 120%;
			margin-bottom: 0.5rem;
		}
		
		h3, h4 {
			font-size: 1.4rem;
			line-height: 120%;
			margin-bottom: 0.5rem;
		}

		p, blockquote, ul, ol, dl, table {
			margin-bottom: 0.8rem;
		}

		ul {
			margin-left: 3rem;
		}

		ol {
			padding-inline-start: 3rem;
		}

		a {
			color: #FF5A47;

			&:hover {
				text-decoration: none;
				color: #D94C3D;
				border-bottom: 1px solid #D94C3D;
			}
		}

		blockquote {
			margin-left: 0;
			padding: 0 1em;
			color: #7E7A7A;
			border-left: 0.25rem solid #B5AEAE;
			font-size: 1.4rem;
				& > :first-child {
					margin-top: 0;
				}
				& > :last-child {
					margin-bottom: 0;
				}
		}

		img {
			max-width: 100%;
			margin: 2rem 0;
		}

		code {
			padding: 0.2em 0 0.2em 0;
			margin: 0;
			font-size: 1.2rem;
			background-color: rgba(0, 0, 0, 0.04);
			border-radius: 3px;
			color: #555252;
			&::before, &::after {
			  letter-spacing: -0.2em;
			}
		}
	}
`;