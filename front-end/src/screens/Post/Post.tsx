import { ApolloQueryResult } from 'apollo-client';
import React, { useContext, useState, useEffect } from 'react';
import { Container, Divider, Grid, Icon } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import { Form } from '../../ui-components/Form';

import Comments from '../Comment/Comments';
import NoPostFound from '../../components/NoPostFound';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import PostGovernanceInfo from './PostGovernanceInfo';
import CreatePostComment from './PostCommentForm';
import EditablePostContent from './EditablePostContent';
import { PostAndCommentsQueryHookResult, PostAndCommentsQueryVariables, PostAndCommentsQuery } from '../../generated/graphql';
import SubscriptionButton from '../../components/SubscriptionButton';
import Button from '../../ui-components/Button';
import Tag from '../../ui-components/Tag';
import StatusTag from '../../ui-components/StatusTag';

interface Props {
	className?: string;
	data: PostAndCommentsQueryHookResult['data']
	refetch: (variables?: PostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<PostAndCommentsQuery>>
}

const Post = ( { className, data, refetch }: Props ) => {
	const post =  data && data.posts && data.posts[0];
	const { id } = useContext(UserDetailsContext);
	const [isPostReplyFormVisible, setPostReplyFormVisibile] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [isProposal, setIsProposal] = useState(false);
	const [isReferendum, setIsReferendum] = useState(false);
	const toggleEdit = () => setIsEditing(!isEditing);
	const togglePostReplyForm = () => {
		setPostReplyFormVisibile(!isPostReplyFormVisible);
	};

	useEffect(() => {
		setIsProposal(post?.onchain_link?.onchain_proposal_id === 0 || !!post?.onchain_link?.onchain_proposal_id);
		setIsReferendum(post?.onchain_link?.onchain_referendum_id === 0 || !!post?.onchain_link?.onchain_referendum_id);
	}, [post]);

	if (!post) return <NoPostFound/>;

	return (
		<Container className={className}>
			<Grid>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<div className='PostContent'>
						<div className='post_tags'>
							<Tag>{post.topic && post.topic.name}</Tag>
							{(isProposal || isReferendum) && <StatusTag status={post.onchain_link?.onchain_proposal?.proposalStatus?.[0].status}></StatusTag>}
						</div>
						<EditablePostContent
							isEditing={isEditing}
							post={post}
							toggleEdit={toggleEdit}
							refetch={refetch}
						/>
						{
							(isProposal || isReferendum) && post.onchain_link &&
							<PostGovernanceInfo
								isReferendum={isReferendum}
								onchainLink={post.onchain_link}
							/>
						}

						{id && !isEditing && <SubscriptionButton postId={post.id}/>}
						{id && !isEditing && <Button className={'social'} onClick={togglePostReplyForm}><Icon name='reply'/>Reply</Button>}
						{!isEditing && post.author && id === post.author.id && <Button className={'social'} onClick={toggleEdit}><Icon name='edit' className='icon'/>Edit</Button>}

						{ id && isPostReplyFormVisible &&
							<CreatePostComment
								onHide={togglePostReplyForm}
								postId={post.id}
								refetch={refetch}
							/>
						}
						{ post.comments?.length
							? <Comments
								comments={post.comments}
								refetch={refetch}
							/>
							: null }
					</div>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}>
					<div className='PostContent'>
						<h2>Votes</h2>
						<Divider/>
						<Grid>
							<Grid.Column width={5}>
								<div><b>Total KSM Locked</b></div>
								<div>241,547 KSM</div>
							</Grid.Column>
							<Grid.Column width={5}>
								<div><b>Turnout</b></div>
								<div>12,415%</div>
							</Grid.Column>
							<Grid.Column width={5}>
								<div><b>Threshold</b></div>
								<div>91.2%</div>
							</Grid.Column>
						</Grid>
						<Divider/>
						<Grid>
							<Grid.Column width={5}>
								<div><b>Total Votes</b></div>
								<div>2,311,547</div>
							</Grid.Column>
							<Grid.Column width={5}>
								<div><b>Yes</b></div>
								<div>1,588,731</div>
							</Grid.Column>
							<Grid.Column width={5}>
								<div><b>No</b></div>
								<div>725,826</div>
							</Grid.Column>
						</Grid>
					</div>
					<div className='PostContent'>
						<h2>Your Vote</h2>
						<Form standalone={false}>
							<Form.Group>
								<Form.Field width={16}>
									<label>Amount</label>
									<input
										placeholder='120'
										type='text'
									/>
									<div>
										2341 KSM Available. <a href='#'>Vote all.</a>
									</div>
								</Form.Field>
							</Form.Group>
							<Form.Group>
								<Form.Field width={16}>
									<label>Vote Lock</label>
									<select>
										<option value="2">2 weeks lock</option>
										<option value="4">4 weeks lock</option>
										<option value="8">8 weeks lock</option>
										<option value="10">10 weeks lock</option>
									</select>
									<div>
										120 KSM * 2 Lock periods = <b>240 votes</b>
									</div>
								</Form.Field>
							</Form.Group>
							<Form.Group>
								<Form.Field width={8}>
									<label>&nbsp;</label>
									<Button
										fluid
										basic
										color='red'
									>
										<Icon name='thumbs down' />
										NAY
									</Button>
								</Form.Field>
								<Form.Field width={8}>
									<label>&nbsp;</label>
									<Button
										fluid
										primary
									>
										<Icon name='thumbs up' />
										AYE
									</Button>
								</Form.Field>
							</Form.Group>
						</Form>
					</div>
					<div className='PostContent'>
						<h2>Timeline</h2>
						<Grid>
							<Grid.Column width={8}>
								<div><b>Blocks Remaining</b></div>
								<div>69,420</div>
							</Grid.Column>
							<Grid.Column width={8}>
								<div><b>Enact at</b></div>
								<div>Block 240,000</div>
							</Grid.Column>
						</Grid>
					</div>
				</Grid.Column>
			</Grid>
		</Container>
	);
};

export default styled(Post)`
	.post_info {
		color: black_text;
		font-size: sm;
		padding-bottom: 2rem;
		margin-bottom: 2rem;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: grey_light;
	}

	.PostContent {
		background-color: white;
		padding: 2rem 3rem 4rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
		margin-bottom: 1rem;
	}

	.post_tags {
		margin-bottom: 2.5rem;
	}

	h3 {
		font-family: 'Roboto';
		font-size: xl;
		margin-bottom: 0.4rem;
	}

	.post_content {
		color: black_text;
		font-family: 'Roboto';
		font-size: md;
		line-height: 150%;
		margin-bottom: 2rem;

		p, blockquote, ul, ol, dl, table {
			margin: 0 0 1.5rem 0;
		}

		h1, h2 {
			margin: 2rem 0 1.5rem 0;
		}

		h3, h4 {
			margin: 1.5rem 0 0.5rem 0;
		}

		h1 {
			font-size: 2.4rem;
		}

		h2 {
			font-size: 1.8rem;
		}

		h3 {
			font-size: md;
		}

		h4 {
			font-size: md;
			font-family: 'Roboto Mono';
		}

		h5, h6 {
			font-size: sm;
		}

		ul, ol {
			padding-left: 2rem;
			li > input {
				display: none;
			}
		}

		a {
			color: red_primary;

			&:hover {
				text-decoration: none;
				color: red_secondary;
			}
		}

		blockquote {
			margin-left: 0;
			padding: 0 1em;
			color: grey_primary;
			border-left-style: solid;
			border-left-width: 0.25rem;
			border-left-color: grey_primary;
			font-size: 1.6rem;
				& > :first-child {
					margin-top: 0;
				}
				& > :last-child {
					margin-bottom: 0;
				}
		}

		img {
			max-width: 100%;
			margin: 2rem 0;
		}

		code {
			padding: 0.2rem 0 0.2rem 0;
			margin: 0;
			font-size: sm;
			background-color: rgba(0, 0, 0, 0.04);
			border-radius: 3px;
			color: black_text;
			&::before, &::after {
			  letter-spacing: -0.2em;
			}
		}
	}

	@media only screen and (max-width: 576px) {
		.post_info {
			font-size: 1.3rem;
		}

		.PostContent {
			padding: 2rem 2rem 2rem 2rem;
		}
	}
`;
