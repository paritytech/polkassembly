import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DiscussionCard from '../../components/DiscussionCard';
import { LatestProposalPostsQuery } from '../../generated/graphql';

interface Props {
  className?: string
  data: LatestProposalPostsQuery
}

const Proposals = ({ className, data }: Props) => {
	return (
		<Container className={className}>
			<h3>Latest Proposals</h3>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={8}>
					<ul className='proposals__list'>
						{!!data.posts &&
						data.posts.map(
							(post) =>
								!!post && !!post.author && !!post.author.username && (
									<li key={post.id} className='proposals__item'>
										{<Link to={`/post/${post.id}`}>
											<DiscussionCard
												displayname={post.author.name}
												username={post.author.username}
												comments={post.comments_aggregate.aggregate === null || post.comments_aggregate.aggregate!.count === null || post.comments_aggregate.aggregate!.count! === 0
													? 'no'
													: post.comments_aggregate.aggregate!.count!.toString()}
												created_at={post.created_at}
												title={post.title}
											/>
										</Link>}
									</li>
								)
						)}
					</ul>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={8}>
				</Grid.Column>
			</Grid>
		</Container>
	);
};

export default styled(Proposals)`

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
			tex	t-decoration: none;
		}
	}
`;