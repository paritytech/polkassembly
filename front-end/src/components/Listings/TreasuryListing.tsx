import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@xstyled/styled-components';

import GovernanceCard from '../GovernanceCard';
import { LatestDemocracyTreasuryProposalPostsQuery } from '../../generated/graphql';

interface Props {
  className?: string
  data: LatestDemocracyTreasuryProposalPostsQuery
}

const TreasuryProposals = ({ className, data }: Props) => {

	if (!data.posts || !data.posts.length) return <div>No treasury proposal found</div>;

	return (
		<ul className={`${className} proposals__list`}>
			{data.posts.map(
				(post) => {
					const onchainId = post.onchain_link?.onchain_treasury_proposal_id;

					return (!!post?.author?.username && (
						<li key={post.id} className='proposals__item'>
							{<Link to={`/treasury/${onchainId}`}>
								<GovernanceCard
									displayname={post.author.name}
									comments={post.comments_aggregate.aggregate?.count
										? post.comments_aggregate.aggregate.count.toString()
										: 'no'}
									created_at={post.created_at}
									onchainId={onchainId}
									status={post.onchain_link?.onchain_treasury_spend_proposal?.[0]?.treasuryStatus?.[0].status}
									title={post.title}
									topic={post.topic.name}
									username={post.author.username}
								/>
							</Link>}
						</li>
					));
				}
			)}
		</ul>
	);
};

export default styled(TreasuryProposals)`
	margin-block-start: 0;
	margin-block-end: 0;

	li {
		list-style-type: none;
	}

	.proposals__item {
		margin: 0 0 1rem 0;
		a:hover {
			text-decoration: none;
		}
	}
`;
