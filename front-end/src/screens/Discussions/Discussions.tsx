import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import DiscussionCard from '../../components/DiscussionCard'
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { LatestPostsQuery } from '../../generated/graphql';

interface Props {
  className?: string
  data: LatestPostsQuery
}

const Container = styled.div`
	Button.newPostButton {
		margin-bottom: 10px
	}

	.Discussions__item {
		margin: 0 0 0.625rem 0;
		border: 1px solid #EEE;
	}

	.Discussions__item:hover {
		border: 1px solid #BBB;
		text-decoration: none;
	}

	.Discussions__item a:hover {
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

const Discussions = ({ data }: Props) => {
	const history = useHistory();
	const currentUser = useContext(UserDetailsContext);
	const handleCreatePost = () => {
		history.push('/post/create')
	};

	return (
		<Container className='Discussions'>
			<h3>Latest Discussions</h3>
			<Row>
				<Col sm={12} md={6} lg={7}>
					<ul className='Discussions__list'>
						{!!data.posts &&
						data.posts.map(
							(post) =>
								!!post && !!post.author && !!post.author.username && (
									<li key={post.id} className='Discussions__item'>
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
					{currentUser.id && <Button className={'newPostButton'} onClick={handleCreatePost}>New Post</Button>}
				</Col>
			</Row>
		</Container>
	);
}

export default Discussions;