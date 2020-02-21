import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

interface Props {
	className?: string
	content: string
}

const circleStyle = {
	color: '#A6ACB3',
	marginLeft: '0.2rem'
};

const popupStyle = {
	fontSize: '1.2rem',
	marginLeft: '-1rem'
};

const HelperTooltip = ({ className, content }:Props) =>
	<Popup
		className={className}
		trigger={<Icon name='question circle' style={circleStyle}/>}
		content={content}
		style={popupStyle}
		hoverable={true}
	/>;

export default HelperTooltip;