import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import GovernanceCard from '../../components/GovernanceCard';
import { LatestProposalPostsQuery } from '../../generated/graphql';

interface Props {
  className?: string
  data: LatestProposalPostsQuery
}

const OnchainGovenance = ({ className, data }: Props) => {
	return (
		<Container className={className}>
			<h3>Latest Proposals & Referenda</h3>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<ul className='proposals__list'>
						{!!data.posts &&
						data.posts.map(
							(post) =>
								!!post?.author?.username && (
									<li key={post.id} className='proposals__item'>
										{<Link to={`/post/${post.id}`}>
											<GovernanceCard
												displayname={post.author.name}
												comments={post.comments_aggregate.aggregate?.count
													? post.comments_aggregate.aggregate.count.toString()
													: 'no'}
												created_at={post.created_at}
												onchainId={post.onchain_link?.onchain_proposal_id}
												status={post.onchain_link?.onchain_proposal?.proposalStatus?.[0].status}
												title={post.title}
												topic={post.topic.name}
												username={post.author.username}
											/>
										</Link>}
									</li>
								)
						)}
					</ul>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}>
				</Grid.Column>
			</Grid>
		</Container>
	);
};

export default styled(OnchainGovenance)`

	@media only screen and (max-width: 768px) {
		h3 {
			margin-left: 3rem;
		}
	}

	@media only screen and (max-width: 576px) {
		h3 {
			margin-left: 1.5rem;
		}
	}

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