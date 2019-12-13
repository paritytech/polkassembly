import React, { useState, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import * as moment from 'moment'

import { PostFragment } from '../generated/graphql';
import { UserDetailsContext } from '../context/UserDetailsContext';
import { Tag } from '../ui-components/Tag';
import { Button } from '../ui-components/Button';
import { Icon } from 'semantic-ui-react';
import { TextArea } from '../ui-components/TextArea';
import { Form } from '../ui-components/Form';

const PostContent = ({ post } : {post: PostFragment}) => {
	const { author, topic, content, created_at, title } = post;
	const [isEditing, setIsEditing] = useState(false);
	const { id } = useContext(UserDetailsContext);
	const [newContent, setnewContent] = useState(post.content || '')
	const [newTitle, setNewTitle] = useState(title || '')
	const handleEdit = () => setIsEditing(true)
	const handleSave = () => {
		setIsEditing(false);
	}
	const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => setNewTitle(event.currentTarget.value);

	if (!author || !author.username || !content) return <div>Post not available</div>

	return (
		<>
			<div className='post_tags'>
				<Tag>{topic && topic.name}</Tag>
			</div>
			{
				isEditing
					? <Form.Group>
						<Form.Field width={16}>
							<input
								onChange={onTitleChange}
								type="text"
								value={newTitle}
							/>
						</Form.Field>
					</Form.Group>
					: <h3>{newTitle}</h3>
			}
			<div className='post_info'>posted by <strong>{author.username}</strong> {moment.default(created_at, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()}</div>
			{
				isEditing ?
					<Form.Group>
						<Form.Field width={16}>
							<TextArea
								onChange={setnewContent}
								value={newContent}
							/>
							<Button onClick={handleSave}>save <Icon name='save'/></Button>
						</Form.Field>
					</Form.Group>
					: <>
						<ReactMarkdown className='post_content' source={content} />
						{/* FIXME id from the context is a string.. */}
						{post.author && id == post.author.id && <Button onClick={handleEdit}>edit <Icon name='edit'/></Button>}
					</>
			}
		</>
	);
}

export default PostContent;