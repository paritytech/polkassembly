import React from 'react';
import styled from 'styled-components';

import { Form } from '../ui-components/Form';
import { TextArea } from '../ui-components/TextArea';

interface Props {
	className?: string
	errorContent?: any
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
			{errorContent && <div className={'errorText'}>Did you forget to add some content?</div>}
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
		color: #fe4850;
		margin-bottom: 1rem;
	}

	textarea {
		font-size: 1.4rem;
	}

	.react-mde.error > textarea {
		border: solid 1px #fe4850 !important;
	}

	.container {
		max-width: 100%;
		padding: 0 0.5rem;
	}
`;
