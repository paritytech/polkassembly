import * as moment from 'moment'
import * as React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import styled from 'styled-components'

import NoPostFound from './NoPostFound';
import Replies from './Replies'
import { PostAndRepliesQueryHookResult } from '../../generated/graphql';
import { Tag } from '../../ui-components/Tag';
// import { QueryResult } from 'react-apollo';

interface Props {
	className?: string;
	data: PostAndRepliesQueryHookResult['data']
} 

// const className = 'Post';
// type MyPost = PostAndRepliesQueryHookResult['data']
// FIXME Should use the query result type
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
							? <Replies replies={post.replies}/>
							: null }
					</div>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}></Grid.Column>
			</Grid>
		</Container>
	);
}

// FIXME Should be typed
const PostContent = ({ post } : any) => {
	const { author, category, content, title, creation_date } = post;

	return (
		<>
			<div className='post_info'>posted by <strong>{author.username}</strong> {moment.default(creation_date, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()}</div>
			<div className='text_muted divider'>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
			<div className='text_muted'>All discussions are off-chain.</div>
			<h3>{title}</h3>
			<div className='post_content'>{content}</div>
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
	}

	.text_muted {
		color: #B5AEAE;
		font-size: 1.2rem;
		margin-bottom: 2rem;	
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