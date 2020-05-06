// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { noTitle } from 'src/global/noTitle';
import getDefaultAddressField from 'src/util/getDefaultAddressField';
import getNetwork from 'src/util/getNetwork';

import { DiscussionPostFragment, MotionPostFragment,ProposalPostFragment, ReferendumPostFragment, TreasuryProposalPostFragment } from '../../generated/graphql';
import CreationLabel from '../../ui-components/CreationLabel';
import Markdown from '../../ui-components/Markdown';
import StatusTag from '../../ui-components/StatusTag';
import UpdateLabel from '../../ui-components/UpdateLabel';

interface Props {
	className?: string,
	onchainId?: number | null
	post: DiscussionPostFragment | ProposalPostFragment | ReferendumPostFragment| TreasuryProposalPostFragment| MotionPostFragment
	postStatus?: string
}
const PostContent = ({ className, onchainId, post, postStatus }:Props) => {
	const { author, created_at, content, title, updated_at } = post;

	if (!author || !author.username || !content) return <div>Post not available</div>;

	const defaultAddressField = getDefaultAddressField();
	const defaultAddress = author[defaultAddressField];

	return (
		<div className={className}>
			{postStatus && <StatusTag className='post_tags' status={postStatus}/>}
			<h2 className={postStatus ? 'onchain-title' : ''}>{(onchainId || onchainId === 0) && `#${onchainId}`} {title || noTitle}</h2>
			<div className='post_info'>
				{onchainId || onchainId === 0 ?
					null :
					<>
						<CreationLabel
							className='md'
							created_at={created_at}
							defaultAddress={defaultAddress}
							displayname={author.name}
							username={author.username}
							topic={post.topic.name}
						/>
						<UpdateLabel
							className='md'
							created_at={created_at}
							updated_at={updated_at}
						/>
					</>
				}
			</div>
			<Markdown md={content} />
		</div>
	);
};

export default styled(PostContent)`
	position: relative;
	margin-bottom: 3rem;

	.onchain-title {
		max-width: calc(100% - 12rem);

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
