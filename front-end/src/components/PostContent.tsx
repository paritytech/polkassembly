import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@xstyled/styled-components';

/* import CreationLabel from '../ui-components/CreationLabel'; */
import { DiscussionPostFragment, ProposalPostFragment, ReferendumPostFragment } from '../generated/graphql';
import UpdateLabel from '../ui-components/UpdateLabel';

interface Props {
	className?: string,
	onchainId?: number | null
	post: DiscussionPostFragment | ProposalPostFragment | ReferendumPostFragment
}
const PostContent = ({ className, post }:Props) => {
	const { author, content, created_at, updated_at } = post;

	if (!author || !author.username || !content) return <div>Post not available</div>;
	return (
		<div className={className}>
			{/* <div className='post_title'>
				<h2>{(onchainId || onchainId === 0) && `#${onchainId}`} {title}</h2>
			</div> */}
			<div className='post_content'>
				<div className='post_info'>
					{/* <CreationLabel
						created_at={created_at}
						displayname={author.name}
						username={author.username }
					/> */}
					<UpdateLabel
						created_at={created_at}
						updated_at={updated_at}
					/>
				</div>
				<ReactMarkdown source={content} />
			</div>
		</div>
	);
};

export default styled(PostContent)`
	h2 {
		font-family: 'Roboto';
		font-size: xl;
	}

	.post_title {
		padding: 3rem;
		margin-bottom: 1rem;
	}

	.post_content {
		color: black_text;
		font-family: 'Roboto';
		font-size: md;
		line-height: 150%;
		margin-bottom: 2rem;

		.post_info {
			margin-bottom: 1rem;
		}

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
`;
