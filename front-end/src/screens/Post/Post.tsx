import { ApolloQueryResult } from 'apollo-client';
import React, { useContext, useState } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import Comments from '../Comment/Comments';
import NoPostFound from '../../components/NoPostFound';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import CreateRootComment from './CreateRootComment';
import EditablePostContent from './EditablePostContent';
import { PostAndCommentsQueryHookResult, PostAndCommentsQueryVariables, PostAndCommentsQuery } from '../../generated/graphql';

interface Props {
	className?: string;
	data: PostAndCommentsQueryHookResult['data']
	refetch: (variables?: PostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<PostAndCommentsQuery>>
}

const Post = ( { className, data, refetch }: Props ) => {
	const post =  data && data.posts && data.posts[0];
	const { id } = useContext(UserDetailsContext);
	const [isRootCommentFormVisible, setRootCommentFormVisibility] = useState(false);
	const toggleRootContentForm = () => {
		setRootCommentFormVisibility(!isRootCommentFormVisible);
	};

	if (!post) return <NoPostFound/>;

	return (
		<Container className={className}>
			<Grid>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<div className='PostContent'>
						<EditablePostContent
							onReply={toggleRootContentForm}
							post={post}
							refetch={refetch}
						/>
						{ id && isRootCommentFormVisible && <CreateRootComment
							onHide={toggleRootContentForm}
							postId={post.id}
							refetch={refetch}
						/>}
						{ post.comments && post.comments.length
							? <Comments
								comments={post.comments}
								refetch={refetch}
							/>
							: null }
					</div>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}></Grid.Column>
			</Grid>
		</Container>
	);
};

export default styled(Post)`
	.post_info {
		color: text;
		font-size: sm;
		padding-bottom: 2rem;
		margin-bottom: 2rem;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: grey_light;
	}

	.PostContent {
		background-color: white;
		padding: 2rem 3rem 4rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
	}

	.post_tags {
		margin-bottom: 2.5rem;
	}

	h3 {
		font-family: 'Roboto';
		font-size: xl;
		margin-bottom: 0.4rem;
	}

	.post_content {
		color: text;
		font-family: 'Roboto';
		font-size: md;
		line-height: 150%;
		margin-bottom: 2rem;

		p, blockquote, ul, ol, dl, table {
			margin: 0 0 1.5rem 0;
		}

		h1, h2 {
			margin: 2rem 0 1.5rem 0;
		}

		h3, h4 {
			margin: 1.5rem 0 0.5rem 0;
		}

		h1 {
			font-size: 2.4rem;
		}

		h2 {
			font-size: 1.8rem;
		}

		h3 {
			font-size: md;
		}

		h4 {
			font-size: md;
			font-family: 'Roboto Mono';
		}

		h5, h6 {
			font-size: sm;
		}

		ul, ol {
			padding-left: 2rem;
			li > input {
				display: none;
			}	
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
			font-size: 1.6rem;
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
			padding: 0.2rem 0 0.2rem 0;
			margin: 0;
			font-size: sm;
			background-color: rgba(0, 0, 0, 0.04);
			border-radius: 3px;
			color: text;
			&::before, &::after {
			  letter-spacing: -0.2em;
			}
		}
	}

	@media only screen and (max-width: 576px) {
		.post_info {
			font-size: 1.3rem;
		}

		.PostContent {
			padding: 2rem 2rem 2rem 2rem;
		}
	}
`;
