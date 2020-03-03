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
