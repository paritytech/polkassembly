import React from 'react';
import styled from '@xstyled/styled-components';

import { DiscussionPostFragment, ProposalPostFragment, ReferendumPostFragment } from '../../generated/graphql';
import CreationLabel from '../../ui-components/CreationLabel';
import StatusTag from '../../ui-components/StatusTag';
import UpdateLabel from '../../ui-components/UpdateLabel';

interface Props {
	className?: string,
	onchainId?: number | null
	post: DiscussionPostFragment | ProposalPostFragment | ReferendumPostFragment
	postStatus?: string
}
const PostContent = ({ className, onchainId, post, postStatus }:Props) => {
	const { author, created_at, content, title, updated_at } = post;

	if (!author || !author.username || !content) return <div>Post not available</div>;
	return (
		<div className={className}>
			{postStatus && <StatusTag className='post_tags' status={postStatus}/>}
			<h2>{(onchainId || onchainId === 0) && `#${onchainId}`} {title}</h2>
			<div className='post_info'>
				<CreationLabel
					className='md'
					created_at={created_at}
					displayname={author.name}
					username={author.username}
					topic={post.topic.name}
				/>
				<UpdateLabel
					className='md'
					created_at={created_at}
					updated_at={updated_at}
				/>
			</div>
		</div>
	);
};

export default styled(PostContent)`
	position: relative;
	margin-bottom: 3rem;

	h2 {
		font-family: 'Roboto';
		font-size: xl;
		max-width: calc(100%-10rem);
	}

	.post_info {
		display: inline-block;
	}

	.post_tags {
		position: absolute;
		top: 0rem;
		right: 0rem;
		text-align: right;
	}

	@media only screen and (max-width: 768px) {

		.post_tags {
			position: relative;
			margin-bottom: 2rem;
		}
	}
`;
