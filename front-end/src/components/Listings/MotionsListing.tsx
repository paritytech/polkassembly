// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

import { LatestMotionPostsQuery } from '../../generated/graphql';
import GovernanceCard from '../GovernanceCard';

interface Props {
  className?: string
  data: LatestMotionPostsQuery
}

const Motions = ({ className, data }: Props) => {

	if (!data.posts || !data.posts.length) return <div>No motion found</div>;

	return (
		<ul className={`${className} motions__list`}>
			{data.posts.map(
				(post) => {
					const onchainId = post.onchain_link?.onchain_motion_id;

					return !!post?.author?.username &&
						<li key={post.id} className='motions__item'>
							{<Link to={`/motion/${onchainId}`}>
								<GovernanceCard
									address={post.onchain_link?.proposer_address}
									comments={post.comments_aggregate.aggregate?.count
										? post.comments_aggregate.aggregate.count.toString()
										: 'no'}
									method={post.onchain_link?.onchain_motion?.[0]?.preimage?.method}
									onchainId={onchainId}
									status={post.onchain_link?.onchain_motion?.[0]?.motionStatus?.[0].status}
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