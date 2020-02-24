import React, { useState } from 'react';
import { Radio, CheckboxProps } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import { usePost_TopicsQuery } from '../../generated/graphql';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';

interface Props {
    className?: string
    onTopicSelection: (id: number)=> void
}

const TopicsRadio = ({ className, onTopicSelection }: Props) => {

	const [selectedTopic, setSelectedTopic] = useState(1);
	const { data, error } = usePost_TopicsQuery();
	const handleTopicSelection = (event: React.FormEvent<HTMLInputElement>, { value }: CheckboxProps) => {
		const topicId = Number(value);
		onTopicSelection(topicId);
		setSelectedTopic(topicId);
	};

	if (!data || !data.post_topics) return null;

	if (error) {
		console.error('Topic retrieval error', error);
		return <FilteredError text={error.message}/>;
	}

	return (
		<Form.Field className={className}>
			<label>Topic</label>
			<div className='topic-container'>
				{ data.post_topics.length
					? data.post_topics.map(({ id, name } : {name: string, id:number}) => {
						return <Radio
							checked = {id === selectedTopic ? true : false}
							key={id}
							label={name}
							onChange={handleTopicSelection}
							value={id}
						/>;
					})
					: 'No topic found'}
			</div>
		</Form.Field>
	);
};

export default styled(TopicsRadio)`
	.topic-container {
		display: flex;
	}

    .ui.checkbox {
		display: block;

		& label:before, & label:after {
			opacity: 0;
			position: fixed;
			width: 0;
		}

		& label {
			display: inline-block;
			background-color: grey_light;
			color: black_text;
			padding: 0.5rem 0.8rem;
			font-family: font_default;
			font-size: 1rem;
			line-height: 1;
			border-radius: 0.2rem;
			letter-spacing: 0.05rem;
			margin-right: 0.8rem;
			&:hover {
				background-color: grey_primary;
				color: white;
			}
		}
	}

	.ui.checked.radio.checkbox label {
		background-color: grey_primary;
		color: white;	
	}
`;
