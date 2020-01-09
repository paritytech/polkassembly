import React from 'react';
import Showdown from 'showdown';

import CreationLabel from '../ui-components/CreationLabel';
import { PostFragment } from '../generated/graphql';
import UpdateLabel from '../ui-components/UpdateLabel';

const converter = new Showdown.Converter({
	simplifiedAutoLink: true,
	strikethrough: true,
	tables: true,
	tasklists: true
});

const PostContent = ({ post }:{post: PostFragment}) => {
	const { author, content, created_at, title, updated_at } = post;

	if (!author || !author.username || !content) return <div>Post not available</div>;
	return (
		<>
			<h3>{title}</h3>
			<div className='post_info'>
				<CreationLabel
					created_at={created_at}
					username={author.username}
				/>
				<UpdateLabel
					created_at={created_at}
					updated_at={updated_at}
				/>
			</div>
			<div className='md' dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}></div>
		</>
	);
};

export default PostContent;