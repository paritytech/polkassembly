import React, { useEffect, useContext } from 'react';
import { Segment, Header, Icon, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import { NotificationContext } from '../../context/NotificationContext';
import { useVerifyEmailMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import { NotificationStatus } from '../../types';
import Loader from '../../ui-components/Loader';
import FilteredError from '../../ui-components/FilteredError';

interface Props {
	className?: string
}

const VerifyEmail = ({ className }:Props): JSX.Element => {
	const router = useRouter();
	const { queueNotification } = useContext(NotificationContext);
	const [verifyEmailMutation, { error }] = useVerifyEmailMutation({
		variables: {
			token: router.query.token
		}
	});

	useEffect(() => {
		verifyEmailMutation().then(({ data }) => {
			if (data && data.verifyEmail && data.verifyEmail.message) {
				queueNotification({
					header: 'Success!',
					message: data.verifyEmail.message,
					status: NotificationStatus.SUCCESS
				});
				router.history.push('/');
			}
		}).catch((e) => {
			console.error('Login error', e);
		});
	},[queueNotification, router.history, verifyEmailMutation]);

	return (
		<>
			{ error && error.message
				? <Grid className={className}>
					<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
					<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
						<Segment>
							<Header as='h2' icon>
								<Icon name='ambulance' />
								<FilteredError text={error.message}/>
							</Header>
						</Segment>
					</Grid.Column>
				</Grid>
				: <Loader/>
			}
		</>);
};

export default styled(VerifyEmail)`
	text-align: center
`;