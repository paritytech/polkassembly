import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@xstyled/styled-components';

import GovernanceCard from '../../../components/GovernanceCard';
import { LatestDemocracyReferendaPostsQuery } from '../../../generated/graphql';

interface Props {
  className?: string
  data: LatestDemocracyReferendaPostsQuery
}

const Referenda = ({ className, data }: Props) => {
	return (
		<ul className={`${className} proposals__list`}>
			{!!data.posts &&
						data.posts.map(
							(post) => {
								const onchainId = post.onchain_link?.onchain_referendum_id;

								return (!!post?.author?.username && (
									<li key={post.id} className='proposals__item'>
										{<Link to={`/referendum/${onchainId}`}>
											<GovernanceCard
												displayname={post.author.name}
												comments={post.comments_aggregate.aggregate?.count
													? post.comments_aggregate.aggregate.count.toString()
													: 'no'}
												created_at={post.created_at}
												onchainId={onchainId}
												status={post.onchain_link?.onchain_referendum?.referendumStatus?.[0].status}
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

export default styled(Referenda)`
	li {
		list-style-type: none;
	}

	.proposals__item {
		margin: 0 0 1rem 0;
		border: 1px solid #EEE;
		&:hover {
			border: 1px solid #BBB;
			text-decoration: none;
		}
		a:hover {
			text-decoration: none;
		}
	}
`;