import { ApolloQueryResult } from 'apollo-client';
import React, { useContext, useState } from 'react';
import { Container, Grid, Icon } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import Comments from '../Comment/Comments';
import NoPostFound from '../NoPostFound';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import CreatePostComment from './PostCommentForm';
import EditablePostContent from '../EditablePostContent';
import { ProposalPostAndCommentsQueryHookResult, OnchainLinkProposalFragment, ProposalPostAndCommentsQueryVariables, ProposalPostAndCommentsQuery, OnchainLinkReferendumFragment, ReferendumPostFragment, ProposalPostFragment, ReferendumPostAndCommentsQueryHookResult, DiscussionPostAndCommentsQueryHookResult, DiscussionPostAndCommentsQueryVariables, ReferendumPostAndCommentsQuery, DiscussionPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables } from '../../generated/graphql';
import SubscriptionButton from '../SubscriptionButton/SubscriptionButton';
import Button from '../../ui-components/Button';
/* import Tag from '../../ui-components/Tag';
import StatusTag from '../../ui-components/StatusTag'; */
import PostProposalInfo from './PostProposalInfo';
import PostReferendumInfo from './PostReferendumInfo';
import PostInfo from './PostInfo';

interface Props {
	className?: string;
	data: DiscussionPostAndCommentsQueryHookResult['data'] | ProposalPostAndCommentsQueryHookResult['data'] | ReferendumPostAndCommentsQueryHookResult['data']
	isProposal?: boolean
	isReferendum?: boolean
	refetch: (variables?: ReferendumPostAndCommentsQueryVariables | DiscussionPostAndCommentsQueryVariables | ProposalPostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<ReferendumPostAndCommentsQuery>> | Promise<ApolloQueryResult<ProposalPostAndCommentsQuery>> | Promise<ApolloQueryResult<DiscussionPostAndCommentsQuery>>
}

const Post = ( { className, data, isProposal = false, isReferendum = false, refetch }: Props ) => {
	const post =  data && data.posts && data.posts[0];
	const { id } = useContext(UserDetailsContext);
	const [isPostReplyFormVisible, setPostReplyFormVisibile] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const toggleEdit = () => setIsEditing(!isEditing);
	const togglePostReplyForm = () => {
		setPostReplyFormVisibile(!isPostReplyFormVisible);
	};

	// if an onchain_link has both the a proposal_id and referendum_id, it means it's a referendum now
	// the referendum id should be shown.
	let onchainId: number | null | undefined;
	let referendumPost: ReferendumPostFragment | undefined;
	let proposalPost: ProposalPostFragment | undefined;
	let definedOnchainLink : OnchainLinkReferendumFragment | OnchainLinkProposalFragment | undefined;

	if (isReferendum){
		referendumPost = post as ReferendumPostFragment;
		definedOnchainLink = referendumPost.onchain_link as OnchainLinkReferendumFragment;
		onchainId = definedOnchainLink.onchain_referendum_id;
	}

	if (isProposal) {
		proposalPost = post as ProposalPostFragment;
		definedOnchainLink = proposalPost.onchain_link as OnchainLinkProposalFragment;
		onchainId = definedOnchainLink.onchain_proposal_id;
	}

	if (!post) return <NoPostFound/>;

	return (
		<Container className={className}>
			<Grid>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<PostInfo
						onchainId={onchainId}
						post={post}
					/>
					{ isProposal &&
						<PostProposalInfo
							onchainLink={definedOnchainLink as OnchainLinkProposalFragment}
						/>
					}
					{ isReferendum &&
						<PostReferendumInfo
							onchainLink={definedOnchainLink as OnchainLinkReferendumFragment}
						/>
					}
					<div className='PostContent'>
						{/* <div className='post_tags'>
							<Tag>{post.topic.name}</Tag>
							{isProposal && <StatusTag status={proposalPost?.onchain_link?.onchain_proposal?.[0]?.proposalStatus?.[0].status}></StatusTag>}
							{isReferendum && <StatusTag status={referendumPost?.onchain_link?.onchain_referendum?.[0]?.referendumStatus?.[0].status}></StatusTag>}
						</div> */}
						<EditablePostContent
							isEditing={isEditing}
							onchainId={onchainId}
							post={post}
							refetch={refetch}
							toggleEdit={toggleEdit}
						/>

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
					</div>
					{ post.comments?.length
						? <Comments
							comments={post.comments}
							refetch={refetch}
						/>
						: null }
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}></Grid.Column>
			</Grid>
		</Container>
	);
};

export default styled(Post)`

	.PostContent {
		margin-bottom: 1rem;
	}

	h3 {
		font-family: 'Roboto';
		font-size: xl;
		margin-bottom: 0.4rem;
		max-width: calc(100% - 20rem);
    	display: flex;
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

	.comments:before {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 2rem;
		display: block;
		width: 2px;
		content: "";
		background-color: grey_light;
	}

	@media only screen and (max-width: 576px) {

		.PostContent {
			padding: 2rem 2rem 2rem 2rem;
		}
	}
`;
