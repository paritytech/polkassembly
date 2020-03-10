// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { ChangeEvent } from 'react';
import { FieldError, NestDataObject } from 'react-hook-form/dist/types';
import styled from '@xstyled/styled-components';

import { Form } from '../ui-components/Form';
import messages from '../util/messages';

interface Props {
	className?: string
	errorTitle?: FieldError | NestDataObject<any> | NestDataObject<any>[] | FieldError[]
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	value?: string
}

const TitleForm = ({ className, errorTitle, onChange, value = '' }:Props): JSX.Element => {

	return (
		<div className={className}>
			<Form.Group>
				<Form.Field width={16}>
					<label>Title</label>
					<input
						className={errorTitle ? 'error title' : 'title'}
						name={'title'}
						onChange={onChange}
						placeholder='Your title...'
						type='text'
						value={value}
					/>
					{errorTitle && <span className={'errorText'}>{messages.VALIDATION_TITLE_ERROR}</span>}
				</Form.Field>
			</Form.Group>
		</div>
	);
};

export default styled(TitleForm)`
	.fields {
		padding: 0;
	}

	input.title {
		font-size: 1.4rem !important;
	}

	input.error {
		border-color: red_secondary !important;
	}

	.errorText {
		color: red_secondary;
	}
`;
