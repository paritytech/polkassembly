import React, { ChangeEvent } from 'react';
// import { FieldError } from 'react-hook-form';
import styled from 'styled-components';

import { Form } from '../ui-components/Form';
import { TextArea } from '../ui-components/TextArea';

interface Props {
	className?: string
	value?: string
	errorContent?: any
	errorTitle?: any
	onContentChange?: (content: string) => void
	onTitleChange?: (event: ChangeEvent<HTMLInputElement>) => void
	refContent?: any
	refTitle?: any
	title?: string
	withTitle?: boolean
}

const PostOrCommentForm = ({ className, value, errorContent, errorTitle, onContentChange, onTitleChange, refContent, refTitle, title='', withTitle=true }:Props): JSX.Element => {

	return (
		<div className={className}>
			{
				withTitle && <Form.Group>
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
			}
			<Form.Group className={errorContent? 'error':''}>
				<TextArea
					className={ errorContent? 'error':''}
					name={'content'}
					onChange={onContentChange}
					ref={refContent}
					value={value || ''}
				/>
			</Form.Group>
			{errorContent && <div className={'errorText'}>Did you forget to add some content?</div>}
		</div>
	);
};

export default styled(PostOrCommentForm)`
	.fields {
		padding: 0;

		&.error {
			margin-bottom: 0 !important;
		}
	}

	input.title {
		font-size: 1.4rem !important;
	}

	input.error {
		border-color: #fe4850 !important;
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
