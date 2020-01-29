import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

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