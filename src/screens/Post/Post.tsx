import * as React from 'react';
import NoPostFound from './NoPostFound';
import Replies from './Replies'
import { PostAndRepliesQueryHookResult } from '../../generated/graphql';
// import { QueryResult } from 'react-apollo';

const className = 'Post';
type MyPost = PostAndRepliesQueryHookResult['data']
// FIXME Should use the query result type
const Post = ( { data }: {data: MyPost}) => {
	const post =  data && data.posts && data.posts[0]

	return (
		<div className={className}>
			{ post
				? <PostContent post={post}/>
				: <NoPostFound/> }
			{ post && post.replies && post.replies.length
				? <Replies replies={post.replies}/>
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
			<div>{content}</div>
		</>
	);
}

export default Post;