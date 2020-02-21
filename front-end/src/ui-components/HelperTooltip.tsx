import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

interface Props {
	className?: string
	content: string
}

const HelperTooltip = ({ className, content }:Props) =>
	<Popup
		className={className}
		trigger={<Icon name='question circle' style={{ color: '#A6ACB3', marginLeft: '0.2rem' }}/>}
		content={content}
		style={{ fontSize: '1.2rem', marginLeft: '-1rem' }}
		hoverable={true}
	/>;

export default HelperTooltip;