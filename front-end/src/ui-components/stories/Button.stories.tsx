// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { action } from '@storybook/addon-actions';
import { text,withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '../Button';
import { withTheme } from './customDecorators/withTheme';

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.addDecorator(withTheme)
	.add('primary',
		() => <Button
			className='primary'
			onClick={action('clicked')}
		>{text('content', 'Primary Button')}</Button>
	)
	.add('secondary',
		() => <Button
			className='secondary'
			onClick={action('clicked')}
		>{text('content', 'Secondary Button')}</Button>
	);