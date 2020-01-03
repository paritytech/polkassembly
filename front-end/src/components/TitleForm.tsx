import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Form } from '../ui-components/Form';

interface Props {
	className?: string
	errorTitle?: any
	onTitleChange?: (event: ChangeEvent<HTMLInputElement>) => void
	refTitle?: any
	title: string
}

const TitleForm = ({ className, errorTitle, onTitleChange, refTitle, title='' }:Props): JSX.Element => {

	return (
		<div className={className}>
			<Form.Group>
				<Form.Field width={16}>
					<label>Title</label>
					<input
						className={errorTitle ? 'error title' : 'title'}
						name={'title'}
						onChange={onTitleChange}
						placeholder='Your title...'
						ref={refTitle}
						type="text"
						value={title}
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
