import React from 'react'

import { Grid, Divider } from 'semantic-ui-react'
import { Form } from '../../ui-components/Form'
import Loader from '../../ui-components/Loader';
import Username from './username'
import Fullname from './fullname'
import Email from './email'
import Password from  './password'
import { useProfileQuery } from '../../generated/graphql';

interface Props {
	className?: string
}

const Settings = ({ className }:Props): JSX.Element => {
	const { data, error } = useProfileQuery({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } })

	if (error) {
		return <div>{error.message}</div>;
	}

	if (data && data.profile) {
		const { username, name, email, email_verified } = data.profile
		return (
			<Grid className={className}>
				<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
				<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
					<Form>
						<h3>Settings</h3>
						<Divider/>
						<Username profileUsername={username}/>
						<Fullname profileName={name}/>
						<Divider/>
						<Email profileEmail={email} profileEmailVerified={email_verified}/>
						<Divider/>
						<Password/>
					</Form>
				</Grid.Column>
			</Grid>
		)
	}

	return <Loader/>
}

export default Settings
