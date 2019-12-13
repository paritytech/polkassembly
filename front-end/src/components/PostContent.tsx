import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as moment from 'moment'

import { PostFragment } from '../generated/graphql';
import { Popup } from 'semantic-ui-react';

const PostContent = ({ post } : {post: PostFragment}) => {
	const { author, content, created_at, title, updated_at } = post;

	if (!author || !author.username || !content) return <div>Post not available</div>
	return (
		<>
			<h3>{title}</h3>
			<div className='post_info'>
				posted by <strong>{author.username}</strong> {moment.default(created_at, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()}
				{updated_at === created_at ? null : <Popup content={moment.default(updated_at, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()} trigger={<span> (edited)</span>}/>}
			</div>
			<ReactMarkdown className='post_content' source={content} />
		</>
	);
}

export default PostContent;