// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import { ApolloQueryResult } from 'apollo-client';
import React, { useContext, useEffect, useState } from 'react';
import { Grid, Icon, Responsive } from 'semantic-ui-react';

import { MetaContext } from '../../context/MetaContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import {
	DiscussionPostAndCommentsQuery,
	DiscussionPostAndCommentsQueryHookResult,
	DiscussionPostAndCommentsQueryVariables,
	DiscussionPostFragment,
	MotionPostAndCommentsQuery,
	MotionPostAndCommentsQueryHookResult,
	MotionPostAndCommentsQueryVariables,
	MotionPostFragment,
	OnchainLinkMotionFragment,
	OnchainLinkProposalFragment,
	OnchainLinkReferendumFragment,
	OnchainLinkTipFragment,
	OnchainLinkTreasuryProposalFragment,
	ProposalPostAndCommentsQuery,
	ProposalPostAndCommentsQueryHookResult,
	ProposalPostAndCommentsQueryVariables,
	ProposalPostFragment,
	ReferendumPostAndCommentsQuery,
	ReferendumPostAndCommentsQueryHookResult,
	ReferendumPostAndCommentsQueryVariables,
	ReferendumPostFragment,
	TipPostAndCommentsQuery,
	TipPostAndCommentsQueryHookResult,
	TipPostAndCommentsQueryVariables,
	TipPostFragment,
	TreasuryProposalPostAndCommentsQuery,
	TreasuryProposalPostAndCommentsQueryHookResult,
	TreasuryProposalPostAndCommentsQueryVariables,
	TreasuryProposalPostFragment } from '../../generated/graphql';
import Button from '../../ui-components/Button';
import ScrollToTop from '../../ui-components/ScrollToTop';
import Comments from '../Comment/Comments';
import EditablePostContent from '../EditablePostContent';
import NoPostFound from '../NoPostFound';
import PostReactionBar from '../Reactionbar/PostReactionBar';
import ReportButton from '../ReportButton';
import SubscriptionButton from '../SubscriptionButton/SubscriptionButton';
import GovenanceSideBar from './GovernanceSideBar';
import Poll from './Poll';
import CreatePostComment from './PostCommentForm';
import PostMotionInfo from './PostGovernanceInfo/PostMotionInfo';
import PostProposalInfo from './PostGovernanceInfo/PostProposalInfo';
import PostReferendumInfo from './PostGovernanceInfo/PostReferendumInfo';
import PostTipInfo from './PostGovernanceInfo/PostTipInfo';
import PostTreasuryInfo from './PostGovernanceInfo/PostTreasuryInfo';

interface Props {
	className?: string
	data: (
		DiscussionPostAndCommentsQueryHookResult['data'] |
		ProposalPostAndCommentsQueryHookResult['data'] |
		ReferendumPostAndCommentsQueryHookResult['data'] |
		MotionPostAndCommentsQueryHookResult['data'] |
		TreasuryProposalPostAndCommentsQueryHookResult['data'] |
		TipPostAndCommentsQueryHookResult['data' ]
	)
	isMotion?: boolean
	isProposal?: boolean
	isReferendum?: boolean
	isTreasuryProposal?: boolean
	isTipProposal?: boolean
	refetch: (variables?:
		ReferendumPostAndCommentsQueryVariables |
		DiscussionPostAndCommentsQueryVariables |
		ProposalPostAndCommentsQueryVariables |
		MotionPostAndCommentsQueryVariables |
		TreasuryProposalPostAndCommentsQueryVariables |
		TipPostAndCommentsQueryVariables |
		undefined
	) =>
		Promise<ApolloQueryResult<ReferendumPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<ProposalPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<MotionPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<TreasuryProposalPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<TipPostAndCommentsQuery>> |
		Promise<ApolloQueryResult<DiscussionPostAndCommentsQuery>>
}

const Post = ( { className, data, isMotion = false, isProposal = false, isReferendum = false, isTipProposal = false, isTreasuryProposal = false, refetch }: Props ) => {
	const post =  data && data.posts && data.posts[0];
	const { id, addresses } = useContext(UserDetailsContext);
	const [isEditing, setIsEditing] = useState(false);
	const toggleEdit = () => setIsEditing(!isEditing);
	const isOnchainPost = isMotion || isProposal || isReferendum || isTreasuryProposal;
	const { setMetaContextState } = useContext(MetaContext);

	let onchainId: number | null | undefined;
	let metaTitle = post?.id ? 'Post #'+post?.id : '';
	let referendumPost: ReferendumPostFragment | undefined;
	let proposalPost: ProposalPostFragment | undefined;
	let motionPost: MotionPostFragment | undefined;
	let treasuryPost: TreasuryProposalPostFragment | undefined;
	let tipPost: TipPostFragment | undefined;
	let definedOnchainLink : OnchainLinkMotionFragment | OnchainLinkReferendumFragment | OnchainLinkProposalFragment | OnchainLinkTipFragment | OnchainLinkTreasuryProposalFragment | undefined;
	let postStatus: string | undefined;

	if (isReferendum){
		referendumPost = post as ReferendumPostFragment;
		definedOnchainLink = referendumPost.onchain_link as OnchainLinkReferendumFragment;
		onchainId = definedOnchainLink.onchain_referendum_id;
		postStatus = referendumPost?.onchain_link?.onchain_referendum?.[0]?.referendumStatus?.[0].status;
		metaTitle = `Referendum #${onchainId}`;
	}

	if (isProposal) {
		proposalPost = post as ProposalPostFragment;
		definedOnchainLink = proposalPost.onchain_link as OnchainLinkProposalFragment;
		onchainId = definedOnchainLink.onchain_proposal_id;
		postStatus = proposalPost?.onchain_link?.onchain_proposal?.[0]?.proposalStatus?.[0].status;
		metaTitle = `Proposal #${onchainId}`;
	}

	if (isMotion) {
		motionPost = post as MotionPostFragment;
		definedOnchainLink = motionPost.onchain_link as OnchainLinkMotionFragment;
		onchainId = definedOnchainLink.onchain_motion_id;
		postStatus = motionPost?.onchain_link?.onchain_motion?.[0]?.motionStatus?.[0].status;
		metaTitle = `Motion #${onchainId}`;
	}

	if (isTreasuryProposal) {
		treasuryPost = post as TreasuryProposalPostFragment;
		definedOnchainLink = treasuryPost.onchain_link as OnchainLinkTreasuryProposalFragment;
		onchainId = definedOnchainLink.onchain_treasury_proposal_id;
		postStatus = treasuryPost?.onchain_link?.onchain_treasury_spend_proposal?.[0]?.treasuryStatus?.[0].status;
		metaTitle = `Treasury #${onchainId}`;
	}

	if (isTipProposal) {
		tipPost = post as TipPostFragment;
		definedOnchainLink = tipPost.onchain_link as OnchainLinkTipFragment;
		onchainId = definedOnchainLink.onchain_tip_id;
		postStatus = tipPost?.onchain_link?.onchain_tip?.[0]?.tipStatus?.[0].status;
		metaTitle = `Tip #${onchainId}`;
	}

	metaTitle = `${metaTitle} | ${post?.title ? post?.title : 'Polkassembly' }`;

	useEffect(() => {
		setMetaContextState((prevState) => {
			return {
				...prevState,
				description: post?.content || prevState.description,
				title: metaTitle
			};
		});
	}, [post, setMetaContextState, metaTitle]);

	const isDiscussion = (post: TipPostFragment | TreasuryProposalPostFragment | MotionPostFragment | ProposalPostFragment | DiscussionPostFragment | ReferendumPostFragment): post is DiscussionPostFragment => {
		if (!isReferendum && !isProposal && !isMotion && !isTreasuryProposal && !isTipProposal) {
			return (post as DiscussionPostFragment) !== undefined;
		}

		return false;
	};

	if (!post) return <NoPostFound
		isMotion={isMotion}
		isProposal={isProposal}
		isReferendum={isReferendum}
		isTreasuryProposal={isTreasuryProposal}
		isTipProposal={isTipProposal}
	/>;

	const isProposalProposer = isProposal && proposalPost?.onchain_link?.proposer_address && addresses?.includes(proposalPost.onchain_link.proposer_address);
	const isReferendumProposer = isReferendum && referendumPost?.onchain_link?.proposer_address && addresses?.includes(referendumPost.onchain_link.proposer_address);
	const isMotionProposer = isMotion && motionPost?.onchain_link?.proposer_address && addresses?.includes(motionPost.onchain_link.proposer_address);
	const isTreasuryProposer = isTreasuryProposal && treasuryPost?.onchain_link?.proposer_address && addresses?.includes(treasuryPost.onchain_link.proposer_address);
	const isTipProposer = isTipProposal && tipPost?.onchain_link?.proposer_address && addresses?.includes(tipPost.onchain_link.proposer_address);
	const canEdit = !isEditing && (
		post.author?.id === id ||
		isProposalProposer ||
		isReferendumProposer ||
		isMotionProposer ||
		isTreasuryProposer ||
		isTipProposer
	);

	return (
		<Grid className={className}>
			<Grid.Column mobile={16} tablet={16} computer={10} largeScreen={10}>
				<div className='post_content'>
					<EditablePostContent
						isEditing={isEditing}
						onchainId={onchainId}
						post={post}
						postStatus={postStatus}
						refetch={refetch}
						toggleEdit={toggleEdit}
					/>
					<div className='actions-bar'>
						<PostReactionBar className='reactions' postId={post.id} />
						{id && <div className='vl'/>}
						{id && !isEditing && <SubscriptionButton postId={post.id}/>}
						{canEdit && <Button className={'social'} onClick={toggleEdit}><Icon name='edit' className='icon'/>Edit</Button>}
						{id && !isEditing && !isOnchainPost && <ReportButton type='post' contentId={`${post.id}`} />}
					</div>
				</div>
				{ isMotion &&
					<PostMotionInfo
						onchainLink={definedOnchainLink as OnchainLinkMotionFragment}
					/>
				}
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
				{ isTreasuryProposal &&
					<PostTreasuryInfo
						onchainLink={definedOnchainLink as OnchainLinkTreasuryProposalFragment}
					/>
				}
				{ isTipProposal &&
					<PostTipInfo
						onchainLink={definedOnchainLink as OnchainLinkTipFragment}
					/>
				}
				<Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
					<GovenanceSideBar
						isMotion={isMotion}
						isProposal={isProposal}
						isReferendum={isReferendum}
						isTreasuryProposal={isTreasuryProposal}
						isTipProposal={isTipProposal}
						onchainId={onchainId}
						onchainLink={definedOnchainLink}
						status={postStatus}
					/>
					{isDiscussion(post) && <Poll postId={post.id} />}
				</Responsive>
				{ !!post.comments?.length &&
					<Comments
						comments={post.comments}
						refetch={refetch}
					/>
				}
				{ id && <CreatePostComment postId={post.id} refetch={refetch} /> }
			</Grid.Column>
			<Grid.Column mobile={16} tablet={16} computer={6} largeScreen={6}>
				<Responsive minWidth={Responsive.onlyComputer.minWidth}>
					<GovenanceSideBar
						isMotion={isMotion}
						isProposal={isProposal}
						isReferendum={isReferendum}
						isTreasuryProposal={isTreasuryProposal}
						onchainId={onchainId}
						onchainLink={definedOnchainLink}
						status={postStatus}
					/>
					{isDiscussion(post) && <Poll postId={post.id} />}
				</Responsive>
				<ScrollToTop/>
			</Grid.Column>
		</Grid>
	);
};

export default styled(Post)`

	.post_content {
		background-color: white;
		border-radius: 3px;
		box-shadow: box_shadow_card;
		padding: 3rem 3rem 0.8rem 3rem;
		margin-bottom: 1rem;
	}

	.actions-bar {
		display: flex;
		align-items: center;
	}

	.reactions {
		display: inline-flex;
		border: none;
		padding: 0.4rem 0;
		margin: 0rem;
	}

	.vl {
		display: inline-flex;
		border-left-style: solid;
		border-left-width: 1px;
		border-left-color: grey_border;
		height: 2rem;
		margin: 0 1.2rem 0 0.8rem;
	}

	@media only screen and (max-width: 576px) {
		.post_content {
			padding: 2rem;
			border-radius: 0px;
		}
	}

	a.social {
		color: grey_primary;
		font-size: 1.3rem;
		font-weight: 500;

		i {
			font-size: 1.5rem;
		}
	}
`;
