import React, { useState, useContext } from 'react';
import { Icon } from 'semantic-ui-react';

import { PostFragment, useEditPostMutation } from '../../generated/graphql';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import PostContent from '../../components/PostContent';
import PostForm from '../../components/PostForm';
import { Tag } from '../../ui-components/Tag';
import { Button } from '../../ui-components/Button';

const EditablePostContent = ({ post } : {post: PostFragment}) => {
	const { author, topic, content, title } = post;
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useContext(UserDetailsContext);
	const [newContent, setNewContent] = useState(post.content || '')
	const [newTitle, setNewTitle] = useState(title || '')
	const handleEdit = () => setIsEditing(true)
	const handleSave = () => {
		setIsEditing(false);
		editPostMutation( {
			variables: {
				content: newContent,
				id: post.id,
				title: newTitle
			} }
		)
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
			{data && data.update_posts && data.update_posts.affected_rows > 0 && <div>saved!</div>}
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
						<Button onClick={handleSave}>Save <Icon name='save'/></Button>
					</>
					:
					<>
						<PostContent post={post}/>
						{/* FIXME id from the context is a string.. */}
						{post.author && id == post.author.id && <Button onClick={handleEdit}>edit <Icon name='edit'/></Button>}
					</>
			}
		</>
	);
}

export default EditablePostContent;