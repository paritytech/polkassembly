import { ApolloQueryResult } from 'apollo-client';
import React, { useContext, useState } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import Comments from '../Comment/Comments';
import NoPostFound from '../NoPostFound';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import CreatePostComment from './PostCommentForm';
import EditablePostContent from '../EditablePostContent';
import { ProposalPostAndCommentsQueryHookResult, OnchainLinkProposalFragment, ProposalPostAndCommentsQueryVariables, ProposalPostAndCommentsQuery, OnchainLinkReferendumFragment, ReferendumPostFragment, ProposalPostFragment, ReferendumPostAndCommentsQueryHookResult, DiscussionPostAndCommentsQueryHookResult, DiscussionPostAndCommentsQueryVariables, ReferendumPostAndCommentsQuery, DiscussionPostAndCommentsQuery, ReferendumPostAndCommentsQueryVariables } from '../../generated/graphql';
import SubscriptionButton from '../SubscriptionButton/SubscriptionButton';
import Button from '../../ui-components/Button';
import PostProposalInfo from './PostProposalInfo';
import PostReferendumInfo from './PostReferendumInfo';
import Democracy from './Democracy';

interface Props {
	className?: string
	data: DiscussionPostAndCommentsQueryHookResult['data'] | ProposalPostAndCommentsQueryHookResult['data'] | ReferendumPostAndCommentsQueryHookResult['data']
	isProposal?: boolean
	isReferendum?: boolean
	refetch: (variables?: ReferendumPostAndCommentsQueryVariables | DiscussionPostAndCommentsQueryVariables | ProposalPostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<ReferendumPostAndCommentsQuery>> | Promise<ApolloQueryResult<ProposalPostAndCommentsQuery>> | Promise<ApolloQueryResult<DiscussionPostAndCommentsQuery>>
}

const Post = ( { className, data, isProposal = false, isReferendum = false, refetch }: Props ) => {
	const post =  data && data.posts && data.posts[0];
	const { id, addresses } = useContext(UserDetailsContext);
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
	let postStatus: string | undefined;

	if (isReferendum){
		referendumPost = post as ReferendumPostFragment;
		definedOnchainLink = referendumPost.onchain_link as OnchainLinkReferendumFragment;
		onchainId = definedOnchainLink.onchain_referendum_id;
		postStatus = referendumPost?.onchain_link?.onchain_referendum?.[0]?.referendumStatus?.[0].status;
	}

	if (isProposal) {
		proposalPost = post as ProposalPostFragment;
		definedOnchainLink = proposalPost.onchain_link as OnchainLinkProposalFragment;
		onchainId = definedOnchainLink.onchain_proposal_id;
		postStatus = proposalPost?.onchain_link?.onchain_proposal?.[0]?.proposalStatus?.[0].status;
	}

	const canEdit = !isEditing && (
		(post?.author?.id === id) ||
		(isProposal && proposalPost?.onchain_link?.proposer_address && addresses?.includes(proposalPost.onchain_link.proposer_address)) ||
		(isReferendum && referendumPost?.onchain_link?.proposer_address && addresses?.includes(referendumPost.onchain_link.proposer_address))
	);

	if (!post) return <NoPostFound/>;

	return (
		<Grid className={className}>
			<Grid.Column mobile={16} tablet={16} computer={10}>
				<div className='post_content'>
					<EditablePostContent
						isEditing={isEditing}
						onchainId={onchainId}
						post={post}
						postStatus={postStatus}
						refetch={refetch}
						toggleEdit={toggleEdit}
					/>

					{id && !isEditing && <SubscriptionButton postId={post.id}/>}
					{id && !isEditing && <Button className={'social'} onClick={togglePostReplyForm}><Icon name='reply'/>Reply</Button>}
					{canEdit && <Button className={'social'} onClick={toggleEdit}><Icon name='edit' className='icon'/>Edit</Button>}

					{ id && isPostReplyFormVisible &&
						<CreatePostComment
							onHide={togglePostReplyForm}
							postId={post.id}
							refetch={refetch}
						/>
					}
				</div>
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
				{ post.comments?.length
					? <Comments
						comments={post.comments}
						refetch={refetch}
					/>
					: null }
			</Grid.Column>
			<Grid.Column mobile={16} tablet={16} computer={6}>
				<Democracy isProposal={isProposal} isReferendum={isReferendum} onchainId={onchainId} />
			</Grid.Column>
		</Grid>
	);
};

export default styled(Post)`

	.post_content {
		background-color: white;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
		padding: 3rem;
		margin-bottom: 1rem;
	}
	h3 {
		font-family: 'Roboto';
		font-size: xl;
		margin-bottom: 0.4rem;
		max-width: calc(100% - 20rem);
		display: flex;
	}
	@media only screen and (max-width: 576px) {
		.post_content {
			padding: 2rem
		}
	}
`;
