import React from 'react';
import { Grid, Divider, Container } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import Email from './email';
import Fullname from './fullname';
import Password from  './password';
import Username from './username';

interface Props {
	className?: string
}

const Settings = ({ className }:Props): JSX.Element => {
	return (
		<Container>
			<Grid>
				<Grid.Column className={className} mobile={16} tablet={12} computer={12} largeScreen={10} widescreen={10}>
					<h3>Settings</h3>
					<Divider/>
					<Username/>
					<Fullname/>
					<Divider/>
					<Email/>
					<Divider/>
					<Password/>
				</Grid.Column>
				<Grid.Column only='computer' computer={4} largeScreen={6} widescreen={6}/>
			</Grid>
		</Container>
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
