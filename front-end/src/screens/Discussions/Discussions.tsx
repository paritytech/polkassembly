import React, { useContext } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import DiscussionCard from '../../components/DiscussionCard';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { LatestDiscussionPostsQuery } from '../../generated/graphql';
import Button from '../../ui-components/Button';

interface Props {
  className?: string
  data: LatestDiscussionPostsQuery
}

const Discussions = ({ className, data }: Props) => {
	const history = useHistory();
	const currentUser = useContext(UserDetailsContext);
	const handleCreatePost = () => {
		history.push('/post/create');
	};

	return (
		<Container className={className}>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={8}>
					<h3>Latest Discussions</h3>
					<ul className='Discussions__list'>
						{!!data.posts &&
							data.posts.map(
								(post) =>
									!!post && !!post.author && !!post.author.username && (
										<li key={post.id} className='Discussions__item'>
											{<Link to={`/post/${post.id}`}>
												<DiscussionCard
													displayname={post.author.name}
													username={post.author.username }
													comments={post.comments_aggregate.aggregate && post.comments_aggregate.aggregate!.count
														? post.comments_aggregate.aggregate!.count!.toString()
														: 'no'}
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
					<div className='mainButtonContainer'>
						{currentUser.id && <Button primary className={'newPostButton'} onClick={handleCreatePost}>New Post</Button>}
					</div>
				</Grid.Column>
			</Grid>
		</Container>
	);
};

export default styled(Discussions)`

	@media only screen and (max-width: 576px) {
		h3 {
			margin-left: 1.5rem!important;
		}

		.mainButtonContainer {
			align-items: stretch!important;
			margin: 0 1rem 1rem 1rem!important;

			.newPostButton {
				padding: 0.8rem 1rem;
				border-radius: 0.5rem;
			}
		}
	}

	@media only screen and (max-width: 768px) {
		h3 {
			margin-left: 0rem;
		}

		.mainButtonContainer {
			margin: 0 1rem 1rem 1rem;
		}
	}

	@media only screen and (max-width: 991px) and (min-width: 768px) {
		.ui[class*="tablet reversed"].grid {
			flex-direction: column-reverse;
		}

		.mainButtonContainer {
			margin-top: 1rem!important;
		}
	}

	li {
		list-style-type: none;
	}

	.Discussions__item {
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

	.mainButtonContainer {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 4rem;
	}
`;