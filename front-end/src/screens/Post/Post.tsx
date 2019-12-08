import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import NoPostFound from './NoPostFound';
import RepliesBlocks from './Replies'
import { PostAndRepliesQueryHookResult } from '../../generated/graphql';

const className = 'Post';
type MyPost = PostAndRepliesQueryHookResult['data']

const Post = ( { data }: {data: MyPost}) => {
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

// FIXME Should be typed
const PostContent = ({ post } : any) => {
	const { author, category, content, title } = post;

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