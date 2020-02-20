import React from 'react';
import { FieldError, NestDataObject } from 'react-hook-form/dist/types';
import styled from 'styled-components';

import { Form } from '../ui-components/Form';
import messages from '../util/messages';
import { TextArea } from '../ui-components/TextArea';

interface Props {
	className?: string
	errorContent?: FieldError | NestDataObject<any> | NestDataObject<any>[] | FieldError[] | undefined
	onChange?: (content: string) => void
	value?: string
}

const ContentForm = ({ className, value, errorContent, onChange }:Props): JSX.Element => {

	return (
		<div className={className}>
			<Form.Group className={errorContent? 'error':''}>
				<TextArea
					className={ errorContent? 'error':''}
					name={'content'}
					onChange={onChange}
					value={value || ''}
				/>
			</Form.Group>
			{errorContent && <div className={'errorText'}>{messages.VALIDATION_CONTENT_ERROR}</div>}
		</div>
	);
};

export default styled(ContentForm)`
	.fields {
		padding: 0;

		&.error {
			margin-bottom: 0 !important;
		}
	}

	.errorText {
		color: red_secondary;
		margin-bottom: 1rem;
		padding-left: 0.5rem;
	}

	textarea {
		font-size: 1.4rem;
	}

	.react-mde.error > textarea {
		border-style: solid;
		border-width: 1px;
		border-color: red_secondary !important;
	}

	.container {
		max-width: 100%;
		min-width: 100%;
		padding: 0 0.5rem;
	}
`;
