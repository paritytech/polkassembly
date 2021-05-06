// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useState } from 'react';
import { Dropdown, DropdownProps, Icon, Input, InputOnChangeData } from 'semantic-ui-react';

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

interface DropdownOptions {
	key: string
	text: string
	value: number
}

const daysOptions: DropdownOptions[] = [];

for (let i = 0; i < 10; i++) {
	daysOptions.push({
		key: `${i + 1}`,
		text: `${i + 1}`,
		value: i + 1
	});
}

const hoursOptions: DropdownOptions[] = [];

for (let i = 0; i < 23; i++) {
	hoursOptions.push({
		key: `${i + 1}`,
		text: `${i + 1}`,
		value: i + 1
	});
}

const minutesOptions: DropdownOptions[] = [];

for (let i = 0; i < 59; i++) {
	minutesOptions.push({
		key: `${i + 1}`,
		text: `${i + 1}`,
		value: i + 1
	});
}

const CreatePoll = function ({ postId }: CreateOptionPollProps) {
	const [showModal, setShowModal] = useState(false);
	const [question, setQuestion] = useState('');
	const [days, setDays] = useState(1);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
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

		const endAt = Math.round(Date.now()/1000) + (days*24*60*60) + (hours*60*60) + (minutes*60);

		createOptionPollMutation({
			variables: {
				endAt,
				options: JSON.stringify(options),
				postId,
				question
			}
		})
			.then(({ data }) => {
				setShowModal(false);
				setQuestion('');
				setInputs([1, 2]);
				setOptions(['', '']);
				setValidationError('');
				if (data?.insert_option_poll?.affected_rows) {
					queueNotification({
						header: 'Success!',
						message: 'Poll Created',
						status: NotificationStatus.SUCCESS
					});
					window.location.reload(false);
				}
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

	const onDaysChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		const days = data.value as number;
		setDays(days);
	};

	const onHoursChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		const hours = data.value as number;
		setHours(hours);
	};

	const onMinutesChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		const minutes = data.value as number;
		setMinutes(minutes);
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
						<Form.Group>
							<label>Poll length</label>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Field>
								<Dropdown
									placeholder='Days'
									fluid
									selection
									options={daysOptions}
									onChange={onDaysChange}
								/>
							</Form.Field>
							<Form.Field>
								<Dropdown
									placeholder='Hours'
									fluid
									selection
									options={hoursOptions}
									onChange={onHoursChange}
								/>
							</Form.Field>
							<Form.Field>
								<Dropdown
									placeholder='Minutes'
									fluid
									selection
									options={minutesOptions}
									onChange={onMinutesChange}
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
