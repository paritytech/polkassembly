import { ApolloQueryResult } from 'apollo-client';
import React, { useState, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { GoReply, GoX } from 'react-icons/go';
import styled from '@xstyled/styled-components';

import ContentForm from '../ContentForm';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useAddPostCommentMutation, useNotificationQuery, usePostSubscribeMutation, ProposalPostAndCommentsQuery, ProposalPostAndCommentsQueryVariables, ReferendumPostAndCommentsQueryVariables, DiscussionPostAndCommentsQueryVariables, ReferendumPostAndCommentsQuery, DiscussionPostAndCommentsQuery } from '../../generated/graphql';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';

interface Props {
	className?: string
	onHide: () => void
	postId: number
	refetch: (variables?: ReferendumPostAndCommentsQueryVariables | DiscussionPostAndCommentsQueryVariables | ProposalPostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<ReferendumPostAndCommentsQuery>> | Promise<ApolloQueryResult<ProposalPostAndCommentsQuery>> | Promise<ApolloQueryResult<DiscussionPostAndCommentsQuery>>
}

const PostCommentForm = ({ className, onHide, postId, refetch }: Props) => {
	const { id } = useContext(UserDetailsContext);
	const [content, setContent] = useState('');
	const { control, errors, handleSubmit } = useForm();

	const onContentChange = (data: Array<string>) => {setContent(data[0]); return(data[0].length ? data[0] : null);};
	const [addPostCommentMutation, { error }] = useAddPostCommentMutation();
	const [postSubscribeMutation] = usePostSubscribeMutation();
	const { data } = useNotificationQuery();

	if (!id) return <div>You must loggin to comment.</div>;

	const handleCancel = () => {
		setContent('');
		onHide();
	};

	const createSubscription = (postId: number) => {
		if (!data?.notification?.postParticipated) {
			return;
		}

		postSubscribeMutation({
			variables: {
				postId
			}
		})
			.then(({ data }) => {
				if (data && data.postSubscribe && data.postSubscribe.message) {
					console.log(data.postSubscribe.message);
				}
			})
			.catch((e) => console.error('Error subscribing to post',e));
	};

	const handleSave = () => {
		addPostCommentMutation( {
			variables: {
				authorId: id,
				content,
				postId
			} }
		)
			.then(({ data }) => {
				if (data && data.insert_comments && data.insert_comments.affected_rows>0){
					setContent('');
					onHide();
					refetch();
					createSubscription(postId);
				} else {
					throw new Error('No data returned from the saving comment query');
				}
				refetch();})
			.catch((e) => console.error('Error saving comment',e));
	};

	return (
		<div className={className}>
			{error && <FilteredError text={error.message}/>}

			<>
				<Controller
					as={<ContentForm
						errorContent={errors.content}
					/>}
					name='content'
					control={control}
					onChange={onContentChange}
					rules={{ required: true }}
				/>
				<div className='button-container'>
					<Button secondary size='small' onClick={handleCancel}><GoX className='icon'/>Cancel</Button>
					<Button primary size='small' onClick={handleSubmit(handleSave)}><GoReply className='icon'/>Reply</Button>
				</div>
			</>
		</div>
	);
};

export default styled(PostCommentForm)`
	margin: 2rem 0;

	.button-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
`;
