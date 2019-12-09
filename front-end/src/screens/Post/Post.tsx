import * as moment from 'moment'
import * as React from 'react';

import ReactMarkdown from 'react-markdown';
import { Container, Grid } from 'semantic-ui-react';
import styled from 'styled-components'

import NoPostFound from './NoPostFound';
import RepliesBlocks from './Replies'
import { PostAndRepliesQueryHookResult, PostFragment } from '../../generated/graphql';
import { Tag } from '../../ui-components/Tag';

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
							? <PostContent post={post}/>
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

const PostContent = ({ post } : {post: PostFragment}) => {
	const { author, category, content, creation_date, title } = post;

	if (!author || !author.username || !content) return <div>Post not available</div>

	return (
		<>
			<div className='post_info'>posted by <strong>{author.username}</strong> {moment.default(creation_date, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()}</div>
			<div className='text_muted divider'>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
			<h3>{title}</h3>
			<ReactMarkdown className='post_content' source={content} />
			<div className='post_tags'><Tag>{category && category.name}</Tag></div>
		</>
	);
}

export default styled(Post)`
	.post_info {
		color: #555;
		font-size: 1.2rem;
		margin-bottom: 2rem;
		float: left;
		clear: none;
	}

	.divider {
		float: left;
	}

	.PostContent {
		background-color: #FFF;
		padding: 2rem 3rem 2rem 3rem;
		border: 1px solid #EEE;
	}

	h3 {
		font-family: 'Roboto';
		margin-bottom: 1.5rem;
	}

	.post_content {
		color: #555;
		font-size: 1.45rem;
		line-height: 150%;
		margin-bottom: 1.25rem;	
	}

	@media only screen and (max-width: 576px) {
		.post_info {
			font-size: 1.3rem;
			clear: both;
			margin-bottom: 0rem;
		}

		.text_muted {
			font-size: 1.3rem;
			clear: both;	
		}

		.divider {
			display: none;
		}
	}
`;