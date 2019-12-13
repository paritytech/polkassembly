import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as moment from 'moment'

import { PostFragment } from '../generated/graphql';

const PostContent = ({ post } : {post: PostFragment}) => {
	const { author, content, created_at, title } = post;

	if (!author || !author.username || !content) return <div>Post not available</div>

	return (
		<>
			<h3>{title}</h3>
			<div className='post_info'>posted by <strong>{author.username}</strong> {moment.default(created_at, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()}</div>
			<ReactMarkdown className='post_content' source={content} />
		</>
	);
}

export default PostContent;