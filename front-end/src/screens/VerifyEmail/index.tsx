import React, { useEffect } from 'react'
import { Loader, Segment, Header, Icon, Grid } from 'semantic-ui-react'
import styled from 'styled-components';

import { useVerifyEmailMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';

interface Props {
	className?: string
}

const VerifyEmail = ({ className }:Props): JSX.Element => {
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
				<Icon name='bug' />
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

		return <Loader>Verifying</Loader>
	}

	return   (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
				<Segment>
					{renderSuccess()}
					{renderError()}
					{renderLoading()}
				</Segment>
			</Grid.Column>
		</Grid>
	);
}

export default styled(VerifyEmail)`
	text-align: center
`