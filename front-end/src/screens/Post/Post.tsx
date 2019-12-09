import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import NoPostFound from './NoPostFound';
import RepliesBlocks from './Replies'
import { PostAndRepliesQueryHookResult, PostFragment } from '../../generated/graphql';

const className = 'Post';
type DataType = PostAndRepliesQueryHookResult['data']

const Post = ( { data }: {data: DataType}) => {
	const post =  data && data.posts && data.posts[0]

	return (
		<div className={className}>
			{ post
				? <PostContent post={post}/>
				: <NoPostFound/> }
			{ post && post.replies && post.replies.length
				? <RepliesBlocks replies={post.replies}/>
				: null }
		</div>
	);
}

const PostContent = ({ post } : {post: PostFragment}) => {
	const { author, category, content, title } = post;

	if (!author || !author.username || !content) return <div>Post not available</div>

	return (
		<>
			<h3>{title} - {category && category.name}</h3>
			<div>by {author.username}</div>
			<br/>
			<ReactMarkdown source={content} />
		</>
	);
}

export default Post;