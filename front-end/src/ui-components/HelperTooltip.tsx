import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

interface Props {
	content: string
}

const popupStyle = {
	fontSize: '1.2rem',
	marginLeft: '-1rem'
};

const myIcon = ({ className }:{className?: string}) => <Icon className={className} name='question circle'/>;

export const StyledIcon = styled(myIcon)`
	color: grey_secondary;
	margin-left: 0.2rem !important;
`;

const HelperTooltip = ({ content }:Props) =>
	<Popup
		trigger={<span><StyledIcon/></span>}
		content={content}
		style={popupStyle}
		hoverable={true}
	/>;

export default HelperTooltip;