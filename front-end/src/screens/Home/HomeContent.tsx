import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import DiscussionCard from '../../components/DiscussionCard'
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { LatestPostsQuery } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import { Button } from '../../ui-components/Button';

interface Props {
  className?: string
  data: LatestPostsQuery
}

const HomeContent = ({ className, data }: Props) => {
	const { history } = useRouter();
	const currentUser = useContext(UserDetailsContext);
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
								!!post && !!post.author && !!post.author.username && (
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
					<div className='mainButtonContainer'>
						{currentUser.id && <Button className={'primary newPostButton'} onClick={handleCreatePost}>New Post</Button>}
					</div>
				</Grid.Column>
			</Grid>
		</Container>
	);
}

export default styled(HomeContent)`

	@media only screen and (max-width: 576px) {
		h3 {
			margin-left: 1.5rem!important;
		}

		.mainButtonContainer {
			align-items: stretch!important;
			margin: 1rem!important;

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
			margin: 1rem 0;
			margin-top: 1rem!important;
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
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 4rem;
	}
`;