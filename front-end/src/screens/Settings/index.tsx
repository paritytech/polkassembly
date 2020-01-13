import React from 'react';
import { Grid, Divider, Container } from 'semantic-ui-react';
import styled from 'styled-components';

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
					<Divider/>
					<Address/>
				</Grid.Column>
				<Grid.Column only='computer' computer={4} largeScreen={6} widescreen={6}/>
			</Grid>
		</Container>
	);
};

export default styled(Settings)`
	background-color: #FFF;
	padding: 2rem 3rem 3rem 3rem!important;

	.ui.divider, .ui.divider:not(.vertical):not(.horizontal) {
		margin: 2rem 0;
		border-top: 1px solid #EEE;
		border-bottom: none;
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
