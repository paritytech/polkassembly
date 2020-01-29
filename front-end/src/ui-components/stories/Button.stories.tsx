import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Button from '../Button';
import { withTheme } from './customDecorators/withTheme';

const fontSizes = {
	lg: '2.1rem',
	md: '1.5rem',
	sm: '1.2rem'
};

type FontSize = keyof typeof fontSizes;

storiesOf('Button', module)
	.addDecorator(withKnobs)
	.addDecorator(withTheme)
	.add('primary',
		() => <Button
			className='primary'
			fontSize={select('font size', fontSizes, 'sm') as FontSize}
			fontWeight={text('font weight', '500')}
			onClick={action('clicked')}
		>Primary Button</Button>
	)
	.add('secondary',
		() => <Button
			className='secondary'
			fontSize={select('font size', fontSizes, 'sm') as FontSize}
			fontWeight={text('font weight', '500')}
			onClick={action('clicked')}
		>Secondary Button</Button>
	);