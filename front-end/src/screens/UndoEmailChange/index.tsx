// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext,useEffect } from 'react';
import { Grid,Header, Icon, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useUndoEmailChangeMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import { handleTokenChange } from '../../services/auth.service';
import { NotificationStatus } from '../../types';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

interface Props {
	className?: string
}

const UndoEmailChange = ({ className }:Props): JSX.Element => {
	const router = useRouter();
	const currentUser = useContext(UserDetailsContext);
	const { queueNotification } = useContext(NotificationContext);
	const [undoEmailChangeMutation, { error }] = useUndoEmailChangeMutation({
		variables: {
			token: router.query.token
		}
	});

	useEffect(() => {
		undoEmailChangeMutation().then(({ data }) => {
			if (data && data.undoEmailChange) {
				if (data.undoEmailChange.token) {
					handleTokenChange(data.undoEmailChange.token);
				}

				if (data.undoEmailChange.email) {
					currentUser.setUserDetailsContextState((prevState) => {
						return {
							...prevState,
							email: data.undoEmailChange && data.undoEmailChange.email,
							email_verified: false
						};
					});
				}

				if (data.undoEmailChange.message) {
					queueNotification({
						header: 'Success!',
						message: data.undoEmailChange.message,
						status: NotificationStatus.SUCCESS
					});
				}

				router.history.push('/');
			}
		}).catch((e) => {
			console.error('Undo email Change error', e);
		});
	},[currentUser, queueNotification, router.history, undoEmailChangeMutation]);

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

export default styled(UndoEmailChange)`
	text-align: center
`;
