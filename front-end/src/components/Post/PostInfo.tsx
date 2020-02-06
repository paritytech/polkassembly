import React from 'react';
import styled from '@xstyled/styled-components';

import { DiscussionPostFragment, ProposalPostFragment, ReferendumPostFragment } from '../../generated/graphql';
import CreationLabel from '../../ui-components/CreationLabel';
import StatusTag from '../../ui-components/StatusTag';

interface Props {
	className?: string,
	onchainId?: number | null
	post: DiscussionPostFragment | ProposalPostFragment | ReferendumPostFragment
}
const PostContent = ({ className, onchainId, post }:Props) => {
	const { author, created_at, content, title } = post;

	if (!author || !author.username || !content) return <div>Post not available</div>;
	return (
		<div className={className}>
			<h2>{(onchainId || onchainId === 0) && `#${onchainId}`} {title}</h2>
			<div className='post_info'>
				<CreationLabel
					className='md'
					created_at={created_at}
					displayname={author.name}
					username={author.username}
					topic={post.topic.name}
				/>
			</div>
			{<StatusTag className='post_tags' status='Proposed'/>}
		</div>
	);
};

export default styled(PostContent)`
	position: relative;
	margin-bottom: 3rem;

	h2 {
		font-family: 'Roboto';
		font-size: xl;
	}

	.post_info {
		display: inline-block;
	}

	.post_tags {
		position: absolute;
		top: 0rem;
		right: 0rem;
		text-align: right;
		display: flex;
	}
`;
