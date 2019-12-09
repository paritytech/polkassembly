import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import DiscussionCard from '../../components/DiscussionCard'
import { LatestPostsQuery } from '../../generated/graphql';
import { Button } from '../../ui-components/Button';

interface Props {
  className?: string
  data: LatestPostsQuery
}

const Home = ({ className, data }: Props) => {
	const history = useHistory();

	const handleCreatePost = () => {
		history.push('/post/create')
	};

	return (
		<Container className={className}>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={8}>
					<h3>Latest Discussions</h3>
					<ul className='Home__list'>
						{!!data.posts &&
						data.posts.map(
							(post) =>
								!!post && (
									<li key={post.id} className='Home__item'>
										{<Link to={`/post/${post.id}`}>
											<DiscussionCard
												title={post.title}
												author={post.author.username}
												creation_date={post.creation_date}
												replies={post.replies_aggregate.aggregate === null || post.replies_aggregate.aggregate!.count === null || post.replies_aggregate.aggregate!.count! === 0
													? 'no'
													: post.replies_aggregate.aggregate!.count!.toString()}
											/>
										</Link>}
									</li>
								),
						)}
					</ul>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={8}>
					<div className='info_box'>
						<h4>About Polkassembly</h4>
						<div className='info_text'>Discuss all things Polkadot governance, signal your intentions, back on-chain proposals and vote on referenda.</div>
						<div className='mainButtonContainer'>
							<Button className={'primary newPostButton'} onClick={handleCreatePost}>New Post</Button>
						</div>
					</div>
				</Grid.Column>
			</Grid>
		</Container>
	);
}

export default styled(Home)`

	@media only screen and (max-width: 768px) {
		h3 {
			margin-left: 3rem;
		}

		.info_box {
			padding: 2rem 3rem;
		}
	}

	@media only screen and (max-width: 576px) {
		h3 {
			margin-left: 1.5rem;
		}

		.info_box {
			padding: 2rem 1.5rem;
		}
	}

	.Home__item {
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

	.mainButtonContainer {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 20px;
	}

	.info_box {
		background-color: #FFF;
		padding: 2rem 3rem;
		margin: 0 0 0.625rem 0;
		border: 1px solid #EEE;
		h4 {
			font-family: 'Roboto Mono';
			font-size: 1.6rem;
		}
	}

	.info_text {
		font-size: 1.2rem;
		h6 {
			font-size: 1.2rem;
			margin-top: 1rem;
		}
	}

	.ex_link {
		padding-top: 0.625rem;
		a {
			font-size: 0.75rem;
			font-weight: 500;
			color: #EB5757;
			&:hover {
			border-bottom: 1px solid #EB5757;
		}
	}
`;