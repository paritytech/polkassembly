// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';

import Button from './Button';
import { Form } from './Form';

interface Props{
	className?: string;
	disabledAye: boolean;
	disabledNay: boolean;
	hasVoted?: boolean;
	onClickAye: () => void;
	onClickNay: () => void;
}

const AyeNayButton = ({ className, disabledAye, disabledNay, hasVoted, onClickAye, onClickNay } : Props) =>
	<Form.Group className={hasVoted? `${className} has-voted` : className }>
		<Form.Field className={'button-container'} width={8}>
			<Button
				fluid
				basic
				className='primary negative'
				disabled={disabledNay}
				onClick={onClickNay}
			>
				<Icon name='thumbs down' />
                Nay
			</Button>
		</Form.Field>
		<Form.Field className='button-container' width={8}>
			<Button
				fluid
				className='primary positive'
				disabled={disabledAye}
				onClick={onClickAye}
			>
				<Icon name='thumbs up' />
                Aye
			</Button>
		</Form.Field>
	</Form.Group>;

export default styled(AyeNayButton)`
	@media only screen and (max-width: 768px) {
		.button-container {
			margin-bottom: 1rem !important;
		}
	}

	&.has-voted {
		.ui.button.ui.primary.positive.button,
		.ui.button.ui.primary.positive.button:hover {
			background-color: green_secondary !important;
			cursor: default;
		}

		.ui.button.ui.primary.negative.button,
		.ui.button.ui.primary.negative.button:hover {
			background-color: red_secondary !important;
			cursor: default;
		}
	}
`;