import React from 'react';
import ReactMarkdown from 'react-markdown';

import CreationLabel from '../ui-components/CreationLabel';
import { DiscussionPostFragment, ProposalPostFragment, ReferendumPostFragment } from '../generated/graphql';
import UpdateLabel from '../ui-components/UpdateLabel';

interface Props {
	onchainId?: number | null
	post: DiscussionPostFragment | ProposalPostFragment | ReferendumPostFragment
}
const PostContent = ({ onchainId, post }:Props) => {
	const { author, content, created_at, title, updated_at } = post;

	if (!author || !author.username || !content) return <div>Post not available</div>;
	return (
		<>
			<h3>{(onchainId || onchainId === 0) && `#${onchainId}`} {title}</h3>
			<div className='post_info'>
				<CreationLabel
					created_at={created_at}
					displayname={author.name}
					username={author.username }
				/>
				<UpdateLabel
					created_at={created_at}
					updated_at={updated_at}
				/>
			</div>
			<ReactMarkdown className='post_content' source={content} />
		</>
	);
};

export default PostContent;
