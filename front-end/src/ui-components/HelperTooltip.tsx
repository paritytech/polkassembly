// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

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
	font-size: 1.3rem !important;
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