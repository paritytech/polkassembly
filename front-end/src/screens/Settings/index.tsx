// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import Email from './email';
import Fullname from './fullname';
import Password from  './password';
import Username from './username';
import Address from './address';

interface Props {
	className?: string
}

const Settings = ({ className }:Props): JSX.Element => {
	return (
		<Grid>
			<Grid.Column className={className} mobile={16} tablet={12} computer={12} largeScreen={10} widescreen={10}>
				<h2>Settings</h2>
				<Divider/>
				<Username/>
				<Fullname/>
				<Divider/>
				<Email/>
				<Divider/>
				<Password/>
				<Divider/>
				<Address/>
			</Grid.Column>
			<Grid.Column only='computer' computer={4} largeScreen={6} widescreen={6}/>
		</Grid>
	);
};

export default styled(Settings)`
	background-color: white;
	padding: 2rem 3rem 3rem 3rem!important;
	border-style: solid;
	border-width: 1px;
	border-color: grey_light;

	.ui.divider, .ui.divider:not(.vertical):not(.horizontal) {
		margin: 3rem 0 2rem 0;
		border-top-style: solid;
		border-top-width: 1px;
		border-top-color: grey_light;
		border-bottom: none;
	}

	.button {
		margin-top: 0.2rem;
	}

	.ui.form:not(.unstackable)
	.fields:not(.unstackable)>.ten.wide.field {

		@media only screen and (max-width: 767px)  {
			width: 70%!important;
		}

		@media only screen and (max-width: 576px) {
			width: 60%!important;
		}
	}

	.ui.form:not(.unstackable)
	.fields:not(.unstackable)>.six.wide.field {

		@media only screen and (max-width: 767px)  {
			width: 30%!important;
		}

		@media only screen and (max-width: 576px) {
			width: 40%!important;
		}
	}

	@media only screen and (max-width: 576px) {
		padding: 2rem!important;

		.ui.form {
			margin-top: 0rem;
        	padding: 0rem;
		}

		button {
			padding: 0.8rem 1rem;
			border-radius: 0.5rem;
		}
	}
`;
