import { ApolloQueryResult } from 'apollo-client/core/types';
import * as React from 'react';
import styled from '@xstyled/styled-components';

import Comments from './Comments';
import EditableCommentContent from './EditableCommentContent';
import { CommentRecursiveFragment, ProposalPostAndCommentsQueryVariables, ProposalPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables, DiscussionPostAndCommentsQueryVariables, ReferendumPostAndCommentsQuery, DiscussionPostAndCommentsQuery } from '../../generated/graphql';
import CreationLabel from '../../ui-components/CreationLabel';
import UpdateLabel from '../../ui-components/UpdateLabel';

interface Props{
	className?: string,
	comment: CommentRecursiveFragment,
	refetch: (variables?: ReferendumPostAndCommentsQueryVariables | DiscussionPostAndCommentsQueryVariables | ProposalPostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<ReferendumPostAndCommentsQuery>> | Promise<ApolloQueryResult<ProposalPostAndCommentsQuery>> | Promise<ApolloQueryResult<DiscussionPostAndCommentsQuery>>
}

export const Comment = ({ className, comment, refetch } : Props) => {
	const { author, comments:c2, content, created_at, id, updated_at } = comment;

	if (!author || !author.id || !author.username || !content) return <div>Comment not available</div>;

	return (
		<>
			<div className={className}>
				<CreationLabel
					created_at={created_at}
					displayname={author.name}
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
	background-color: white;
	padding: 2rem 3rem 2rem 3rem;
	border-style: solid;
	border-width: 1px;
	border-color: grey_light;
	margin-bottom: 1rem;

	.md {
		margin-top: 1rem;

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
			li > input {
				display: none;
			}
		}

		ol {
			padding-inline-start: 3rem;
		}

		a {
			color: red_primary;

			&:hover {
				text-decoration: none;
				color: red_secondary;
			}
		}

		blockquote {
			margin-left: 0;
			padding: 0 1em;
			color: grey_primary;
			border-left-style: solid;
			border-left-width: 0.25rem;
			border-left-color: grey_primary;
			font-size: md;
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
			color: black_text;
			&::before, &::after {
			  letter-spacing: -0.2em;
			}
		}
	}
`;