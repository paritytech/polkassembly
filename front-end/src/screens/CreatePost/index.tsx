// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromiseContext } from '@substrate/context';
import styled from '@xstyled/styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { Controller,useForm } from 'react-hook-form';
import { Checkbox, CheckboxProps, Grid } from 'semantic-ui-react';
import { chainProperties } from 'src/global/networkConstants';
import getNetwork from 'src/util/getNetwork';

import ContentForm from '../../components/ContentForm';
import TitleForm from '../../components/TitleForm';
import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useCreatePostMutation, useGetCurrentBlockNumberQuery, usePostSubscribeMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import TopicsRadio from './TopicsRadio';

interface Props {
	className?: string
}

const TWO_WEEKS = 2 * 7 * 24 * 60 * 60 * 1000;

const CreatePost = ({ className }:Props): JSX.Element => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [hasPoll, setHasPoll] = useState(false);
	const { queueNotification } = useContext(NotificationContext);
	const [selectedTopic, setSetlectedTopic] = useState(1);
	const currentUser = useContext(UserDetailsContext);
	const { control, errors, handleSubmit } = useForm();
	const network = getNetwork();
	const { api, isApiReady } = useContext(ApiPromiseContext);
	const DEFAULT_TIME = chainProperties?.[network]?.blockTime;
	const [blocktime, setBlocktime] = useState(DEFAULT_TIME);

	const { data } = useGetCurrentBlockNumberQuery();
	const [createPostMutation, { loading, error }] = useCreatePostMutation();
	const [postSubscribeMutation] = usePostSubscribeMutation();
	const [isSending, setIsSending] = useState(false);
	const { history } = useRouter();

	useEffect(() => {

		if (!isApiReady) {
			return;
		}

		setBlocktime(api.consts.babe?.expectedBlockTime.toNumber());
	}, [api, isApiReady]);

	const createSubscription = (postId: number) => {
		if (!currentUser?.notification?.postCreated) {
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

	const getEndBlockNumber = (currentBlock: number | undefined): number => {
		const endBlock = Math.floor(TWO_WEEKS/blocktime);

		return (currentBlock || 0) + endBlock;
	};

	const handleSend = () => {
		const blockNumber = data?.blockNumbers?.[0]?.number;
		const pollBlockNumberEnd = getEndBlockNumber(blockNumber);
		if (currentUser.id && title && content && selectedTopic){
			setIsSending(true);
			createPostMutation({ variables: {
				content,
				hasPoll,
				pollBlockNumberEnd,
				title,
				topicId: selectedTopic,
				userId: currentUser.id
			} }).then(({ data }) => {
				if (data && data.insert_posts &&  data.insert_posts.affected_rows > 0 && data.insert_posts.returning.length && data.insert_posts.returning[0].id) {
					const postId = data.insert_posts.returning.length && data.insert_posts.returning[0].id;
					history.push(`/post/${postId}`);
					queueNotification({
						header: 'Thanks for sharing!',
						message: 'Post created successfully.',
						status: NotificationStatus.SUCCESS
					});
					createSubscription(postId);
				} else {
					throw Error('Error in post creation');
				}
			}).catch( e => console.error(e));
		} else {
			console.error('Current userid, title, content or selected topic missing',currentUser.id,title, content, selectedTopic);
		}
	};

	const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>[]) => {setTitle(event[0].currentTarget.value); return event[0].currentTarget.value;};
	const onContentChange = (data: Array<string>) => {setContent(data[0]); return data[0].length ? data[0] : null;};
	const onPollChanged = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => { setHasPoll(data.checked || false);};

	return (
		<Grid>
			<Grid.Column mobile={16} tablet={16} computer={12} largeScreen={10} widescreen={10}>
				<Form className={className}>
					<h3>New Post</h3>
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
						control={control}
						name='content'
						onChange={onContentChange}
						rules={{ required: true }}
					/>

					<Form.Group>
						<Form.Field>
							<Checkbox label='Add a poll to this discussion' checked={false} toggle onChange={onPollChanged} />
						</Form.Field>
					</Form.Group>

					<TopicsRadio
						onTopicSelection={(id: number) => setSetlectedTopic(id)}
					/>

					<div className={'mainButtonContainer'}>
						<Button
							primary
							onClick={handleSubmit(handleSend)}
							disabled={isSending || loading}
							type='submit'
						>
							{isSending || loading ? 'Creating...' : 'Create'}
						</Button>
					</div>
					{error?.message && <FilteredError text={error.message}/>}
				</Form>
			</Grid.Column>
			<Grid.Column only='computer' computer={4} largeScreen={6} widescreen={6}/>
		</Grid>
	);
};

export default styled(CreatePost)`
	.mainButtonContainer{
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 3rem;
	}
`;
