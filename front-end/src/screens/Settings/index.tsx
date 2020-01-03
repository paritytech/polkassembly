import React from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

import Email from './email';
import Fullname from './fullname';
import Password from  './password';
import Username from './username';

interface Props {
	className?: string
}

const Settings = ({ className }:Props): JSX.Element => {
	return (
		<Grid>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
			<Grid.Column className={className} mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
				<h3>Settings</h3>
				<Divider/>
				<Username/>
				<Fullname/>
				<Divider/>
				<Email/>
				<Divider/>
				<Password/>
			</Grid.Column>
		</Grid>
	);
};

export default styled(Settings)`
	background-color: #FFF;
	background-color:#FFF;
	padding: 2rem 3rem 3rem 3rem!important;
	margin-top: 4rem;
`;
