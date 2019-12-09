import React, { useEffect } from 'react'
import { Dimmer, Loader, Segment, Header, Icon } from 'semantic-ui-react'

import { useVerifyEmailMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';

export default () => {
	const router = useRouter();
	const [verifyEmailMutation, { data, error }] = useVerifyEmailMutation({
		variables: {
			token: router.query.token
		}
	});

	useEffect(() => {
		verifyEmailMutation();
	},[])

	const renderError = (errorMessage?:string) => {
		if (!error && !errorMessage) return null

		return (
			<Header as='h2' icon>
				<Icon name='frown' />
				{error && error.message ? error.message : errorMessage}
			</Header>
		)
	}

	const renderSuccess = () => {
		if (data && data.verifyEmail && data.verifyEmail.message ){
			return (
				<Header as='h2' icon>
					<Icon name='check' />
					{data.verifyEmail.message}
				</Header>
			)
		} else {
			renderError('Unexpected data')
		}
	}
	
	const renderLoading = () => {
		if (data || error) return null

		return <Loader>Loading</Loader>
	}

	return   (
		<div>
			<Segment>
				<Dimmer active>
					{renderSuccess()}
					{renderError()}
					{renderLoading()}
				</Dimmer>
			</Segment>
		</div>
	);
}
