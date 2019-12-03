import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import DiscussionCard from '../../components/DiscussionCard'
import { LatestPostsQuery } from '../../generated/graphql';

interface Props {
  className?: string
  data: LatestPostsQuery
}

const Container = styled.div`
	Button.newPostButton {
		margin-bottom: 10px
	}

	.Home__item {
		margin: 0 0 0.625rem 0;
		border: 1px solid #EEE;
	}

	.Home__item:hover {
		border: 1px solid #BBB;
		text-decoration: none;
	}

	.Home__item a:hover {
		tex	t-decoration: none;
	}

	.info_box {
		padding: 1.25rem 1.875rem;
		background-color: #FFF;
		margin: 0 0 0.625rem 0;
		border: 1px solid #EEE;
	}

	.info_text {
		fo	nt-size: 0.875rem;
		h6 {
			font-size: 0.875rem;
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
}

@media (max-width: 576px) {
	.welcomebox {
		padding:1.25rem 15px;
	}

	h3 {
		margin: 0 0 1.25rem 0.938rem;
	}
}
`;

const Home = ({ data }: Props) => {
	const history = useHistory();

	const handleCreatePost = () => {
		history.push('/post/create')
	};

	return (
		<Container className='Home'>
			<h3>Latest Discussions</h3>
			<Row>
				<Col sm={12} md={6} lg={7}>
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
				</Col>
				<Col md={6} lg={5}>
					<Button className={'newPostButton'} onClick={handleCreatePost}>New Post</Button>
					<div className='info_box'>
						<h5>Hello</h5>
						<div className='info_text'>Discuss all things Polkadot governance, signal your intentions, back on-chain proposals and vote on referenda.</div>
						<div className='info_text'><h6>New to Polkadot Governance?</h6> Polkadot uses a sophisticated governance mechanism to let the network evolve gracefully. The stated goal is to ensure that the majority of the stake can always command the network.</div>
						<div className='ex_link'>
							<a
								href='https://wiki.polkadot.network/docs/en/learn-governance'
								rel='noopener noreferrer'
								target='_blank'>
								Find out more about Polkadot Governance »
							</a>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;