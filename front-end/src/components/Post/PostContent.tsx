import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@xstyled/styled-components';

import { DiscussionPostFragment, ProposalPostFragment, ReferendumPostFragment } from '../../generated/graphql';
import CreationLabel from '../../ui-components/CreationLabel';
import MarkdownStyle from '../../ui-components/MarkdownStyle';
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
			<MarkdownStyle>
				<ReactMarkdown className='markdown' source={content} />
			</MarkdownStyle>
		</div>
	);
};

export default styled(PostContent)`
	position: relative;
	margin-bottom: 3rem;

	h2 {
		max-width: calc(100% - 10rem);

		@media only screen and (max-width: 576px) {
			max-width: 100%;
		}
	}

	.post_info {
		display: inline-block;
		margin-bottom: 2rem;
	}

	.post_tags {
		position: absolute;
		top: 0rem;
		right: 0rem;
		text-align: right;

		@media only screen and (max-width: 768px) {
			position: relative;
			margin-bottom: 2rem;	
		}
	}
`;