import React, { useState } from 'react';
import { Radio, CheckboxProps } from 'semantic-ui-react';
import styled from 'styled-components';

import { usePost_TopicsQuery } from '../../generated/graphql';
import { Form } from '../../ui-components/Form';

interface Props {
    className?: string
    onTopicSelection: (id: number)=> void
}

const TopicsRadio = ({ className, onTopicSelection }: Props) => {

	const [selectedTopic, setSelectedTopic] = useState(1)
	const { data, error } = usePost_TopicsQuery()
	const handleTopicSelection = (event: React.FormEvent<HTMLInputElement>, { value }: CheckboxProps) => {
		const topicId = Number(value)
		onTopicSelection(topicId)
		setSelectedTopic(topicId)
	}

	if (!data || !data.post_topics) return null

	if (error) {
		console.error('Topic retrieval error', error)
		return <div>{error.message}</div>
	}

	return (
		<Form.Field className={className}>
			<label>Topic:</label>
			{ data.post_topics.length
				? data.post_topics.map(({ id, name } : {name: string, id:number}) => {
					return <Radio
						checked = {id === selectedTopic ? true : false}
						key={id}
						label={name}
						onChange={handleTopicSelection}
						value={id}
					/>
				})
				: 'No topic found'}
		</Form.Field>
	)
}

export default styled(TopicsRadio)`
    .ui.checkbox{
        display: block;
    }
`
