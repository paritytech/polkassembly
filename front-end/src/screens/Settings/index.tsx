import React from 'react';

import { Grid, Divider } from 'semantic-ui-react';
import { Form } from '../../ui-components/Form';
import Username from './username';
import Fullname from './fullname';
import Email from './email';
import Password from  './password';

interface Props {
	className?: string
}

const Settings = ({ className }:Props): JSX.Element => {
	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
				<Form>
					<h3>Settings</h3>
					<Divider/>
					<Username/>
					<Fullname/>
					<Divider/>
					<Email/>
					<Divider/>
					<Password/>
				</Form>
			</Grid.Column>
		</Grid>
	);
};

export default Settings;
