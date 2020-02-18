import React from 'react';
import ReactMarkdown from 'react-markdown';
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
			<ReactMarkdown className='markdown' source={content} />
		</div>
	);
};

export default styled(PostContent)`
	position: relative;
	margin-bottom: 3rem;

	h2 {
		font-family: 'Roboto';
		font-size: xl;
		max-width: calc(100% - 10rem);
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

	.markdown {
		color: black_text;
		font-family: 'Roboto';
		font-size: md;
		line-height: 150%;
		margin-bottom: 2rem;
		overflow-wrap: break-word;

		p, blockquote, ul, ol, dl, table {
			margin: 0 0 1.5rem 0;
		}

		h1, h2 {
			margin: 2rem 0 1.5rem 0;
		}

		h3, h4 {
			margin: 1.5rem 0 0.5rem 0;
		}

		h1 {
			font-size: 2.4rem;
		}

		h2 {
			font-size: 1.8rem;
		}

		h3 {
			font-size: md;
		}

		h4 {
			font-size: md;
			font-family: 'Roboto Mono';
		}

		h5, h6 {
			font-size: sm;
		}

		ul, ol {
			padding-left: 2rem;
			li > input {
				display: none;
			}	
		}

		a {
			color: red_primary;

			&:hover {
				text-decoration: none;
				color: red_secondary;
			}
		}

		blockquote {
			margin-left: 0;
			padding: 0 1em;
			color: grey_primary;
			border-left-style: solid;
			border-left-width: 0.25rem;
			border-left-color: grey_primary;
			font-size: 1.6rem;
				& > :first-child {
					margin-top: 0;
				}
				& > :last-child {
					margin-bottom: 0;
				}
		}

		img {
			max-width: 100%;
			margin: 2rem 0;
		}

		code {
			padding: 0.4rem;
			margin: 0;
			font-size: sm;
			background-color: rgba(0, 0, 0, 0.04);
			border-radius: 3px;
			color: black_text;
			&::before, &::after {
			  letter-spacing: -0.2em;
			}
		}
	}
`;