import React, { ChangeEvent } from 'react';
import { FieldError, NestDataObject } from 'react-hook-form/dist/types';
import styled from 'styled-components';

import { Form } from '../ui-components/Form';

interface Props {
	className?: string
	errorTitle?: FieldError | NestDataObject<any> | NestDataObject<any>[]
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
					{errorTitle && <span className={'errorText'}>Did you forget to add a title?</span>}
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
		border-color: #fe4850 !important;
	}

	.errorText {
		color: #fe4850
	}
`;
