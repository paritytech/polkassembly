import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Form } from '../ui-components/Form';
import { TextArea } from '../ui-components/TextArea';

interface Props {
	className?: string
	content: string
	onContentChange?: (content: string) => void
	onTitleChange?: (event: ChangeEvent<HTMLInputElement>) => void
	title: string
}

const CommentForm = ({ className, content, onContentChange }:Props): JSX.Element => {

	return (
		<Form className={className}>
			<Form.Group>
				<TextArea
					onChange={onContentChange}
					value={content}
				/>
			</Form.Group>
		</Form>
	);
};

export default styled(CommentForm)`
	margin-top: 0;
	border: none;
		.fields {
			padding: 0;
		}

		textarea {
			font-size: 1.4rem;
		}

		.container {
			max-width: 100%;
		}
`