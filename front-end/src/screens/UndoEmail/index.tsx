import React, { useEffect, useContext } from 'react';
import { Segment, Header, Icon, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useUndoEmailMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import { handleTokenChange } from '../../services/auth.service';
import { NotificationStatus } from '../../types';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

interface Props {
	className?: string
}

const UndoEmail = ({ className }:Props): JSX.Element => {
	const router = useRouter();
	const currentUser = useContext(UserDetailsContext);
	const { queueNotification } = useContext(NotificationContext);
	const [undoEmailMutation, { error }] = useUndoEmailMutation({
		variables: {
			token: router.query.token
		}
	});

	useEffect(() => {
		undoEmailMutation().then(({ data }) => {
			if (data && data.undoEmail && data.undoEmail.message && data.undoEmail.token) {
				if (data.undoEmail.token) {
					handleTokenChange(data.undoEmail.token);
				}
				currentUser.setUserDetailsContextState((prevState) => {
					return {
						...prevState,
						email_verified: true
					};
				});
				queueNotification({
					header: 'Success!',
					message: data.undoEmail.message,
					status: NotificationStatus.SUCCESS
				});
				router.history.push('/');
			}
		}).catch((e) => {
			console.error('Undo email error', e);
		});
	},[currentUser, queueNotification, router.history, undoEmailMutation]);

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
		</>
	);
};

export default styled(UndoEmail)`
	text-align: center
`;
