import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import DiscussionCard from '../../components/DiscussionCard';
import Governancecard from '../../components/GovernanceCard';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { LatestPostsQuery } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import Button from '../../ui-components/Button';

interface Props {
  className?: string
  data: LatestPostsQuery
}

const HomeContent = ({ className, data }: Props) => {
	const { history } = useRouter();
	const currentUser = useContext(UserDetailsContext);
	const handleCreatePost = () => {
		history.push('/post/create');
	};

	return (
		<Container className={className}>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={8}>
					<h3>Latest Activity</h3>
					<ul className='Home__list'>
						{!!data.posts &&
						data.posts.map(
							(post) => {
								if (!post.author || !post.author.username) {
									console.error('Author not found');
									return null;
								} else {
									return !!post && (
										<li key={post.id} className='Home__item'>
											{<Link to={`/post/${post.id}`}>
												{
													post.type.id === 1
														?
														<DiscussionCard
															displayname={post.author.name}
															username={post.author.username}
															comments={post.comments_aggregate.aggregate === null || post.comments_aggregate.aggregate!.count === null || post.comments_aggregate.aggregate!.count! === 0
																? 'no'
																: post.comments_aggregate.aggregate!.count!.toString()}
															created_at={post.created_at}
															title={post.title}
														/>
														:
														<Governancecard
															displayname={post.author.name}
															comments={post.comments_aggregate.aggregate === null || post.comments_aggregate.aggregate!.count === null || post.comments_aggregate.aggregate!.count! === 0
																? 'no'
																: post.comments_aggregate.aggregate!.count!.toString()}
															created_at={post.created_at}
															onchainId={/* post.onchain_link?.onchain_proposal ? */ post.onchain_link?.onchain_proposal_id /* : post.onchain_link?.onchain_referendum_id */}
															status={/* post.onchain_link?.onchain_proposal ? */ post.onchain_link?.onchain_proposal?.proposalStatus?.[0].status /* :  /post.onchain_link?.onchain_referendum?.referendumStatus?.[0].status*/}
															title={post.title}
															topic={'post.topic.name'}
															username={post.author.username}
														/>
												}
											</Link>}
										</li>
									);}
							}

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

export default styled(HomeContent)`

	@media only screen and (max-width: 768px) {

		.mainButtonContainer {
			margin: 0rem;
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

	li {
        list-style-type: none;
    }

	.Home__item {
		margin: 0 0 1rem 0;
		a:hover {
			tex	t-decoration: none;
		}
	}

	.mainButtonContainer {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;