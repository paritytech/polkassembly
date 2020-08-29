// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { FieldError, NestDataObject } from 'react-hook-form/dist/types';

import { Form } from '../ui-components/Form';
import { MarkdownEditor } from '../ui-components/MarkdownEditor';
import messages from '../util/messages';

interface Props {
	className?: string
	errorContent?: FieldError | NestDataObject<any, any> | NestDataObject<any, any>[] | FieldError[] | undefined
	height?: number
	onChange?: (content: string) => void
	value?: string
}

const ContentForm = ({ className, errorContent, height, onChange, value }: Props): JSX.Element => {

	return (
		<div className={className}>
			<Form.Group className={errorContent? 'error': ''}>
				<MarkdownEditor
					className={ errorContent? 'error': ''}
					height={height}
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

	.react-mde.error > .mde-textarea-wrapper > textarea {
		border-style: solid !important;
		border-width: 1px !important;
		border-color: red_secondary !important;
	}

	.container {
		max-width: 100%;
		min-width: 100%;
		padding: 0 0.5rem;
	}
`;
