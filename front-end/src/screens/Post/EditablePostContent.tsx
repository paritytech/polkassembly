import { ApolloQueryResult } from 'apollo-client';
import React, { useState, useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { PostFragment, useEditPostMutation, PostAndCommentsQueryVariables, PostAndCommentsQuery } from '../../generated/graphql';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import PostContent from '../../components/PostContent';
import PostOrCommentForm from '../../components/PostOrCommentForm';
import Button from '../../ui-components/Button';
import DisapearingLabel from '../../ui-components/DisapearingLabel';
import { Tag } from '../../ui-components/Tag';

interface Props {
	className?: string
	onReply: () => void
	post: PostFragment
	refetch: (variables?: PostAndCommentsQueryVariables | undefined) => Promise<ApolloQueryResult<PostAndCommentsQuery>>
}

const EditablePostContent = ({ className, onReply, post, refetch }: Props) => {
	const { author, topic, content, title } = post;
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useContext(UserDetailsContext);
	const [newContent, setNewContent] = useState(content || '')
	const [newTitle, setNewTitle] = useState(title || '')
	const toggleEdit = () => setIsEditing(!isEditing)
	const handleCancel = () => {
		toggleEdit();
		setNewContent(content || '');
		setNewTitle(title || '')
	}
	const handleSave = () => {
		setIsEditing(false);
		editPostMutation( {
			variables: {
				content: newContent,
				id: post.id,
				title: newTitle
			} }
		)
			.then(() => refetch())
			.catch((e) => console.error('Error saving post',e))
	}
	const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setNewTitle(event.currentTarget.value);
	const onContentChange = (content: string) => setNewContent(content);
	const [editPostMutation, { data, error }] = useEditPostMutation({
		variables: {
			content: newContent,
			id: post.id,
			title: newTitle
		}
	});

	if (!author || !author.username || !content) return <div>Post content or author could not be found.</div>

	return (
		<>
			<div className={className}>
				{error && error.message && <div>{error.message}</div>}
				<div className='post_tags'>
					<Tag>{topic && topic.name}</Tag>
				</div>
				{
					isEditing
						?
						<>
							<PostOrCommentForm
								content={newContent}
								onContentChange={onContentChange}
								onTitleChange={onTitleChange}
								title={newTitle}

							/>
							<div className='button-container'>
								<Button className={'secondary'} onClick={handleCancel}><Icon name='cancel' className='icon'/> Cancel</Button>
								<Button className={'primary'} onClick={handleSave}><Icon name='check' className='icon'/> Save</Button>
							</div>
						</>
						:
						<>
							<PostContent post={post}/>
							{post.author && id === post.author.id && <Button className={'social'} onClick={toggleEdit}><Icon name='edit' className='icon'/> Edit</Button>}
							{id && <Button className={'social'} onClick={onReply}><Icon name='reply'/> Reply</Button>}
							{data && data.update_posts && data.update_posts.affected_rows > 0 &&
								<DisapearingLabel
									iconColor='green'
									iconName='check circle'
									text='Saved'
								/> }
						</>
				}
			</div>
		</>
	);
}

export default styled(EditablePostContent)`
	margin: 2rem 0;

	.button-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;	
	}

	.icon {
		margin-top: -0.2rem!important;
		margin-right: -0.3rem!important;
		opacity: 1;
	}
}`;