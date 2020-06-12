// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Grid } from 'semantic-ui-react';

import PP from '../../assets/privacy-policy';
import TAC from '../../assets/terms-and-conditions';
import TOW from '../../assets/terms-of-website';
import Markdown from '../../ui-components/Markdown';
interface Props{
	md: string
	className?: string
}

const MdScreen = ({ md, className } : Props) => {
	return (
		<Grid className={className}>
			<Grid.Column tablet={4} computer={2} largeScreen={2} widescreen={2}/>
			<Grid.Column className='md_box' mobile={16} tablet={12} computer={12} largeScreen={12} widescreen={12}>
				<Markdown className='markdown' md={md}/>
			</Grid.Column>
		</Grid>
	);
};

const StyledMdScreen = styled(MdScreen)`
	.md_box {
		background-color: white;
		padding: 3rem!important;
		border-radius: 0.3rem;
		box-shadow: box_shadow_card;
	}
`;

export const TermsAndConditions = () => <StyledMdScreen md={TAC}/>;
export const PrivacyPolicy = () => <StyledMdScreen md={PP}/>;
export const TermsOfWebsite = () => <StyledMdScreen md={TOW}/>;

