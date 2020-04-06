// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { Divider, Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import Web2Login from '../../components/Login/Web2Login';
import Web3Login from '../../components/Login/Web3Login';

interface Props {
	className?: string
}

const Login = ({ className }: Props) => {

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
				<div className='login-box'>
					<Web2Login />
					<Divider horizontal>Or</Divider>
					<Web3Login />
				</div>
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
		</Grid>
	);
};

export default styled(Login)`
	.login-box {
		background-color: white;
		margin-top: 4rem;
		padding: 2rem 3rem 3rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_border;
		border-radius: 3px;
	}

	.ui.horizontal.divider  {
		color: black_text !important;
		margin: 3rem 0;
		font-weight: 400;
	}
`;