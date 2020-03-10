// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';

export const CHANGE_NOTIFICATION_PREFERENCE = gql`
	mutation changeNotificationPreference(
		$postParticipated: Boolean
		$postCreated: Boolean
		$newProposal: Boolean
		$ownProposal: Boolean
	) {
		changeNotificationPreference(
			notificationPreferences: {
				postParticipated: $postParticipated,
				postCreated: $postCreated,
				newProposal: $newProposal,
				ownProposal: $ownProposal
			}
		) {
            message
            token
		}
	}
`;
