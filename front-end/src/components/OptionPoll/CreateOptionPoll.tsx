// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useState } from 'react';
import { Icon, Input, InputOnChangeData } from 'semantic-ui-react';

import { NotificationContext } from '../../context/NotificationContext';
import { useCreateOptionPollMutation } from '../../generated/graphql';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import Modal from '../../ui-components/Modal';

interface CreateOptionPollProps {
	postId: number
}

const CreatePoll = function ({ postId }: CreateOptionPollProps) {
	const [showModal, setShowModal] = useState(false);
	const [question, setQuestion] = useState('');
	const [inputs, setInputs] = useState<number[]>([1, 2]);
	const [options, setOptions] = useState<string[]>(['', '']);
	const [validationError, setValidationError] = useState('');

	const [createOptionPollMutation, { loading, error }] = useCreateOptionPollMutation();
	const { queueNotification } = useContext(NotificationContext);

	const handleCreate = () => {
		if (!question) {
			setValidationError('Please provide question');
			return;
		}

		if (!options.filter(option => option).length) {
			setValidationError('Please provide options');
			return;
		}

		createOptionPollMutation({
			variables: {
				endAt: Math.round(Date.now()/1000),
				options: JSON.stringify(options),
				postId,
				question
			}
		})
			.then(({ data }) => {
				if (data?.insert_option_poll?.affected_rows) {
					queueNotification({
						header: 'Success!',
						message: 'Poll Created',
						status: NotificationStatus.SUCCESS
					});
				}
				setShowModal(false);
				setQuestion('');
				setInputs([1, 2]);
				setOptions(['', '']);
				setValidationError('');
			})
			.catch((e) => {
				console.error('Error creating poll', e);
			});
	};

	const openModal = () => {
		setShowModal(true);
		setQuestion('');
		setInputs([1, 2]);
		setOptions(['', '']);
		setValidationError('');
	};
	const dismissModal = () => {
		setShowModal(false);
		setQuestion('');
		setInputs([1, 2]);
		setOptions(['', '']);
		setValidationError('');
	};

	const onQuestionChange = (event: React.FormEvent<HTMLInputElement>, data: InputOnChangeData) => {
		setQuestion(data.value?.toString() || '');
		setValidationError('');
	};
	const onOptionChange = (value: string, index: number) => {
		const newOptions = [...options];
		newOptions[index] = value;
		setOptions(newOptions);
		setValidationError('');
	};

	const addInput = () => {
		setInputs([...inputs, inputs.length + 1]);
	};

	return (
		<>
			{showModal ?
				<Modal
					buttons={
						<Form.Group>
							<Button
								content='Create'
								disabled={loading}
								icon='add'
								primary
								onClick={handleCreate}
							/>
							<Button
								content='Close'
								icon='close'
								secondary
								onClick={dismissModal}
							/>
						</Form.Group>
					}
					centered
					dimmer='inverted'
					open
					onClose={dismissModal}
					size='tiny'
					title={'Create Poll'}
				>
					<Form standalone={false}>
						<Form.Group>
							<Form.Field width={16}>
								<Input
									name={'question'}
									placeholder={'Ask a question...'}
									onChange={onQuestionChange}
									value={question || ''}
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group>
							<Form.Field width={16}>
								<label>Options</label>
								{inputs.map((_, index) => (
									<Input
										key={`${index}`}
										name={`option-${index}`}
										placeholder={`Option ${index + 1}`}
										onChange={e => onOptionChange(e.target.value, index)}
									/>
								))}
								<Button
									icon='add'
									secondary
									onClick={addInput}
								/>
							</Form.Field>
						</Form.Group>
						{error?.message && <FilteredError text={error.message}/>}
						{validationError && <FilteredError text={validationError}/>}
					</Form>
				</Modal>
				: null
			}
			<Button
				className={'social'}
				onClick={openModal}
			>
				<Icon name='align left'/>{' Create Poll'}
			</Button>
		</>
	);
};

export default CreatePoll;
