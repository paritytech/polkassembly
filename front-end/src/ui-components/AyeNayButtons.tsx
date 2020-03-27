// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import React from 'react';
import styled from '@xstyled/styled-components';

import Button from './Button';
import { Form } from './Form';

interface Props{
    className?: string;
    disabled: boolean;
    onClickAye: () => void;
    onClickNay: () => void;
}

const AyeNayButton = ({ className, disabled, onClickAye, onClickNay } : Props) =>
	<Form.Group className={className}>
		<Form.Field className={'button-container'} width={8}>
			<Button
				fluid
				basic
				className='primary negative'
				disabled={disabled}
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
				disabled={disabled}
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
`;