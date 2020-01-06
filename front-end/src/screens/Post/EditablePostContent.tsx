import { ApolloQueryResult } from 'apollo-client';
import React, { useState, useContext, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import ContentForm from '../../components/ContentForm';
import PostContent from '../../components/PostContent';
import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { PostFragment, useEditPostMutation, PostAndCommentsQueryVariables, PostAndCommentsQuery } from '../../generated/graphql';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import { Tag } from '../../ui-components/Tag';
import TitleForm from '../../components/TitleForm';

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
	const [newContent, setNewContent] = useState(content || '');
	const [newTitle, setNewTitle] = useState(title || '');
	const toggleEdit = () => setIsEditing(!isEditing);
	const { queueNotification } = useContext(NotificationContext);
	const {  control, errors, handleSubmit, setValue } = useForm();

	useEffect(() => {
		if (isEditing) {
			setValue('content',content);
			setValue('title',title);
		}
	},[content, isEditing, setValue, title]);

	const handleCancel = () => {
		toggleEdit();
		setNewContent(content || '');
		setNewTitle(title || '');
	};
	const handleSave = () => {
		setIsEditing(false);
		editPostMutation( {
			variables: {
				content: newContent,
				id: post.id,
				title: newTitle
			} }
		)
			.then(({ data }) => {
				if (data && data.update_posts && data.update_posts.affected_rows>0){
					queueNotification({
						header: 'Success!',
						message: 'Your post was edited',
						status: NotificationStatus.SUCCESS
					});
					refetch();
				}
			})
			.catch((e) => console.error('Error saving post',e));
	};
	const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>[]) => {setNewTitle(event[0].currentTarget.value); return event[0].currentTarget.value;};
	const onContentChange = (data: Array<string>) => {setNewContent(data[0]); return(data[0].length ? data[0] : null);};
	const [editPostMutation, { error }] = useEditPostMutation({
		variables: {
			content: newContent,
			id: post.id,
			title: newTitle
		}
	});

	if (!author?.username || !content) return <div>Post content or author could not be found.</div>;

	return (
		<>
			<div className={className}>
				{error && <FilteredError text={error.message}/>}
				<div className='post_tags'>
					<Tag>{topic && topic.name}</Tag>
				</div>
				{
					isEditing
						?
						<Form standalone={false}>
							<Controller
								as={<TitleForm
									errorTitle={errors.title}
								/>}
								control={control}
								name='title'
								onChange={onTitleChange}
								rules={{ required: true }}
							/>
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
								<Button secondary onClick={handleCancel}><Icon name='cancel' className='icon'/> Cancel</Button>
								<Button primary onClick={handleSubmit(handleSave)}><Icon name='check' className='icon'/> Save</Button>
							</div>
						</Form>
						:
						<>
							<PostContent post={post}/>
							{post.author && id === post.author.id && <Button className={'social'} onClick={toggleEdit}><Icon name='edit' className='icon'/> Edit</Button>}
							{id && <Button className={'social'} onClick={onReply}><Icon name='reply'/> Reply</Button>}
						</>
				}
			</div>
		</>
	);
};

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