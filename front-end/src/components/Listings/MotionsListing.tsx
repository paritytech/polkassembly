// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import NothingFoundCard from 'src/ui-components/NothingFoundCard';

import { LatestMotionPostsQuery } from '../../generated/graphql';
import GovernanceCard from '../GovernanceCard';

interface Props {
  className?: string
  data: LatestMotionPostsQuery
}

const Motions = ({ className, data }: Props) => {

	const noPost = !data.posts || !data.posts.length;
	const atLeastOneCurrentMotion = data.posts.some((post) => {
		if(post.onchain_link?.onchain_motion.length){
			// this breaks the loop as soon as
			// we find a post that has a motion.
			return true;
		}
		return false;
	});

	if (noPost || !atLeastOneCurrentMotion) return <NothingFoundCard className={className} text='There are currently no active motions.'/>;

	return (
		<ul className={`${className} motions__list`}>
			{data.posts.map(
				(post) => {
					const onchainId = post.onchain_link?.onchain_motion_id;

					return !!post?.author?.username && !!post.onchain_link?.onchain_motion.length &&
						<li key={post.id} className='motions__item'>
							{<Link to={`/motion/${onchainId}`}>
								<GovernanceCard
									address={post.onchain_link.proposer_address}
									comments={post.comments_aggregate.aggregate?.count
										? post.comments_aggregate.aggregate.count.toString()
										: 'no'}
									method={post.onchain_link.onchain_motion?.[0]?.preimage?.method}
									onchainId={onchainId}
									status={post.onchain_link.onchain_motion?.[0]?.motionStatus?.[0].status}
									title={post.title}
									topic={post.topic.name}
								/>
							</Link>}
						</li>
					;
				}
			)}
		</ul>
	);
};

export default styled(Motions)`
	margin-block-start: 0;
	margin-block-end: 0;
	
	li {
		list-style-type: none;
	}

	.motions__item {
		margin: 0 0 1rem 0;
		a:hover {
			text-decoration: none;
		}
	}
`;
