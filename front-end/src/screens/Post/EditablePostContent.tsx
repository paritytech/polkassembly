import { ApolloQueryResult } from 'apollo-client';
import React, { useState, useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { PostFragment, useEditPostMutation, PostAndRepliesQueryVariables, PostAndRepliesQuery } from '../../generated/graphql';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import PostContent from '../../components/PostContent';
import PostForm from '../../components/PostForm';
import { Button } from '../../ui-components/Button';
import DisapearingLabel from '../../ui-components/DisapearingLabel';
import { Tag } from '../../ui-components/Tag';

interface Props {
	className?: string
	post: PostFragment
	refetch: (variables?: PostAndRepliesQueryVariables | undefined) => Promise<ApolloQueryResult<PostAndRepliesQuery>>
}

const EditablePostContent = ({ post, refetch }: Props) => {
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

	if (!author || !author.username || !content) return <div>Post not available</div>

	return (
		<>
			{error && error.message && <div>{error.message}</div>}
			<div className='post_tags'>
				<Tag>{topic && topic.name}</Tag>
			</div>
			{
				isEditing
					?
					<>
						<PostForm
							content={newContent}
							onContentChange={onContentChange}
							onTitleChange={onTitleChange}
							title={newTitle}

						/>
						<Button onClick={handleCancel}>Cancel <Icon name='cancel'/></Button>
						<Button onClick={handleSave}>Save <Icon name='save'/></Button>
					</>
					:
					<>
						<PostContent post={post}/>
						{/* FIXME id from the context is a string.. */}
						{post.author && id == post.author.id && <Button onClick={toggleEdit}>edit <Icon name='edit'/></Button>}
						{data && data.update_posts && data.update_posts.affected_rows > 0 && <DisapearingLabel
							color='green'
							iconName='check'
							labelText='Saved'
						/>}
					</>
			}
		</>
	);
}

export default EditablePostContent;