import React from 'react';

import { Container, Grid } from 'semantic-ui-react';
import styled from 'styled-components'

import NoPostFound from '../../components/NoPostFound';
import RepliesBlocks from './Replies'
import { PostAndRepliesQueryHookResult } from '../../generated/graphql';
import EditablePostContent from './EditablePostContent';

interface Props {
	className?: string;
	data: PostAndRepliesQueryHookResult['data']
}

const Post = ( { className, data }: Props ) => {
	const post =  data && data.posts && data.posts[0]

	return (
		<Container className={className}>
			<Grid>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<div className='PostContent'>
						{ post
							? <EditablePostContent post={post}/>
							: <NoPostFound/> }
						{ post && post.replies && post.replies.length
							? <RepliesBlocks replies={post.replies}/>
							: null }
					</div>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}></Grid.Column>
			</Grid>
		</Container>
	);
}

export default styled(Post)`
	.post_info {
		color: #555;
		font-size: 1.2rem;
		padding-bottom: 2rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid #EEE;
	}

	.PostContent {
		background-color: #FFF;
		padding: 2rem 3rem 2rem 3rem;
		border: 1px solid #EEE;
	}

	.post_tags {
		margin-bottom: 1.5rem;		
	}

	h3 {
		font-family: 'Roboto';
		font-size: 2.4rem;
		margin-bottom: 0.4rem;
	}

	.post_content {
		color: #555;
		font-family: 'Roboto';
		font-size: 1.45rem;
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
			font-size: 1.45rem;
		}

		h4 {
			font-size: 1.45rem;
			font-family: 'Roboto Mono';
		}

		h5, h6 {
			font-size: 1.2rem;
		}

		ul, ol {
			padding-left: 2rem;
		}
		
		a {
			color: #EB5757;

			&:hover {
				text-decoration: none;
				color: #CC3D3D;
				border-bottom: 1px solid #CC3D3D;
			}
		}

		blockquote {
			margin-left: 0;
			padding: 0 1em;
			color: #7E7A7A;
			border-left: 0.25rem solid #B5AEAE;
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

	@media only screen and (max-width: 576px) {
		.post_info {
			font-size: 1.3rem;
		}

		.PostContent {
			padding: 2rem 2rem 2rem 2rem;
		}
	}
`;